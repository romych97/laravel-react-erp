"use client";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { getProductsService } from "@/services/products/products";
import Table from "@/ui/tables/Table";
import Button from "@/ui/buttons/Button";
import CreateProductModal from "@/components/Modals/Products/CreateProductModal";
import DestroyProductModal from "@/components/Modals/Products/DestroyProductModal";
import useProductsStore from "@/store/productStore";
import EditProductModal from "@/components/Modals/Products/EditProductModal";

const BasicProducts: React.FC = () => {

    const { currentModal, switchModal } = useProductsStore();
    const [products, setProducts] = React.useState([]) as any;

    const getProducts = async () => {
        const response = await getProductsService();
        setProducts(response.data.payload)
    }

    React.useEffect(() => { getProducts(); }, []);

    return (
        <DefaultLayout>
            <>
                <Breadcrumb pageName="Товары" />
                <div className="w-full flex items-center justify-end mb-2">
                    <Button variant="primary" onClick={() => switchModal("create")}>Добавить товар</Button>
                </div>

                {products?.length ? (
                    <Table headerItems={["ID", "Название", ""]}>
                        {products.map((item: any, key: number) => (
                            <tr key={key}>
                                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                                    <p className="text-sm font-bold">{item.id}</p>
                                </td>
                                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                                    <p className="text-sm font-bold">{item.name}</p>
                                </td>
                                <td className="flex justify-end border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                                    <Button className="mr-2" variant="primary" onClick={() => switchModal("edit")}>Редактировать</Button>
                                    <Button variant="warning" onClick={() => switchModal("destroy")}>Удалить</Button>
                                </td>
                                <td>
                                    {currentModal == "edit" && <EditProductModal
                                        product={item} products={products} setProducts={setProducts}
                                    />}
                                    {currentModal == "destroy" && <DestroyProductModal
                                        product={item} products={products} setProducts={setProducts}
                                    />}
                                </td>
                            </tr>
                        ))}
                    </Table>
                ) : null}

                {currentModal == "create" && <CreateProductModal 
                    products={products} setProducts={setProducts} 
                />}

            </>
        </DefaultLayout>
    );
};

export default BasicProducts;
