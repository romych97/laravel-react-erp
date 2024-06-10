import { destroyProductService } from "@/services/products/products";
import useProductsStore from "@/store/productStore";
import Button from "@/ui/buttons/Button";
import Modal from "@/ui/modals/Modal";
import React from "react";

const DestroyProductModal = (props: any) => {

    const { switchModal } = useProductsStore();

    const destroyProduct = async (id:any) => {
        const response = await destroyProductService(id);
        if (response.data.status == "success") {
            props.setProducts([...props.products, response.data.payload])
        }
    }

    return (
        <Modal
            title={"Удаление товара № " + props.product.id}
            switchModal={switchModal}
            fields={[]}
        >
            <div>Вы действительно хотите удалить данный товар?</div>
            <div className="flex items-center justify-end">
                <Button className="me-2" variant="warning" onClick={() => switchModal("")}>Отмена</Button>
                <Button variant="primary" onClick={destroyProduct(props.product.id)}>Подтвердить удаление</Button>
            </div>
        </Modal>
    );
};

export default DestroyProductModal;
