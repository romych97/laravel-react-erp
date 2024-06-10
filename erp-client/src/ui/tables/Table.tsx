
const Table = (props: any) => {
    return (
      <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                { props.headerItems.map((item:string) => (
                    <th key={item} className="min-w-[90px] px-4 py-4 font-bold text-black dark:text-white xl:pl-11">
                        { item }
                    </th>
                )) }
              </tr>
            </thead>
            <tbody>
              { props.children }
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default Table;
  