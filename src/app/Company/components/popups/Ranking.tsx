"use client";
import React from "react";


interface Ranking {
    rankingPopup:()=>void
}

const RankingPopup:React.FC<Ranking> = ({rankingPopup}) => {

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

    return(
        <>
            
            <section className="w-full h-full flex justify-center absolute items-center text-black dark:text-white">
                <div className="max-h-96 p-3 md:w-[40lvw]  dark:bg-[#24252b] backdrop-blur-md rounded-xl dark:border-[#3b3d47] border-2 flex flex-col gap-3 overflow-y-scroll scrollbar-hide justify-between">
                    <div className="flex flex-col gap-3  mb-8">
                        <p className="font-semibold">Peringkat kandidat berdasarkan hasil wawancara</p>
                        <div className="w-full flex flex-col gap-2">
                        {
                            dataDummy.map((data, index)=>(
                                <div className="dark:bg-[#1e1f24] w-full p-2 flex justify-between rounded-lg dark:border-[#303237] border-2">
                                    <p>{index+1}. {data.nama} - {data.idMahasiswa}</p>
                                </div>
                            ))
                        }
                        </div>
                        
                    </div>

                    
                    <button onClick={rankingPopup} className=" bg-[#359be5] px-3 py-2 hover:bg-[#86c2ed] flex justify-center text-xs md:text-sm font-semibold items-center rounded-lg ">
                        Close
                    </button >
                </div>

            </section>
           
        </>
    )
}

export default RankingPopup