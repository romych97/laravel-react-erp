"use client";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import CategoriesTable from "@/components/Tables/CategoriesTable";
import { createCategoryService, getCategoriesService } from "@/services/categories/categories";
import Modal from "@/ui/modals/Modal";

const BasicCategories: React.FC = () => {

    const [createCategoryModal, setCreateCategoryModal] = React.useState(false);
    const [categories, setCategories] = React.useState([]) as any;
    const [category, setCategory] = React.useState({});

    const createCategory = async () => {
        const response = await createCategoryService(category);
        if (response.data.status == "success") {
            setCategories([...categories, response.data.payload])
        }
    }

    const getCategories = async () => {
        const response = await getCategoriesService();
        console.log("file: page.tsx:17 - getCategories - response:", response);
        setCategories(response.data.payload)
    }

    React.useEffect(() => { getCategories(); }, []);

    return (
        <DefaultLayout>
            <>
                <Breadcrumb pageName="Категории" />
                <div className="w-full flex items-center justify-end mb-2">
                    <button
                        type="button"
                        onClick={() => setCreateCategoryModal(true)}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >Добавить категорию</button>
                </div>
                {createCategoryModal && (
                    <Modal
                        title="Создание категории"
                        switchModal={setCreateCategoryModal}
                    >
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Название</label>
                            <input
                                onChange={(e: any) => setCategory({ name: e.target.value })}
                                type="email" name="email" id="email" className="dark:bg-boxdark-2 dark:border-strokedark border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required
                            />
                        </div>
                        <div className="flex items-center justify-end">
                            <button onClick={() => setCreateCategoryModal(false)} type="submit" className="me-2 text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Отмена</button>
                            <button onClick={() => createCategory()} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Сохранить</button>
                        </div>
                    </Modal>
                )}
                {categories?.length && <CategoriesTable data={categories} />}
            </>
        </DefaultLayout>
    );
};

export default BasicCategories;
