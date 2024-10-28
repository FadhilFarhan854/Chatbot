"use client";

import React from "react";

interface Deleteprops{
    deleteprops:() => void
    companyName: string;
    startDate: String;
    deadline: string;
}

const Deletepopup:React.FC<Deleteprops> = ({deleteprops, companyName, startDate, deadline}) => {
    

    return(
        <>
            <section className="w-full h-full flex justify-center absolute items-center text-black dark:text-white  ">

                <div className=" p-3 md:w-[40lvw]  dark:bg-[#0000007e] backdrop-blur-md rounded-xl dark:border-white border-2 flex flex-col gap-3">
                    <div className="flex w-full justify-between font-bold text-sm md:text-lg">
                        <p>Apakah anda yakin ingin menghapus :</p>
                    </div>
                    <div>
                        <p className="text-[#939393] dark:text-[#c0c0c0]">Nama Perusahaan :</p>
                        <p>{companyName}</p>
                        <p className="text-[#939393] dark:text-[#c0c0c0]">Tanggal Mulai :</p>
                        <p>{startDate}</p>
                        <p className="text-[#939393] dark:text-[#c0c0c0]">Deadline Pendaftaran :</p>
                        <p>{deadline}</p>
                    </div>
                    <div className="w-full flex gap-3 justify-end">
                        <button onClick={deleteprops} className=" bg-[#359be5] px-2 py-1 hover:bg-[#86c2ed] flex justify-center text-xs md:text-sm font-semibold items-center rounded-lg ">Cancel</button>
                        <button  className=" bg-[#f12e2e] px-2 py-1 hover:bg-[#e46060] flex justify-center text-xs md:text-sm font-semibold items-center rounded-lg ">Delete</button>
                    
                    </div>
                    
                </div>

            </section>
        </>
    )
}

export default Deletepopup