"use client";
import React from "react";

interface Kesimpulan{
    kesimpulanPopup:()=>void;
    idMahasiswa:string;
    nama:string;
    kesimpulan:string;
}

const KesimpulanPopup:React.FC<Kesimpulan> = ({kesimpulanPopup, idMahasiswa, nama, kesimpulan}) => {
    return(
        <>
            <section className="w-full h-full flex justify-center absolute items-center text-black dark:text-white">
                <div className="max-h-96 p-3 md:w-[40lvw]  dark:bg-[#24252b] backdrop-blur-md rounded-xl dark:border-[#3b3d47] border-2 flex flex-col gap-3 overflow-y-scroll scrollbar-hide justify-between">
                    <div className="flex flex-col gap-4 mb-8">
                        <p className="font-semibold">Hasil wawancara dengan {nama} :</p>
                        <p>{kesimpulan}</p>
                    </div>

                    
                    <button onClick={kesimpulanPopup} className=" bg-[#359be5] px-3 py-2 hover:bg-[#86c2ed] flex justify-center text-xs md:text-sm font-semibold items-center rounded-lg ">
                        Close
                    </button >
                </div>

            </section>
        </>
    )
}

export default KesimpulanPopup;
