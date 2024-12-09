"use client"

import { useState } from "react"
import { finished } from "stream";



const Wawancara = () => {
    const [selectedInterview, setSelectedInterview] = useState({});

    const activeInterview = [
        {
            idInterview:"12345",
            idCompany:"696969",                    
            bidang:"Frontend Developer",
            deskripsi:"Requirement : js, html,css",
            startDate:"20-05-20205",
            deadline:"21-05-2025",
            listPertanyaan:["apa paengalamanmu", "mampukah anda bekerja dalam tim"],
            finished: false,
        },
        {
            idInterview:"12345",
            idCompany:"696969",                    
            bidang:"Frontend Developer",
            deskripsi:"Requirement : js, html,css",
            startDate:"20-05-20205",
            deadline:"21-05-2025",
            listPertanyaan:["apa paengalamanmu", "mampukah anda bekerja dalam tim"],
            finished: true,
        }
    ]

    const company = [
        {
            idCompany:"696969",
            companyName:"PTaaaaIsi2",
            alamat:"jalanABC",
            mulaiMagang:"20-05-20205",
            selesaiMagang:"20-05-20205",
           
        }
    ]



    return(
        <>
        <section className="w-full h-full relative flex flex-col py-2 md:p-4 text-md text-black dark:text-white">
            <div className="flex justify-between items-center">
                <div className="flex flex-col">
                    <p className="font-bold text-sm md:text-base">Active Interview</p>
                    <p className="text-[#939393] dark:text-[#c0c0c0] text-xs md:text-sm" >
                        Here is your active interview, max ammount of active interivew id 2. please do the interview before deadline !
                    </p>
                </div>

                
            </div>
            <div className="mt-3 md:p-4 gap-2 md:gap-4 overflow-hidden pb-5 w-full h-full dark:bg-[#1e1f24] bg-[#ffffff] bg-border-2 border-[#232429] rounded-xl grid ">

            <div className="w-full h-full flex-col gap-2 p-3 text-center">
            <div className="w-full dark:bg-[#24252b] p-4 flex gap-3 text-sm md:text-base font-semibold ">
                <div className="flex w-full border-b-2">
                <p className=" w-[5%] border-r-white ">no</p>
                    <p className=" w-[20%]">Nama Perusahaan</p>
                    <p className=" w-[25%]">Posisi magang</p>
                    <p className=" w-[15%]">Mulai Wawancara</p>
                    <p className=" w-[15%]">Deadline </p>
                    <div className="w-[20%] text-center flex justify-center">
                    </div>
                </div>
                    
                </div>
                        {
                            activeInterview.map((rec, index) => {
                                
                                const companyDetails = company.find(comp => comp.idCompany === rec.idCompany);

                                return (
                                    <div  className="w-full dark:bg-[#24252b] p-4 flex rounded-md gap-3 ">
                                        <p className=" w-[5%] border-r-2 border-r-white ">{index + 1}</p>
                                        <p className=" w-[20%]">{companyDetails?.companyName || "Unknown Company"}</p>
                                        <p className=" w-[25%]">{rec.bidang}</p>
                                        <p className=" w-[15%]">{rec.startDate}</p>
                                        <p className=" w-[15%]">{rec.deadline}</p>
                    
                                        <div className="w-[20%] text-center flex justify-center">
                                            <button 
                                                onClick={() => {}}
                                                disabled={rec.finished} 
                                                className={rec.finished? 
                                                    "bg-[#5b5b5b] px-2 py-1  flex justify-center text-xs md:text-sm font-semibold items-center rounded-lg":
                                                    "bg-[#4EA971] px-2 py-1 hover:bg-[#71de9b] flex justify-center text-xs md:text-sm font-semibold items-center rounded-lg"
                                                }>
                                                    {
                                                        rec.finished? <p>Selesai</p> : <p>Mulai Wawancara</p> 
                                                    }
                                                
                                            </button>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>

            </div>


        </section>
        </>
    )

}
export default Wawancara