"use client";

import React, { useState } from "react";
import QuestionListPopup from "./QuestionList";

interface AddBidang {
    addBidangAppear: () => void;
}

const AddBidangPopup: React.FC<AddBidang> = ({ addBidangAppear}) => {
    const [prodi, setProdi] = useState("");
    const [bidang, setBidang] = useState();

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;
        setProdi(selectedValue);  
        
    };
    const registeredProdi = [
        "Program Studi D3 Teknologi Telekomunikasi",
        "Program Studi D3 Rekayasa Perangkat Lunak Aplikasi", 
        "Program Studi D3 Sistem Informasi Akuntansi",
        "Program Studi D3 Sistem Informasi",
        "Program Studi D3 Teknologi Komputer",
        "Program Studi D3 Teknologi Komputer",
        "Program Studi D3 Manajemen Pemasaran",
        "Program Studi D3 Perhotelan",
        "Program Studi D4 Teknologi Rekayasa Multimedia"
    ]
    
  


    return (
        <section className="w-full h-full flex justify-center absolute items-center text-black dark:text-white">
            <div className="p-3 md:w-[40vw] dark:bg-[#0000007e] backdrop-blur-md rounded-xl dark:border-white border-2 flex flex-col gap-3">
                <div className="flex w-full justify-between font-bold text-sm md:text-lg">
                    <p>Tambahkan Bidang:</p>
                </div>
                <div>
                    <p className="text-[#939393] dark:text-[#c0c0c0]">Creator :</p>
                    <p>Admin 1</p>
                    <p className="text-[#939393] dark:text-[#c0c0c0]">Prodi :</p>
                    <select className="bg-transparent" value={prodi} onChange={handleSelectChange}>
                        {
                            registeredProdi.map((prodi, index)=>(
                                <option className="bg-[#8383838f] text-black" value={prodi}>{prodi}</option>
                            ))
                        }
                        
                    </select>
                    <p className="text-[#939393] dark:text-[#c0c0c0]">Bidang :</p>
                    <input
                            type="text"
                            value={bidang}
                            onChange={(e) => setBidang(bidang)}
                            className="bg-[#8383838f] text-white p-2 rounded-md w-full mt-3"
                            placeholder="Bidang (e.g Fronted Developer)"
                        />
                    
                </div>
                <div className="w-full flex gap-3 justify-end  bottom-3 right-3 ">
                    <button onClick={addBidangAppear} className=" bg-[#359be5] px-3 py-2 hover:bg-[#86c2ed] flex justify-center text-xs md:text-sm font-semibold items-center rounded-lg ">Cancel</button>
                    <button onClick={addBidangAppear} className=" bg-[#4EA971] px-3 py-2 hover:bg-[#72d799] flex justify-center text-xs md:text-sm font-semibold items-center rounded-lg ">Create</button>
                </div>
                
            </div>
            
           
            
        </section>
    );
};

export default AddBidangPopup;
