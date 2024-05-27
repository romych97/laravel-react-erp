"use client";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import SitesTable from "@/components/Tables/SitesTable";
import CreateStoreModal from "@/components/Modals/CreateStoreModal";
const BasicSites: React.FC = () => {

    const [createStoreModal, showCreateStoreModal] = React.useState(false);
    const [data, setData] = React.useState([
        { id: "1", name: "Витрина 1" },
    ]);

    return (
        <DefaultLayout>
            <>
                <Breadcrumb pageName="Сайты" />
                <div className="w-full flex items-center justify-end mb-2">
                    <button onClick={() => showCreateStoreModal(true)} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        Добавить сайт
                    </button>
                </div>
                {data.length ? <SitesTable data={data} /> : null}
                {createStoreModal && <CreateStoreModal 
                    showCreateStoreModal={showCreateStoreModal} 
                />}
            </>
        </DefaultLayout>
    );
};

export default BasicSites;
