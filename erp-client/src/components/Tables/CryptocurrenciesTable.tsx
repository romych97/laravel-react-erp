
const CryptocurrenciesTable = ({ data = [] }: any) => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[90px] px-4 py-4 font-bold text-black dark:text-white xl:pl-11">
                ID
              </th>
              <th className="min-w-[150px] px-4 py-4 font-bold text-black dark:text-white">
                Название
              </th>
              <th className="min-w-[120px] px-4 py-4 font-bold text-black dark:text-white">
                24ч
              </th>
              <th className="min-w-[120px] px-4 py-4 font-bold text-black dark:text-white">
                7д
              </th>
              <th className="min-w-[120px] px-4 py-4 font-bold text-black dark:text-white">
                30д
              </th>
              <th className="min-w-[120px] px-4 py-4 font-bold text-black dark:text-white">
                90д
              </th>
              <th className="min-w-[120px] px-4 py-4 font-bold text-black dark:text-white">
                Цена
              </th>
              <th className="min-w-[120px] px-4 py-4 font-bold text-black dark:text-white">
                График
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
                  <h5 className="font-bold text-black dark:text-white">
                    {packageItem.name}
                  </h5>
                  <p className="text-sm font-bold">{packageItem.symbol}</p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-sm font-bold">{packageItem.quote.USD.percent_change_24h}</p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-sm font-bold">{packageItem.quote.USD.percent_change_7d}</p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-sm font-bold">{packageItem.quote.USD.percent_change_30d}</p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-sm font-bold">{packageItem.quote.USD.percent_change_60d}</p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-sm font-bold">${packageItem.quote.USD.price}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CryptocurrenciesTable;
