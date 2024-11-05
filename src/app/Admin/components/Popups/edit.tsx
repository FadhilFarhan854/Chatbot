"use client";

import React from "react";

interface EditPertanyaan{
    editprops:() => void
    id: string;
    pertanyaan: String;
    jenis: string;
    bidang: string;
}

const EditPertanyaanPopup:React.FC<EditPertanyaan> = ({editprops, id, pertanyaan, jenis, bidang}) => {
    

    return(
        <>
            <section className="w-full h-full flex justify-center absolute items-center text-black dark:text-white  ">

                <div className=" p-3 md:w-[40lvw]  dark:bg-[#0000007e] backdrop-blur-md rounded-xl dark:border-white border-2 flex flex-col gap-3">
                    <div className="flex w-full justify-between font-bold text-sm md:text-lg">
                        <p>Apakah anda yakin ingin menghapus :</p>
                    </div>
                    <div>
                        <p className="text-[#939393] dark:text-[#c0c0c0]">ID :</p>
                        <p>{id}</p>
                        <p className="text-[#939393] dark:text-[#c0c0c0]">Pertanyaan :</p>
                        <p>{pertanyaan}</p>
                        <p className="text-[#939393] dark:text-[#c0c0c0]">Jenis pertanyaan :</p>
                        <p>{jenis}</p>
                        <p className="text-[#939393] dark:text-[#c0c0c0]">Bidang :</p>
                        <p>{bidang}</p>
                    </div>
                    <div className="w-full flex gap-3 justify-end">
                        <button onClick={editprops} className=" bg-[#359be5] px-2 py-1 hover:bg-[#86c2ed] flex justify-center text-xs md:text-sm font-semibold items-center rounded-lg ">Cancel</button>
                        <button onClick={editprops} className=" bg-[#4EA971] px-3 py-2 hover:bg-[#72d799] flex justify-center text-xs md:text-sm font-semibold items-center rounded-lg ">Update</button>
                    
                    </div>
                    
                </div>

            </section>
        </>
    )
}

export default EditPertanyaanPopup