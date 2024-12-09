"use client";

import React from "react";
import bidangDummy from "../../../data/dataBidang";
import { useState } from "react";

interface Filterpopup{
    filterAppear : ()=>void;
}

const FilterBank:React.FC<Filterpopup> = ({filterAppear})=>{
    const [prodiSelected, setProdiSelected] = useState("");
    const [bidangSelected, setBidangSelected] = useState("");

    const handleBidangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;  
        setBidangSelected(selectedValue);  
        
    };
    const handleProdiChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;  
        setProdiSelected(selectedValue);  
        
    };

    const filteredBidang = bidangDummy.filter((filterBidang)=>(filterBidang.prodi === prodiSelected))

    return(
        <>
            <section className="w-full h-full flex justify-center absolute items-center text-black dark:text-white">
            <div className="p-3 md:w-[40vw] dark:bg-[#0000007e] backdrop-blur-md rounded-xl dark:border-white border-2 flex flex-col gap-3">
                <div className="flex w-full justify-between font-bold text-sm md:text-lg">
                    <p>Tambahkan Soal :</p>
                </div>
                <div>
                    <p className="text-[#939393] dark:text-[#c0c0c0]">Creator :</p>
                    <p>Admin 1</p>
                    <p className="text-[#939393] dark:text-[#c0c0c0]">Prodi :</p>
                    <select className="bg-transparent" value={prodiSelected} onChange={handleProdiChange}>
                        <option className="bg-[#8383838f] text-black" value="D3 Sistem Informasi">D3 Sistem Informasi</option>
                        <option className="bg-[#8383838f] text-black" value="D3 Rekayasa Perangkat Lunak Aplikasi">D3 Rekayasa Perangkat Lunak Aplikasi</option>
                        <option className="bg-[#8383838f] text-black" value="D3 Teknologi Komputer">D3 Teknologi Komputer</option>
                        <option className="bg-[#8383838f] text-black" value="D3 Teknologi Telekomunikasi">D3 Teknologi Telekomunikasi</option>
                        <option className="bg-[#8383838f] text-black" value="D4 Sistem Multimedia">D4 Sistem Multimedia</option>
                        <option className="bg-[#8383838f] text-black" value="D4 Teknologi Rekayasa Internet">D4 Teknologi Rekayasa Internet</option>
                        <option className="bg-[#8383838f] text-black" value="D4 Teknik Informatika">D4 Teknik Informatika</option>
                    </select>
                    <p className="text-[#939393] dark:text-[#c0c0c0]">Bidang :</p>
                    <select className="bg-transparent" value={bidangSelected} onChange={handleBidangChange}>
                        {
                            filteredBidang.map((filteredrole)=>(
                                <option className="bg-[#8383838f] text-black" value={filteredrole.bidang}>{filteredrole.bidang}</option>
                            ))
                        }
                        
                    </select>
                    

                    
                </div>
                <div className="w-full flex gap-3 justify-end  bottom-3 right-3 ">
                    <button onClick={filterAppear} className=" bg-[#359be5] px-3 py-2 hover:bg-[#86c2ed] flex justify-center text-xs md:text-sm font-semibold items-center rounded-lg ">Cancel</button>
                    <button onClick={()=>{}} className=" bg-[#4EA971] px-3 py-2 hover:bg-[#72d799] flex justify-center text-xs md:text-sm font-semibold items-center rounded-lg ">Create</button>
                </div>
                
            </div>
            
           
            
        </section>
        </>
    )
}

export default FilterBank