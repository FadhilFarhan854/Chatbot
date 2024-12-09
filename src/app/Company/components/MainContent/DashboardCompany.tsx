"use client"

import { CompletedInterviewChart, DailyInterview } from "../StatisticTemp"

const DashboardCompany = () => {

    return(
        <>
        <section className="w-full h-full relative flex flex-col py-2 md:p-4 text-md text-black dark:text-white">
            <div className="flex justify-between items-center">
                <div className="flex-col">
                    <p className="font-bold text-sm md:text-base">Dashboard</p>
                    <p className="text-[#939393] dark:text-[#c0c0c0] text-xs md:text-sm" >
                        Welcome Company X, Monitor your Interview here 
                    </p>
                </div>
                
            </div>
            <div className="mt-3 md:p-4 gap-2 md:gap-4 overflow-hidden pb-5 w-full h-full dark:bg-[#1e1f24] bg-[#ffffff] bg-border-2 border-[#232429] rounded-xl flex flex-col">
                <div className="w-full h-[50%] flex flex-col">
                    <div className="w-full grid grid-cols-3 gap-2">
                        <div className=" col-span-1  dark:bg-[#111113] rounded-xl border-2 dark:border-[#3b3d43] py-2">
                            <CompletedInterviewChart/>
                        </div>
                        <div className="w-full dark:bg-[#111113] rounded-xl border-2 dark:border-[#3b3d43] col-span-2">
                          <DailyInterview/>
                        </div>
                    </div>

                    <div className="w-full h-full grid grid-cols-3 justify-between mt-2  gap-2 ">
                        <div className="w-full h-64 text-center px-2 dark:bg-[#111113] flex flex-col justify-between rounded-xl border-2 dark:border-[#3b3d43] py-2">
                             <p className="font-thin text-xs md:text-sm text-[#666]">Total Pendaftar :</p>
                             <p className="font-thin text-5xl">13</p>
                             <p className="font-thin text-xs md:text-sm text-[#666]">Jumlah mahasiswa yang mendaftar di perusahaan anda adalah 13 orang, gunakan page ini untuk memonitor statistik wawancara</p>
                             <button className="bg-[#4EA971] px-2 py-1 hover:bg-[#71de9b] flex justify-center text-xs md:text-sm font-semibold items-center rounded-lg">
                                Lihat List Pendaftar
                             </button>
                        </div>
                        <div className="w-full h-64 text-center px-2 dark:bg-[#111113] flex flex-col justify-between rounded-xl border-2 dark:border-[#3b3d43] py-2">
                             <p className="font-thin text-xs md:text-sm text-[#666]">Interview yang sedang berlangsung :</p>
                             <p className="font-thin text-5xl">10</p>
                             <p className="font-thin text-xs md:text-sm text-[#666]">Anda mempublikasikan 10 wawancara saat ini, klik tombol tibawah untuk menambahkan wawancara lagi</p>
                             <button className="bg-[#4EA971] px-2 py-1 hover:bg-[#71de9b] flex justify-center text-xs md:text-sm font-semibold items-center rounded-lg">
                                Tambah Wawancara
                             </button>
                        </div>
                        <div className="w-full h-64 text-center px-2 dark:bg-[#111113] flex flex-col justify-between rounded-xl border-2 dark:border-[#3b3d43] py-2">
                             <p className="font-thin text-xs md:text-sm text-[#666]">Interview yang sudah dilakukan :</p>
                             <p className="font-thin text-5xl">15</p>
                             <p className="font-thin text-xs md:text-sm text-[#666]">Terdapat 15 wawancara yang sudah dilakukan mahasiswa di perusahaan anda, klik button dibawa untuk melihat hasil</p>
                             <button className="bg-[#4EA971] px-2 py-1 hover:bg-[#71de9b] flex justify-center text-xs md:text-sm font-semibold items-center rounded-lg">
                                Lihat Hasil
                             </button>
                        </div>
                        
                    </div>
                </div>
            </div>

        </section>
        </>
    )

}

export default DashboardCompany