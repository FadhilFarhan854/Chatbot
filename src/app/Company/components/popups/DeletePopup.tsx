"use client";
import React from "react";

interface DeleteCompanyInterview{
    deletePopup :()=> void;
    
}

const DeleteCompanyInpterviewPopups:React.FC<DeleteCompanyInterview>=({deletePopup})=>{
return(
    <>
        <section className="w-full h-full flex text-sm md:text-base justify-center absolute items-center text-black dark:text-white">
            <div className=" max-h-96 p-3 md:w-[40lvw]  dark:bg-[#24252b] backdrop-blur-md rounded-xl dark:border-[#3b3d47] border-2 flex flex-col gap-5 overflow-y-scroll scrollbar-hide">
                <div className="border-b-white border-b-2 text-base md:text-lg font-bold">
                    Delete interview
                </div>
                <div className="w-full flex flex-col gap-2 ">
                    <div className="w-full flex flex-col">
                        <p className=" dark:text-white">Apakah anda yakin ingin menghapus Wawancara Ini ?</p>
                                         
                    </div>
                    <div className="flex justify-end gap-3" >
                        <button onClick={deletePopup} className=" bg-[#359be5] px-3 py-2 hover:bg-[#86c2ed] flex justify-center text-xs md:text-sm font-semibold items-center rounded-lg ">Cancel</button>
                        <button onClick={deletePopup} className=" bg-[#f12e2e] px-2 py-1 hover:bg-[#e46060] flex justify-center text-xs md:text-sm font-semibold items-center rounded-lg ">Hapus</button>
                    </div>
                    
                </div>

            </div>

        </section>
    </>
)
}

export default DeleteCompanyInpterviewPopups;