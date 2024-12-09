"use client";

import { useState } from "react";
import QuestionListPopupCompany from "../popups/BankSoalPopup";
import bidangDummy from "@/app/data/dataBidang";

const TambahWawanacara = () => {

    const [bidang, setBidang] = useState("general");
    const [prodi, setProdi] = useState("");
    const [startDate, setStartDate] = useState("");
    const [deadline, setDeadline] = useState("");
    const [listPertanyaan, setListPertanyaan] = useState([""]);
    const [isAddQuestionOpen, setisAddQuestionOpen] = useState(false);
    
    const dataPerusahaan = {
        "id" : "232323",
        "namaPerusahan" : "PT.Indofood"
    }
    const toggleQuestion = () =>{
        setisAddQuestionOpen(true)
    }
    const handleQuestionChange= (value: string[]) => {
        setListPertanyaan(value)
    };
    const handleCancel = () => {
        setisAddQuestionOpen(false)
    }

    const handleBidangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;  
        setBidang(selectedValue);  
        
    };
    const handleProdiChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;  
        setProdi(selectedValue);  
        
    };
    const filterBidang = bidangDummy.filter((bidang)=>bidang.prodi === prodi)

    return(
        <>
            <section className="w-full h-full relative flex flex-col py-2 md:p-4 text-md text-black dark:text-white">
                <div className="flex justify-between items-center">
                    <div className="flex-col">
                        <p className="font-bold text-sm md:text-base">Add Interview</p>
                        <p className="text-[#939393] dark:text-[#c0c0c0] text-xs md:text-sm" >
                            Welcome Company X, Add your new interview here
                        </p>
                    </div>
                    
                </div>
                <div className="mt-3 md:px-5 md:pt-5 md:gap-4 overflow-hidden  w-full h-full dark:bg-[#1e1f24] bg-[#ffffff] bg-border-2 border-[#232429] rounded-xl flex flex-col">
                    <form action="" method="post" className="flex flex-col gap-7">
                        <input className="w-full md:w-[30%] bg-transparent py-2 px-1 border-b-white border-b-2 focus:outline-none" placeholder="Nama Perusahaan" value={dataPerusahaan.namaPerusahan} />
                        <div className="flex gap-3 ">
                            <div className="w-[50%] flex">
                            <p className="text-[#939393] dark:text-[#c0c0c0]">Prodi :</p>
                            <select className="bg-transparent" value={prodi} onChange={handleProdiChange}>
                                <option className="bg-[#8383838f] text-black" value="D3 Sistem Informasi">D3 Sistem Informasi</option>
                                <option className="bg-[#8383838f] text-black" value="D3 Rekayasa Perangkat Lunak Aplikasi">D3 Rekayasa Perangkat Lunak Aplikasi</option>
                                <option className="bg-[#8383838f] text-black" value="D3 Teknologi Komputer">D3 Teknologi Komputer</option>
                                <option className="bg-[#8383838f] text-black" value="D3 Teknologi Telekomunikasi">D3 Teknologi Telekomunikasi</option>
                                <option className="bg-[#8383838f] text-black" value="D4 Sistem Multimedia">D4 Sistem Multimedia</option>
                                <option className="bg-[#8383838f] text-black" value="D4 Teknologi Rekayasa Internet">D4 Teknologi Rekayasa Internet</option>
                                <option className="bg-[#8383838f] text-black" value="D4 Teknik Informatika">D4 Teknik Informatika</option>
                            </select>
                            </div>
                            <div className="w-[50%] flex">
                                <p className="text-[#939393] dark:text-[#c0c0c0]">Bidang :</p>
                                <select className="bg-transparent" value={bidang} onChange={handleBidangChange}>
                                    {
                                        filterBidang.map((filteredbidang)=>(
                                            <option className="bg-[#8383838f] text-black" value={filteredbidang.bidang}>{filteredbidang.bidang}</option>
                                        ))
                                    }
                                    
                                </select>
                            </div>

                        </div>
                       
                        <div className="flex gap-3 ">

                            <div className="flex flex-col md:w-[50%]">
                                <p className="px-1">Tanggal Mulai :</p>
                                 <input placeholder="Tanggal Mulai Wawancara" className="w-full appearance-none  bg-transparent py-1 px-1 dark:text-black text-white dark:border-b-black border-b-2 focus:outline-none invert"  type="date"  />
                            </div>
                            <div className="flex flex-col md:w-[50%]">
                                <p className="px-1">Tanggal Selesai :</p>
                                 <input placeholder="Tanggal Mulai Wawancara" className="w-full appearance-none  bg-transparent py-1 px-1 dark:text-black text-white dark:border-b-black border-b-2 focus:outline-none invert"  type="date"  />
                            </div>
                           
                        </div>
                        <div className="flex flex-col gap-2">
                            <p>
                                List Pertanyaan :
                            </p>
                            <ul>
                                {
                                    listPertanyaan.map((question)=>(
                                    <li>
                                        {question}
                                    </li>     
                                    ))
                                }
                            </ul>
                        </div>
                        
                        
                    </form>
                    <div className="w-full flex justify-between">
                        <button onClick={toggleQuestion} className=" bg-[#4EA971] px-2 py-1 hover:bg-[#72d799]  text-sm md:text-base font-semibold  rounded-lg">
                                buka bank soal
                        </button>
                        <button onClick={toggleQuestion} className=" bg-[#4EA971] px-2 py-1 hover:bg-[#72d799]  text-sm md:text-base font-semibold  rounded-lg">
                                buat wawancara
                        </button>
                    </div>
                    
                    
                </div>
                {isAddQuestionOpen && <QuestionListPopupCompany questionProps={handleCancel} onValueChange={handleQuestionChange} bidang={bidang}  />}
            </section>
        </>
    )

}

export default TambahWawanacara;