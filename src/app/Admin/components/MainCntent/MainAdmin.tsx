"useClient";

import { ChartPerusahaan, LineChart,  Statistic1 } from "../Statistic";

const DashboardAdmin = () => {

    return(
        <>
        
        <section className="w-full h-full relative flex flex-col py-2 md:p-4 text-md text-black dark:text-white">
            <div className="flex justify-between items-center">
                <div className="flex-col">
                    <p className="font-bold text-sm md:text-base">Dashboard</p>
                    <p className="text-[#939393] dark:text-[#c0c0c0] text-xs md:text-sm" >
                        Welcome admin, What are you gonna do today ?
                    </p>
                </div>
                
                <button className="px-2 py-2 bg-[#4EA971] font-bold rounded-lg text-xs md:text-sm">
                    Add Company
                </button>
            </div>
            <div className="mt-3 md:p-4 gap-2 md:gap-4 overflow-hidden pb-5 w-full h-full dark:bg-[#1e1f24] bg-[#ffffff] bg-border-2 border-[#232429] rounded-xl flex flex-col">
                <div className="w-full h-[50%] flex flex-col">
                    <div className="w-full grid grid-cols-3 gap-2">
                        <div className=" col-span-1  dark:bg-[#111113] rounded-xl border-2 dark:border-[#3b3d43] py-2">
                            <ChartPerusahaan />
                        </div>
                        <div className="w-full dark:bg-[#111113] rounded-xl border-2 dark:border-[#3b3d43] col-span-2">
                           <LineChart  />
                        </div>
                    </div>

                    <div className="w-full h-full grid grid-cols-3 justify-between mt-2  gap-2 ">
                        <div className="w-full h-64 text-center px-2 dark:bg-[#111113] flex flex-col justify-between rounded-xl border-2 dark:border-[#3b3d43] py-2">
                             <p className="font-thin text-xs md:text-sm text-[#666]">Token Remaining :</p>
                             <p className="font-thin text-5xl">10700</p>
                             <p className="font-thin text-xs md:text-sm text-[#666]">Tolong perhatikan jumlah token yang tersedia, setiap pertanyaan dapat memakan 200-300 token</p>
                             <button className="bg-[#4EA971] px-2 py-1 hover:bg-[#71de9b] flex justify-center text-xs md:text-sm font-semibold items-center rounded-lg">
                                Add Billing
                             </button>
                        </div>
                        <div className="w-full h-64 text-center px-2 dark:bg-[#111113] flex flex-col justify-between rounded-xl border-2 dark:border-[#3b3d43] py-2">
                             <p className="font-thin text-xs md:text-sm text-[#666]">Company Request :</p>
                             <p className="font-thin text-5xl">10</p>
                             <p className="font-thin text-xs md:text-sm text-[#666]">Ada 10 request dari perusaan, klik button untuk mansuk ke halaman approval perusahaan</p>
                             <button className="bg-[#4EA971] px-2 py-1 hover:bg-[#71de9b] flex justify-center text-xs md:text-sm font-semibold items-center rounded-lg">
                                Approval
                             </button>
                        </div>
                        <div className="w-full h-64  dark:bg-[#111113] rounded-xl border-2 dark:border-[#3b3d43] py-2 flex justify-center items-center">
                            <Statistic1 />
                        </div>
                    </div>
                </div>
            </div>

        </section>
        
        </>
    )
}

export default DashboardAdmin;