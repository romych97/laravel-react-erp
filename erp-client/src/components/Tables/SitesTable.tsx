
const SitesTable = ({ data = [] }: any) => {
    return (
      <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="min-w-[90px] px-4 py-4 font-bold text-black dark:text-white xl:pl-11">
                  ID
                </th>
                <th className="min-w-[90px] px-4 py-4 font-bold text-black dark:text-white xl:pl-11">
                  Название
                </th>
                <th className="min-w-[90px] px-4 py-4 font-bold text-black dark:text-white xl:pl-11">
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((packageItem: any, key: number) => (
                <tr key={key}>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-sm font-bold">{packageItem.id}</p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-sm font-bold">{packageItem.name}</p>
                  </td>
                  <td className="flex justify-end border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <button type="button" className="me-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Управление</button>
                    <button type="button" className="text-white bg-orange-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">Удалить</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default SitesTable;
  