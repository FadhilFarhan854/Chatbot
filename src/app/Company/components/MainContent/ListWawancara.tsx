"use client";

import bidangDummy from "@/app/data/dataBidang";

import { useState } from "react";
import DetailCompanyInpterviewPopups from "../popups/DetailPopup";
import DeleteCompanyInpterviewPopups from "../popups/DeletePopup";

const ListWawancara = () => {

    const [isDetailOpen, setIsDetailOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [selectedInterview, setselectedInterview] = useState({idWawancara:"",idPerusahaan:"", prodi:"", bidang:"", listPertanyaan:[""], startDate:"", deadline:""});
    

    const dataDummy = [
        {idWawancara:"123",idPerusahaan : "w4w4w", prodi : "Rekayasa Perangkat Lunak Aplikasi", bidang: "Frontend Developer", listPertanyaan: [], startDate:"10-Sep-2025", deadline:"11-Sep-2025" },
        {idWawancara:"124",idPerusahaan : "w4w4w", prodi : "Rekayasa Perangkat Lunak Aplikasi", bidang: "Frontend Developer", listPertanyaan: [], startDate:"10-Sep-2025", deadline:"11-Sep-2025" },
        {idWawancara:"125",idPerusahaan : "w4w4w", prodi : "Rekayasa Perangkat Lunak Aplikasi", bidang: "Frontend Developer", listPertanyaan: [], startDate:"10-Sep-2025", deadline:"11-Sep-2025" },
        {idWawancara:"126",idPerusahaan : "w4w4w", prodi : "Rekayasa Perangkat Lunak Aplikasi", bidang: "Frontend Developer", listPertanyaan: [], startDate:"10-Sep-2025", deadline:"11-Sep-2025" },
        {idWawancara:"127",idPerusahaan : "w4w4w", prodi : "Rekayasa Perangkat Lunak Aplikasi", bidang: "Frontend Developer", listPertanyaan: [], startDate:"10-Sep-2025", deadline:"11-Sep-2025" },
        {idWawancara:"129",idPerusahaan : "w4w4w", prodi : "Rekayasa Perangkat Lunak Aplikasi", bidang: "Frontend Developer", listPertanyaan: [], startDate:"10-Sep-2025", deadline:"11-Sep-2025" },
        {idWawancara:"121",idPerusahaan : "w4w4w", prodi : "Rekayasa Perangkat Lunak Aplikasi", bidang: "Frontend Developer", listPertanyaan: [], startDate:"10-Sep-2025", deadline:"11-Sep-2025" },
        {idWawancara:"122",idPerusahaan : "w4w4w", prodi : "Rekayasa Perangkat Lunak Aplikasi", bidang: "Frontend Developer", listPertanyaan: [], startDate:"10-Sep-2025", deadline:"11-Sep-2025" },
        {idWawancara:"128",idPerusahaan : "w4w4w", prodi : "Rekayasa Perangkat Lunak Aplikasi", bidang: "Frontend Developer", listPertanyaan: [], startDate:"10-Sep-2025", deadline:"11-Sep-2025" },
        {idWawancara:"1223",idPerusahaan : "w4w4w", prodi : "Rekayasa Perangkat Lunak Aplikasi", bidang: "Frontend Developer", listPertanyaan: [], startDate:"10-Sep-2025", deadline:"11-Sep-2025" },
    ]


    const handleCancel = () =>{
        setIsDeleteOpen(false)
        setIsDetailOpen(false)
    }

    const toggleDetail = (idWawancara:string,idPerusahaan :string, prodi:string, bidang : string, listPertanyaan:string[],startDate: string,deadline: string) =>{
        setselectedInterview({idWawancara,idPerusahaan,prodi,bidang,listPertanyaan,startDate,deadline})
        setIsDetailOpen(true)
    }
    const toggleDelete = () =>{
        
        setIsDeleteOpen(true)
    }

   


    return(
        <>
            <section className="w-full h-full relative flex flex-col py-2 md:p-4 text-md text-black dark:text-white">
                <div className="flex justify-between items-center">
                    <div className="flex-col">
                        <p className="font-bold text-sm md:text-base">List Interview</p>
                        <p className="text-[#939393] dark:text-[#c0c0c0] text-xs md:text-sm" >
                            Here is list of your ongoing Interview 
                        </p>
                    </div>
                    <button onClick={()=>{}} className="px-2 py-2 bg-[#4EA971] font-bold rounded-lg text-xs md:text-sm">
                        Add Interview
                    </button>
                    
                </div>
                <div className="mt-3 md:p-4 gap-2 md:gap-4 overflow-hidden pb-5 w-full h-full dark:bg-[#1e1f24] bg-[#ffffff] bg-border-2 border-[#232429] rounded-xl flex flex-col">

                    <div className="w-full px-3 py-4 rounded-lg dark:bg-[#24252b] dark:border-[#393b43]">

                        <ul className="text-sm md:text-base w-full overflow-y-scroll scrollbar-hide flex flex-col gap-3 font-semibold">
                            {
                             dataDummy.map((data)=>(
                                <li className="flex w-full">
                                    <p className="w-[25%]">{data.bidang}</p>
                                    <p className="w-[35%] ">{data.prodi}</p>
                                    
                                    <div className="w-[10%] flex gap-2">
                                        <img src="./icons/profile.png" className="dark:invert h-5" alt="" />
                                        <p>2/6</p>
                                    </div>
                                    <div className="w-[10%] text-center flex justify-center items-center  ">
                                        <button onClick={()=>{toggleDetail(data.idWawancara,data.idPerusahaan, data.prodi, data.bidang, data.listPertanyaan, data.startDate, data.deadline)}}  className=" bg-[#359be5] px-2 py-1 hover:bg-[#86c2ed] flex justify-center text-xs md:text-sm font-semibold items-center rounded-lg ">Detail</button>
                                    </div>
                                    <div className="w-[10%] text-center flex justify-center items-center  ">
                                        <button  onClick={() =>{}}  className="bg-[#4EA971] px-2 py-1 hover:bg-[#71de9b] flex justify-center text-xs md:text-sm font-semibold items-center rounded-lg ">Cek Hasil</button>
                                    </div>
                                    
                                    <div className="w-[10%] text-center flex justify-center items-center  ">
                                        <button onClick={()=>{toggleDelete()}} className=" bg-[#f12e2e] px-2 py-1 hover:bg-[#e46060] flex justify-center text-xs md:text-sm font-semibold items-center rounded-lg ">Hapus</button>
                                    </div>
                                </li>
                                
                             )) 
                            }
                            
                        </ul>

                    </div>

                </div>
                {isDeleteOpen && <DeleteCompanyInpterviewPopups deletePopup={handleCancel}/>}
                {isDetailOpen && <DetailCompanyInpterviewPopups detailPopup={handleCancel} idWawancara={selectedInterview.idWawancara} idPerusahaan={selectedInterview.idPerusahaan} bidang={selectedInterview.bidang} prodi={selectedInterview.prodi} listPertanyaan={selectedInterview.listPertanyaan} startDate={selectedInterview.startDate} deadline={selectedInterview.deadline}  />}
            </section>
        </>
    )

}

export default ListWawancara;