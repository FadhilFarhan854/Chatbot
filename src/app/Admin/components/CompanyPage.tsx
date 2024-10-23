"use client";

const CompanyAdmin = () => {
    return(
        <>
        <section className="w-full h-full flex flex-col py-2 md:p-4 text-md text-black dark:text-white">
            <div className="flex justify-between  items-center">
                <div className="flex-col">
                    <p className="font-bold text-sm md:text-base">Company Control</p>
                    <p className="text-[#939393] dark:text-[#c0c0c0] text-xs md:text-sm" >
                        Give admin full control to all registered company
                    </p>
                </div>
                
                <button className="px-2 py-2 bg-[#4EA971] font-bold rounded-lg text-xs md:text-sm">
                    Add Company
                </button>
            </div>

            <div className="mt-3 md:p-4 gap-2 md:gap-4 overflow-hidden pb-5 w-full h-full dark:bg-[#1e1f24] bg-[#ffffff] bg-border-2 border-[#232429] rounded-xl flex flex-col">
                <p className="text-base md:text-lg">List of registered company</p>
                <ul className=" text-sm md:text-base w-full overflow-y-scroll scrollbar-hide flex flex-col gap-2">
                    <li className="w-full  font-semibold border-b-2 text-base md:text-lg border-black dark:border-white flex">
                        <p className="w-[5%] text-center flex justify-center items-center ">No</p>
                        <p className="w-[20%] text-center flex justify-center items-center ">Id  </p>
                        <p className="w-[30%] text-center flex justify-center items-center ">Nama Perusahaan</p>
                        <p className="w-[15%] text-center flex justify-center items-center ">List Pertanyaan</p>
                        <p className="w-[15%] text-center flex justify-center items-center ">Detail</p>
                        <p className="w-[15%] text-center flex justify-center items-center ">Hapus</p>
                    </li>
                    
                    <li className="w-full border-b-2 border-black dark:border-white flex">
                        <p className="w-[5%] text-center flex justify-center items-center ">1</p>
                        <p className="w-[20%] text-center flex justify-center items-center ">37473721</p>
                        <p className="w-[30%] text-center flex justify-center items-center ">PT.SarimiIsidua</p>
                         <div className="w-[15%] text-center flex justify-center items-center pb-1 ">
                            <button className=" bg-[#4EA971] px-2 py-1 hover:bg-green-200 flex justify-center text-xs md:text-base font-semibold items-center rounded-lg ">Check</button>
                        </div>
                        <div className="w-[15%] text-center flex justify-center items-center pb-1 ">
                            <button className=" bg-[#359be5] px-2 py-1 hover:bg-[#86c2ed] flex justify-center text-xs md:text-base font-semibold items-center rounded-lg ">Detail</button>
                        </div>
                        <div className="w-[15%] text-center flex justify-center items-center pb-1 ">
                            <button className=" bg-[#f12e2e] px-2 py-1 hover:bg-[#e46060] flex justify-center text-xs md:text-base font-semibold items-center rounded-lg ">Delete</button>
                        </div>
                    </li>
                    <li className="w-full border-b-2 border-black dark:border-white flex">
                        <p className="w-[5%] text-center flex justify-center items-center ">1</p>
                        <p className="w-[20%] text-center flex justify-center items-center ">37473721</p>
                        <p className="w-[30%] text-center flex justify-center items-center ">PT.SarimiIsidua</p>
                         <div className="w-[15%] text-center flex justify-center items-center pb-1 ">
                            <button className=" bg-[#4EA971] px-2 py-1 hover:bg-green-200 flex justify-center text-xs md:text-base font-semibold items-center rounded-lg ">Check</button>
                        </div>
                        <div className="w-[15%] text-center flex justify-center items-center pb-1 ">
                            <button className=" bg-[#359be5] px-2 py-1 hover:bg-[#86c2ed] flex justify-center text-xs md:text-base font-semibold items-center rounded-lg ">Detail</button>
                        </div>
                        <div className="w-[15%] text-center flex justify-center items-center pb-1 ">
                            <button className=" bg-[#f12e2e] px-2 py-1 hover:bg-[#e46060] flex justify-center text-xs md:text-base font-semibold items-center rounded-lg ">Delete</button>
                        </div>
                    </li>
                    <li className="w-full border-b-2 border-black dark:border-white flex">
                        <p className="w-[5%] text-center flex justify-center items-center ">1</p>
                        <p className="w-[20%] text-center flex justify-center items-center ">37473721</p>
                        <p className="w-[30%] text-center flex justify-center items-center ">PT.SarimiIsidua</p>
                        <div className="w-[15%] text-center flex justify-center items-center pb-1 ">
                            <button className=" bg-[#4EA971] px-2 py-1 hover:bg-green-200 flex justify-center text-xs md:text-base font-semibold items-center rounded-lg ">Check</button>
                        </div>
                        <div className="w-[15%] text-center flex justify-center items-center pb-1 ">
                            <button className=" bg-[#359be5] px-2 py-1 hover:bg-[#86c2ed] flex justify-center text-xs md:text-base font-semibold items-center rounded-lg ">Detail</button>
                        </div>
                        <div className="w-[15%] text-center flex justify-center items-center pb-1 ">
                            <button className=" bg-[#f12e2e] px-2 py-1 hover:bg-[#e46060] flex justify-center text-xs md:text-base font-semibold items-center rounded-lg ">Delete</button>
                        </div>
                    </li>
                    <li className="w-full border-b-2 border-black dark:border-white flex">
                        <p className="w-[5%] text-center flex justify-center items-center ">1</p>
                        <p className="w-[20%] text-center flex justify-center items-center ">37473721</p>
                        <p className="w-[30%] text-center flex justify-center items-center ">PT.SarimiIsidua</p>
                        <div className="w-[15%] text-center flex justify-center items-center pb-1 ">
                            <button className=" bg-[#4EA971] px-2 py-1 hover:bg-green-200 flex justify-center text-xs md:text-base font-semibold items-center rounded-lg ">Check</button>
                        </div>
                        <div className="w-[15%] text-center flex justify-center items-center pb-1 ">
                            <button className=" bg-[#359be5] px-2 py-1 hover:bg-[#86c2ed] flex justify-center text-xs md:text-base font-semibold items-center rounded-lg ">Detail</button>
                        </div>
                        <div className="w-[15%] text-center flex justify-center items-center pb-1 ">
                            <button className=" bg-[#f12e2e] px-2 py-1 hover:bg-[#e46060] flex justify-center text-xs md:text-base font-semibold items-center rounded-lg ">Delete</button>
                        </div>
                        
                    </li>
                    
                </ul>
            </div>
        </section>
        </>
    )
}

export default CompanyAdmin;