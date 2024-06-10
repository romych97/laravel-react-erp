import { uploadMainImageService } from "@/services/images/images";
import { updateProductService } from "@/services/products/products";
import useProductsStore from "@/store/productStore";
import Modal from "@/ui/modals/Modal";
import React from "react";

const EditProductModal = (props: any) => {
    console.log("file: EditProductModal.tsx:8 - EditProductModal - props:", props);

    const { switchModal } = useProductsStore();
    const [mainImage, setMainImage] = React.useState(null) as any;
    const [mainImagePreview, setMainImagePreview] = React.useState(null);

    const mainImageInputRef = React.useRef(null) as any;
    const handleMainImageClick = () => mainImageInputRef.current.click();

    const handleInputChange = (e: React.ChangeEvent<any>) => {
        props.product[e.target.name] = e.target.value
        console.log("file: EditProductModal.tsx:19 - handleInputChange - props:", props);
        // const { name, value } = e.target;
        // props.setProducts({ ...props.products, [name]: value });
    };

    const updateProduct = async () => {
        if (props.product.name && props.product.original_price) {
            const response = await updateProductService(props.product);
            console.log("file: EditProductModal.tsx:24 - updateProduct - response:", response);
            if (response.data.status == "success") {
                props.setProducts([...props.products, response.data.payload])
            }
        }
    }

    const handleMainImageChange = (e: any) => {
        const file = e.target.files[0];
        setMainImage(file);

        const reader = new FileReader() as any;
        reader.onloadend = () => {
            setMainImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const uploadMainImage = async () => {
        const formData = new FormData();
        formData.append('main_image', mainImage);

        const response = await uploadMainImageService(formData);
    };

    const fields = [
        { name: "name", label: "Название", type: "text", required: true },
        { name: "description", label: "Описание", type: "textarea", required: false },
        { name: "original_price", label: "Цена", type: "number", required: false },
        { name: "quantity", label: "Количество", type: "number", required: false },
    ];

    return (
        <Modal
            title="Редактирование товара"
            switchModal={switchModal}
            fields={[]}
        >
            {fields.map((field, index) => (
                <div key={index}>
                    <label htmlFor={field.name} className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
                        {field.label}
                        {field.required ? <span className="ml-1 text-red ">*</span> : null}
                    </label>

                    <input
                        onChange={handleInputChange}
                        defaultValue={props.product[field.name] || ""}
                        type={field.type} name={field.name} id={field.name} className="dark:bg-boxdark-2 dark:border-strokedark border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white outline-0" placeholder=""
                    />
                </div>
            ))}
            <div>
                <div>
                    <input
                        type="file"
                        onChange={handleMainImageChange}
                        style={{ display: 'none' }}
                        ref={mainImageInputRef}
                    />
                    <div onClick={handleMainImageClick} style={{ cursor: 'pointer' }}>
                        {mainImagePreview ? (
                            <img src={mainImagePreview} alt="Main Image Preview" style={{ width: '200px', height: '200px' }} />
                        ) : (
                            <img
                                src="https://static.vecteezy.com/system/resources/previews/007/567/154/original/select-image-icon-vector.jpg"
                                alt="Main Image Preview"
                                style={{ width: '200px', height: '200px' }}
                            />
                        )}
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-end">
                <button onClick={() => switchModal("")} type="button" className="me-2 text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Отмена</button>
                <button onClick={() => updateProduct()} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Сохранить</button>
            </div>
        </Modal>
    );
};

export default EditProductModal;