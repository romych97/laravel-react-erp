"use client";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { getCryptocurrencies } from "@/services/cryptocurrencies/cryptocurrencies";
import CryptocurrenciesTable from "@/components/Tables/CryptocurrenciesTable";

const BasicCryptocurrencies: React.FC = () => {

    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getCryptocurrencies()
                setData(response?.payload?.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    
    return (
        <DefaultLayout>
            <>
                <Breadcrumb pageName="Криптовалюты" />
                {
                    data.length ? <CryptocurrenciesTable data={data} /> : null
                }
            </>
        </DefaultLayout>
    );
};

export default BasicCryptocurrencies;
