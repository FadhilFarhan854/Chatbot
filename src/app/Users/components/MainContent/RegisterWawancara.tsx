"use client";

import { list } from "postcss";
import { useState } from "react";
import { DetailpopupUser } from "../PopupUser/DetailInterview";
import bidangDummy from "@/app/data/dataBidang";

const RegisterInterview = () => {

    const [isRecomendationActive, setIsRecomendationActive] = useState(true);
    const [selectedCompany, setSelectedCompany] = useState({idCompany:"", companyName:"", alamat:"",mulaiMagang:"", selesaiMagang:""});
    const [selectedInterview, setSelectedInterview] = useState({idInterview:"",idCompany:"", bidang:"", deskripsi:"",startDate:"",deadline:"",listPertanyaan:[""] });
    const [isDetailOpen, setisDetailOpen] = useState(false);
    const [bidang, setBidang] = useState("general");
    const [prodi, setProdi] = useState("");

    const recomendation = [
        {
            idInterview:"12345",
            idCompany:"696969",                    
            bidang:"Frontend Developer",
            deskripsi:"Requirement : js, html,css",
            startDate:"20-05-20205",
            deadline:"21-05-2025",
            listPertanyaan:["apa paengalamanmu", "mampukah anda bekerja dalam tim"]
            
        }
    ]
    const company = [
        {
            idCompany:"696969",
            companyName:"PTaaaaIsi2",
            alamat:"jalanABC",
            mulaiMagang:"20-05-20205",
            selesaiMagang:"20-05-20205",
           
        }
    ]

    const handleBidangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;  
        setBidang(selectedValue);  
        
    };
    const handleProdiChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;  
        setProdi(selectedValue);  
        
    };

    const toggleDetail = (idInterview:string,idCompany:string, bidang:string, deskripsi:string,startDate:string,deadline:string, listPertanyaan:string[]) => {
        setisDetailOpen(true)
        setSelectedInterview({idInterview,idCompany,bidang,deskripsi,startDate,deadline,listPertanyaan})
        const findCompany = company.find((comp) => comp.idCompany === idCompany) || {
            idCompany: '',
            companyName: '',
            alamat: '',
            mulaiMagang: '',
            selesaiMagang: '',
          };
        setSelectedCompany(findCompany)
    }

    const handleRecomendation = () => {
        setIsRecomendationActive(!isRecomendationActive)
    }
    const handleCancel = () => {
        setisDetailOpen(false)
    }
    const filterBidang = bidangDummy.filter((bidang)=>bidang.prodi === prodi)
    const filteredInterview = recomendation.filter((interview)=>(interview.bidang === bidang))

    return(
        <>
        <section className="w-full h-full relative flex flex-col py-2 md:p-4 text-md text-black dark:text-white">
            <div className="flex justify-between items-center">
                <div className="flex flex-col">
                    <p className="font-bold text-sm md:text-base">Register Interview</p>
                    <p className="text-[#939393] dark:text-[#c0c0c0] text-xs md:text-sm" >
                        Here is list available interview, we also give recomendation based on psychological test.
                    </p>
                </div>
                <div className="flex gap-2">
                    <button onClick={handleRecomendation} 
                    disabled={isRecomendationActive == true}
                    className={
                            isRecomendationActive
                            ? "px-2 py-2 bg-[#4EA971] font-bold rounded-lg text-xs md:text-sm"
                            : "px-2 py-2 bg-[#5b5b5b] font-bold rounded-lg text-xs md:text-sm"
                        }>
                        Recomendation
                    </button>                  
                    <button onClick={handleRecomendation}
                        disabled={isRecomendationActive == false}
                        className={
                        
                            isRecomendationActive
                            ? "px-2 py-2 bg-[#5b5b5b]  font-bold rounded-lg text-xs md:text-sm"
                            : "px-2 py-2 bg-[#4EA971] font-bold rounded-lg text-xs md:text-sm"
                        }>
                        Search Manually
                    </button>
                </div>
                                
            </div>

            <div className="mt-3 md:p-4 gap-2 md:gap-4 overflow-hidden pb-5 w-full h-full dark:bg-[#1e1f24] bg-[#ffffff] bg-border-2 border-[#232429] rounded-xl flex flex-col">
                {
                    isRecomendationActive ? 

                    <div className="w-full h-full flex-col gap-2 p-3 ">
                        {
                            recomendation.map((rec, index) => {
                                
                                const companyDetails = company.find(comp => comp.idCompany === rec.idCompany);

                                return (
                                    <div  className="w-full dark:bg-[#24252b] p-4 flex rounded-md gap-3 text-start">
                                        <p className="w-[5%] border-r-2 border-r-white px-2">{index + 1}</p>
                                        <p className="w-[20%]">{companyDetails?.companyName || "Unknown Company"}</p>
                                        <p className="w-[25%]">{rec.bidang}</p>
                                        <p className="w-[15%]">{rec.startDate}</p>
                                        <p className="w-[15%]">{rec.deadline}</p>
                                        <div className="w-[10%] text-center flex justify-center">
                                            <button 
                                                onClick={() => toggleDetail(rec.idInterview, rec.idCompany, rec.bidang, rec.deskripsi, rec.startDate, rec.deadline, rec.listPertanyaan)}
                                                className="bg-[#359be5] px-2 py-1 hover:bg-[#86c2ed] flex justify-center text-xs md:text-sm font-semibold items-center rounded-lg"
                                            >
                                                Detail
                                            </button>
                                        </div>
                                        <div className="w-[10%] text-center flex justify-center">
                                            <button 
                                                onClick={() => {}} 
                                                className="bg-[#4EA971] px-2 py-1 hover:bg-[#71de9b] flex justify-center text-xs md:text-sm font-semibold items-center rounded-lg"
                                            >
                                                Daftar
                                            </button>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                    :
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////                    
                    <div className="w-full h-full flex-col gap-2 p-3 ">
                        <div className="w-full flex justify-end gap-2 mb-2">
                           
                            <p className="text-[#939393] dark:text-[#c0c0c0] bg-">Prodi :</p>
                            <select className="rounded-md bg-[#404244d3] px-2 py-1 hover:bg-[#9c9c9cbc]" value={prodi} onChange={handleProdiChange}>
                                <option className="bg-[#8383838f] text-black" value="D3 Sistem Informasi">D3 Sistem Informasi</option>
                                <option className="bg-[#8383838f] text-black" value="D3 Rekayasa Perangkat Lunak Aplikasi">D3 Rekayasa Perangkat Lunak Aplikasi</option>
                                <option className="bg-[#8383838f] text-black" value="D3 Teknologi Komputer">D3 Teknologi Komputer</option>
                                <option className="bg-[#8383838f] text-black" value="D3 Teknologi Telekomunikasi">D3 Teknologi Telekomunikasi</option>
                                <option className="bg-[#8383838f] text-black" value="D4 Sistem Multimedia">D4 Sistem Multimedia</option>
                                <option className="bg-[#8383838f] text-black" value="D4 Teknologi Rekayasa Internet">D4 Teknologi Rekayasa Internet</option>
                                <option className="bg-[#8383838f] text-black" value="D4 Teknik Informatika">D4 Teknik Informatika</option>
                            </select>
                            <p className="text-[#939393] dark:text-[#c0c0c0]">Bidang :</p>
                                <select className="rounded-md bg-[#404244d3] px-2 py-1 hover:bg-[#9c9c9cbc]]" value={bidang} onChange={handleBidangChange}>
                                    {
                                        filterBidang.map((filteredbidang)=>(
                                            <option className="bg-[#8383838f] text-black" value={filteredbidang.bidang}>{filteredbidang.bidang}</option>
                                        ))
                                    }
                                    
                            </select>
                        </div>
                        {   
                           
                            filteredInterview.map((rec, index) => {
                                
                                const companyDetails = company.find(comp => comp.idCompany === rec.idCompany);

                                return (
                                    <div className="w-full dark:bg-[#24252b] p-4 flex rounded-md gap-3 text-start">
                                        <p className="w-[5%] border-r-2 border-r-white px-2">{index + 1}</p>
                                        <p className="w-[20%]">{companyDetails?.companyName || "Unknown Company"}</p>
                                        <p className="w-[25%]">{rec.bidang}</p>
                                        <p className="w-[15%]">{rec.startDate}</p>
                                        <p className="w-[15%]">{rec.deadline}</p>
                                        <div className="w-[10%] text-center flex justify-center">
                                            <button 
                                                onClick={() => toggleDetail(rec.idInterview, rec.idCompany, rec.bidang, rec.deskripsi, rec.startDate, rec.deadline, rec.listPertanyaan)}
                                                className="bg-[#359be5] px-2 py-1 hover:bg-[#86c2ed] flex justify-center text-xs md:text-sm font-semibold items-center rounded-lg"
                                            >
                                                Detail
                                            </button>
                                        </div>
                                        <div className="w-[10%] text-center flex justify-center">
                                            <button 
                                                onClick={() => {}} 
                                                className="bg-[#4EA971] px-2 py-1 hover:bg-[#71de9b] flex justify-center text-xs md:text-sm font-semibold items-center rounded-lg"
                                            >
                                                Daftar
                                            </button>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    

                    </div>
                }
                
            </div>
            { isDetailOpen && <DetailpopupUser detailprops={handleCancel} id={selectedInterview.idInterview} companyName={selectedCompany.companyName} alamat={selectedCompany.alamat} startDate={selectedInterview.startDate} deadline={selectedInterview.deadline} listPertanyaan={selectedInterview.listPertanyaan} idCompany={selectedInterview.idCompany} bidang={selectedInterview.bidang} />  }
        </section>

        </>
    )

}
export default RegisterInterview