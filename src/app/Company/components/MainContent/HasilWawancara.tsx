"use client";

import KesimpulanPopup from "../popups/KesimpulanPopup";
import RankingPopup from "../popups/Ranking";
import { CompletedInterviewChartbyID } from "../Statistic/StatisticHasil";
import { useState } from "react";


const HasilWawancara = () => {
    
    const [isKesimpulanOpen, setIsKesimpulanOpen] = useState(false);
    const [selectedCandidates, setSelectedCandidates] = useState({idMahasiswa:"",nama:"", kesimpulan:""});
    const [isRankingOpen, setIsRankingOpen] = useState(false);

    const handleCancel = () => {
        setIsKesimpulanOpen(false)
        setIsRankingOpen(false)
    }
    const toggleKesimpulan = (idMahasiswa:string, nama:string, kesimpulan:string) =>{
        setIsKesimpulanOpen(true)
        setSelectedCandidates({idMahasiswa, nama, kesimpulan})
    }
    const toggleRanking = () => {
        setIsRankingOpen(true)
    }
    

    const dataDummy:{idMahasiswa:string, nama:string, kesimpulan:string}[] = [
        {
            idMahasiswa : "6706220039",
            nama : "Fadhilah Muhammad Farhan",
            kesimpulan : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum aut pariatur quae corrupti obcaecati fuga deserunt officiis quos dignissimos officia sunt nulla, fugit ex commodi? Natus recusandae tenetur deserunt nobis!"
        },
        {
            idMahasiswa : "670620069",
            nama: "Wisnu Kresnohadi",
            kesimpulan : "Beliau ini..."
        }
    ]


    return (
        <>
            <section className="w-full h-full relative flex flex-col py-2 md:p-4 text-md text-black dark:text-white">
                <div className="flex justify-between items-center">
                    <div className="flex-col">
                        <p className="font-bold text-sm md:text-base">Dashboard</p>
                        <p className="text-[#939393] dark:text-[#c0c0c0] text-xs md:text-sm">
                            Welcome Company X, Monitor your Interview here
                        </p>
                    </div>
                </div>
                <div className="mt-3 md:p-4 gap-2 md:gap-4 overflow-hidden pb-5 w-full h-full dark:bg-[#1e1f24] bg-[#ffffff] bg-border-2 border-[#232429] rounded-xl flex ">
                    <div className="w-full grid grid-cols-3 gap-3">
                        <div className="h-full flex flex-col gap-2 col-span-1">
                            <div className=" h-[50%] dark:bg-[#111113] rounded-xl border-2 dark:border-[#3b3d43] py-2 flex justify-center items-center">
                                <CompletedInterviewChartbyID/>
                            </div>
                            <div className=" h-[50%] dark:bg-[#111113] rounded-xl border-2 dark:border-[#3b3d43] py-2 flex flex-col justify-between items-center">
                                <div className="w-full flex flex-col gap-10 items-center  ">
                                    <p>Rekomendasi Kandidat :</p>
                                    <p className=" text-base md:text-xl font-semibold">Fadhilah Muhammad Farhan</p>                               
                                </div>
                                <div className="w-full flex flex-col gap-2 items-center">
                                    <p className="text-center text-xs md:text-sm text-[#565656]">Kami Merekomendasikan kandidat berdasarkan ranking dari kesimpulan wawancara yang dibuat dengan sistem analytical hierarchy process</p>
                                    <button onClick={()=>{toggleRanking()}} className="bg-[#4EA971] px-2 py-1 hover:bg-[#71de9b] flex justify-center text-xs md:text-sm font-semibold items-center rounded-lg ">
                                        Lihat rekomendasi kandidat lain
                                    </button>
                                </div>
                                


                            </div>
                        </div>
                        <div className="h-full col-span-2 dark:bg-[#111113] rounded-xl border-2 dark:border-[#3b3d43] py-2 flex flex-col  items-start p-2 overflow-y-scroll scrollbar-hide gap-1">
                            
                                {
                                    dataDummy.map((data)=>(
                                        <div className="dark:bg-[#1e1f24] w-full p-2 flex justify-between rounded-lg dark:border-[#303237] border-2">
                                            <p>{data.nama} - {data.idMahasiswa}</p>
                                            <button onClick={()=>{toggleKesimpulan(data.idMahasiswa, data.nama, data.kesimpulan)}} className="bg-[#4EA971] px-2 py-1 hover:bg-[#71de9b] flex justify-center text-xs md:text-sm font-semibold items-center rounded-lg ">
                                                Cek Kesimpulan Wawancara
                                            </button>
                                        </div>
                                    ))
                                }
                            
                            
                        </div>

                    </div>
                </div>
                {isKesimpulanOpen && <KesimpulanPopup kesimpulanPopup={handleCancel} idMahasiswa={selectedCandidates.idMahasiswa} nama={selectedCandidates.nama} kesimpulan={selectedCandidates.kesimpulan} />}
                {isRankingOpen && <RankingPopup rankingPopup={handleCancel}  />}
            </section>
        </>
    );
};

export default HasilWawancara;
