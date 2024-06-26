import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import CryptocurrenciesTable from "@/components/Tables/CryptocurrenciesTable";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Next.js Dashboard Template",
  description: "Next.js Dashboard description",
};

const TablesPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Tables" />

      <div className="flex flex-col gap-10">
        <CryptocurrenciesTable />
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
