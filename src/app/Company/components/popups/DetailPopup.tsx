"use client";
import React from "react";

interface DetailCompanyInterview{
    detailPopup :()=> void;
    idWawancara: string;
    idPerusahaan :string;
    prodi:string;
    bidang : string;
    listPertanyaan:string[];
    startDate: string;
    deadline: string;
}

const DetailCompanyInpterviewPopups:React.FC<DetailCompanyInterview>=({detailPopup,idWawancara, idPerusahaan, prodi, bidang,listPertanyaan,startDate,deadline})=>{
return(
    <>
        <section className="w-full h-full flex text-sm md:text-base justify-center absolute items-center text-black dark:text-white">
            <div className=" h-96 p-3 md:w-[40lvw]  dark:bg-[#24252b] backdrop-blur-md rounded-xl dark:border-[#3b3d47] border-2 flex flex-col gap-3 overflow-y-scroll scrollbar-hide">
                <div className="border-b-white border-b-2 text-base md:text-lg font-bold">
                    Detail Interview 
                </div>
                <div className="w-full flex flex-col gap-2 overflow-y-scroll scrollbar-hide">
                    <div className="w-full flex flex-col">
                        <p className="font-semibold dark:text-[#939393]">Id Wawancara:</p>
                        <p>{idWawancara}</p>
                        <p className="font-semibold dark:text-[#939393]">Id Perusahaan:</p>
                        <p>{idPerusahaan}</p>
                        <p className="font-semibold dark:text-[#939393]">Bidang:</p>
                        <p>{bidang}</p>
                        <p className="font-semibold dark:text-[#939393]">Prodi:</p>
                        <p>{prodi}</p>
                        <p className="font-semibold dark:text-[#939393]">Start date:</p>
                        <p>{startDate}</p>
                        <p className="font-semibold dark:text-[#939393]">Deadline:</p>
                        <p>{deadline}</p>
                        <p className="font-semibold dark:text-[#939393]">List Pertanyaan:</p>
                        <ul>
                            {
                                listPertanyaan.map((pertanyaan)=>(
                                    <li>
                                        {pertanyaan}
                                    </li>
                                ))
                            }
                        </ul>     
                            
                    </div>
                    <button onClick={detailPopup} className=" bg-[#359be5] px-3 py-2 hover:bg-[#86c2ed] flex justify-center text-xs md:text-sm font-semibold items-center rounded-lg ">Cancel</button>
                </div>

            </div>

        </section>
    </>
)
}

export default DetailCompanyInpterviewPopups;