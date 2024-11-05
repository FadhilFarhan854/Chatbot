"use client";
import React from "react";
import { useState } from "react";
import Deletepopup from "../Popups/Delete";
import { DetailPerusahaan, Detailpopup } from "../Popups/Detail";

const CompanyApproval = () => {
    
    const [isDeleteOpen, setisDeleteOpen] = useState(false);
    const [isDetailOpen, setisDetailOpen] = useState(false);
    const [selectedCompany, setSelectedCompany] = useState({ id: "",companyName: "", alamat:"" , selesai: "", mulai: "" });
    const handleCancel = () => {
        setisDeleteOpen(false); // Menutup pop-up
        setisDetailOpen(false)
    };

    const toggleDelete = (id: string, companyName:string, alamat:string ,selesai:string, mulai: string, ) => {
        setSelectedCompany({id, companyName, alamat, selesai,  mulai })
        setisDeleteOpen(true); // Membuka pop-up
    };

    const toggleDetail = (id: string,companyName:string, alamat:string, selesai:string, mulai: string, ) =>{
        handleCancel();
        setSelectedCompany({id, companyName, alamat, selesai, mulai  })
        setisDetailOpen(true);
    }


    const companies = [
        { id: "37473721", bidang:"frontend developer", alamat: "bandung" ,name: "PT.SarimiIsidua", mulai:"09/08/05" ,selesai:"09/07/05"},
        { id: "37473722", bidang:"frontend developer", alamat: "bandung" ,name: "PT.indomie", mulai:"09/08/05" ,selesai:"09/07/05" },
        { id: "37473723", bidang:"frontend developer", alamat: "bandung" ,name: "PT.ABC", mulai:"09/08/05" ,selesai:"09/07/05" },
        { id: "37473724", bidang:"frontend developer", alamat: "bandung" ,name: "PT.XYZ", mulai:"09/08/05" ,selesai:"09/07/05" },
        { id: "37473725", bidang:"frontend developer", alamat: "bandung" ,name: "PT.Mandiri", mulai:"09/08/05" ,selesai:"09/07/05" },
        { id: "37473726", bidang:"frontend developer", alamat: "bandung" ,name: "PT.BCA", mulai:"09/08/05" ,selesai:"09/07/05" },
       
    ];
    
    return(
        <>
        <section className="w-full h-full relative flex flex-col py-2 md:p-4 text-md text-black dark:text-white">
            <div className="flex justify-between  items-center">
                <div className="flex-col">
                    <p className="font-bold text-sm md:text-base">Company Approval</p>
                    <p className="text-[#939393] dark:text-[#c0c0c0] text-xs md:text-sm" >
                        Give admin access to control approve and reject company
                    </p>
                </div>
            </div>
            
            <div className="mt-3 md:p-4 gap-2 md:gap-4 overflow-hidden pb-5 w-full h-full dark:bg-[#1e1f24] bg-[#ffffff] bg-border-2 border-[#232429] rounded-xl flex flex-col">
                <p className="text-base md:text-lg">List of requested company</p>
                <ul className=" text-sm md:text-base w-full overflow-y-scroll scrollbar-hide flex flex-col gap-2">
                    <li className="w-full text-[#62d28d]  font-semibold border-b-2 text-base md:text-lg border-black dark:border-white flex">
                        <p className="w-[5%] text-center flex justify-center items-center ">No</p>   
                        <p className="w-[25%] text-center flex justify-center items-center ">Nama Perusahaan</p>
                        <p className="w-[20%] text-center flex justify-center items-center ">Alamat</p>
                        <p className="w-[10%] text-center flex justify-center items-center ">Mulai </p>
                        <p className="w-[10%] text-center flex justify-center items-center ">Selesai </p>
                       
                    </li>
                    {
                        companies.map((company, index)=>(
                        <li key={index} className="w-full border-b-2 border-black dark:border-white flex">
                            <p className="w-[5%] text-center flex justify-center items-center ">{index + 1}</p>
                            <p className="w-[25%] text-center flex justify-center items-center ">{company.name}</p>
                            <p className="w-[20%] text-center flex justify-center items-center ">{company.alamat}</p>
                            <p className="w-[10%] text-center flex justify-center items-center ">{company.mulai}</p>
                            <p className="w-[10%] text-center flex justify-center items-center ">{company.selesai}</p>
                            <div className="w-[10%] text-center flex justify-center items-center pb-1 ">
                                <button onClick={()=>{toggleDetail(company.id, company.name, company.alamat, company.selesai, company.mulai)}}  className=" bg-[#359be5] px-2 py-1 hover:bg-[#86c2ed] flex justify-center text-xs md:text-sm font-semibold items-center rounded-lg ">Detail</button>
                            </div>
                            <div className="w-[10%] text-center flex justify-center items-center pb-1 ">
                                <button className=" bg-[#4EA971] px-2 py-1 hover:bg-[#71de9b] flex justify-center text-xs md:text-sm font-semibold items-center rounded-lg ">Approve</button>
                            </div>
                            <div className="w-[10%] text-center flex justify-center items-center pb-1 ">
                                <button onClick={()=>{toggleDelete(company.id, company.name, company.alamat, company.selesai, company.mulai)}} className=" bg-[#f12e2e] px-2 py-1 hover:bg-[#e46060] flex justify-center text-xs md:text-sm font-semibold items-center rounded-lg ">Reject</button>
                            </div>
                    </li>
                        ))
                    }
                    
                    
                    
                    
                </ul>
            </div>
            
            {isDetailOpen && <DetailPerusahaan id={selectedCompany.id}  companyName={selectedCompany.companyName} alamat={selectedCompany.alamat} startMagang={selectedCompany.mulai}  selesaiMagang={selectedCompany.selesai} detailprops={handleCancel} />}
            
        </section>
        
        </>
    )
}

export default CompanyApproval;