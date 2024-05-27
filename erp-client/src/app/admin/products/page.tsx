"use client";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { createProductService, getProductsService } from "@/services/products/products";
import Modal from "@/app/admin/ui/modals/Modal";
import Table from "../ui/tables/Table";
import Button from "../ui/buttons/Button";

const BasicProducts: React.FC = () => {

    const [createProductModal, setCreateProductModal] = React.useState(false);
    const [products, setProducts] = React.useState([]) as any;
    const [category, setProduct] = React.useState({});

    const createProduct = async () => {
        const response = await createProductService(category);
        if (response.data.status == "success") {
            setProducts([...products, response.data.payload])
        }
    }

    const getProducts = async () => {
        const response = await getProductsService();
        console.log("file: page.tsx:17 - getProducts - response:", response);
        setProducts(response.data.payload)
    }

    React.useEffect(() => { getProducts(); }, []);

    return (
        <DefaultLayout>
            <>
                <Breadcrumb pageName="Товары" />
                <div className="w-full flex items-center justify-end mb-2">
                    <Button trigger={setCreateProductModal}>Добавить товар</Button>
                </div>
                {createProductModal && (
                    <Modal
                        title="Создание Товара"
                        switchModal={setCreateProductModal}
                    >
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Название</label>
                            <input
                                onChange={(e: any) => setProduct({ name: e.target.value })}
                                type="email" name="email" id="email" className="dark:bg-boxdark-2 dark:border-strokedark border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required
                            />
                        </div>
                        <div className="flex items-center justify-end">
                            <button onClick={() => setCreateProductModal(false)} type="submit" className="me-2 text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Отмена</button>
                            <button onClick={() => createProduct()} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Сохранить</button>
                        </div>
                    </Modal>
                )}
                {products?.length && (
                    <Table headerItems={["ID", "Название", ""]}>
                        {products.map((packageItem: any, key: number) => (
                            <tr key={key}>
                                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                                    <p className="text-sm font-bold">{packageItem.id}</p>
                                </td>
                                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                                    <p className="text-sm font-bold">{packageItem.name}</p>
                                </td>
                                <td className="flex justify-end border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                                    <button type="button" className="text-white bg-orange-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">Удалить</button>
                                </td>
                            </tr>
                        ))}
                    </Table>
                )}
            </>
        </DefaultLayout>
    );
};

export default BasicProducts;
