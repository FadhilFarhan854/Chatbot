"use client";
import React from "react";
import { useState } from "react";
import { Detailpopup } from "../Popups/Detail";
import InterviewPopup from "../Popups/Interview";

const InterviewTemplate = () => {
    
    const [isDeleteOpen, setisDeleteOpen] = useState(false);
    const [isDetailOpen, setisDetailOpen] = useState(false);
    const [isInterviewAddOpen, setisInterviewAddOpen] = useState(false);
    const [selectedCompany, setSelectedCompany] = useState({ id: "",companyName: "", alamat:"" ,bidang:"", deadline: "", startDate: "", listPertanyaan:[""] });
    const handleCancel = () => {
        setisDeleteOpen(false); // Menutup pop-up
        setisDetailOpen(false);
        setisInterviewAddOpen(false);
    };

    const toggleDelete = (id: string, companyName:string, alamat:string , bidang:string, deadline:string, startDate: string, listPertanyaan:string[]) => {
        setSelectedCompany({id, companyName, alamat , bidang, deadline,  startDate, listPertanyaan})
        setisDeleteOpen(true); // Membuka pop-up
    };

    const toggleInterview = () =>{
        setisInterviewAddOpen(true);
    }

    const toggleDetail = (id: string,companyName:string,  alamat:string, bidang:string, deadline:string, startDate: string, listPertanyaan:string[]) =>{
        handleCancel();
        setSelectedCompany({id, companyName, alamat, bidang, deadline,  startDate, listPertanyaan})
        setisDetailOpen(true);
    }
   

    const template = [
        { id: "37473721", creator:"admin1" ,prodi: "RPLA", bidang:"frontend developer", listPertanyaan:[]},
        { id: "37473722", creator:"admin1" ,prodi: "RPLA", bidang:"frontend developer", listPertanyaan:[]},
        { id: "37473723", creator:"admin1" ,prodi: "RPLA", bidang:"frontend developer", listPertanyaan:[]},
        { id: "37473724", creator:"admin1" ,prodi: "RPLA", bidang:"frontend developer", listPertanyaan:[]},
        { id: "37473725", creator:"admin1" ,prodi: "RPLA", bidang:"frontend developer", listPertanyaan:[]},
        { id: "37473726", creator:"admin1" ,prodi: "RPLA", bidang:"frontend developer", listPertanyaan:[]},
       
    ];
    
    return(
        <>
        <section className="w-full h-full relative flex flex-col py-2 md:p-4 text-md text-black dark:text-white">
            <div className="flex justify-between  items-center">
                <div className="flex-col">
                    <p className="font-bold text-sm md:text-base">Company Control</p>
                    <p className="text-[#939393] dark:text-[#c0c0c0] text-xs md:text-sm" >
                        Give admin full control to all registered company
                    </p>
                </div>
                
                <button onClick={()=>{toggleInterview()}} className="px-2 py-2 bg-[#4EA971] font-bold rounded-lg text-xs md:text-sm">
                    Add Interview
                </button>
            </div>

            <div className="mt-3 md:p-4 gap-2 md:gap-4 overflow-hidden pb-5 w-full h-full dark:bg-[#1e1f24] bg-[#ffffff] bg-border-2 border-[#232429] rounded-xl flex flex-col">
                <p className="text-base md:text-lg">List of registered company</p>
                <ul className=" text-sm md:text-base w-full overflow-y-scroll scrollbar-hide flex flex-col gap-2">
                    <li className="w-full text-[#62d28d]  font-semibold border-b-2 text-base md:text-lg border-black dark:border-white flex">
                        <p className="w-[5%] text-center flex justify-center items-center ">No</p>   
                        <p className="w-[15%] text-center flex justify-center items-center ">Id</p>   
                        <p className="w-[15%] text-center flex justify-center items-center ">Creator</p>
                        <p className="w-[20%] text-center flex justify-center items-center ">Prodi</p>
                        <p className="w-[20%] text-center flex justify-center items-center ">Bidang</p>
                       
                    </li>
                    {
                        template.map((pertanyaan, index)=>(
                        <li key={index} className="w-full border-b-2 border-black dark:border-white flex">
                            <p className="w-[5%] text-center flex justify-center items-center ">{index + 1}</p>
                            <p className="w-[15%] text-center flex justify-center items-center ">{pertanyaan.id}</p>
                            <p className="w-[15%] text-center flex justify-center items-center ">{pertanyaan.creator}</p>
                            <p className="w-[20%] text-center flex justify-center items-center ">{pertanyaan.prodi}</p>
                            <p className="w-[20%] text-center flex justify-center items-center ">{pertanyaan.bidang}</p>
                            
                            <div className="w-[10%] text-center flex justify-center items-center pb-1 ">
                                <button onClick={()=>{}}  className=" bg-[#359be5] px-2 py-1 hover:bg-[#86c2ed] flex justify-center text-xs md:text-sm font-semibold items-center rounded-lg ">Detail</button>
                            </div>
                            
                            <div className="w-[10%] text-center flex justify-center items-center pb-1 ">
                                <button onClick={()=>{}} className=" bg-[#f12e2e] px-2 py-1 hover:bg-[#e46060] flex justify-center text-xs md:text-sm font-semibold items-center rounded-lg ">Delete</button>
                            </div>
                            </li>
                        ))
                    }
                    
                    
                    
                    
                </ul>
            </div>
            
            {isDetailOpen && <Detailpopup id={selectedCompany.id} companyName={selectedCompany.companyName} alamat={selectedCompany.alamat} bidang={selectedCompany.bidang} startDate={selectedCompany.startDate}  deadline={selectedCompany.deadline} listPertanyaan={selectedCompany.listPertanyaan} detailprops={handleCancel} />}
            {isInterviewAddOpen && <InterviewPopup interviewprops={handleCancel} /> }
            
        </section>
        
        </>
    )
}

export default InterviewTemplate;