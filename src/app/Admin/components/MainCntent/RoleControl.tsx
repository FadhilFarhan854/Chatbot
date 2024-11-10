"useClient";
import { useState } from "react";
import EditPopup from "../Popups/edit";
import AddSoalPopup from "../Popups/AddSoal";
import AddBidangPopup from "../Popups/AddRole";


const BidangMagangContent = () => {

    const [isDeleteOpen, setisDeleteOpen] = useState(false);
    const [isEditOpen, setisEditOpen] = useState(false);
    const [isAddOpen, setisAddOpen] = useState(false);
   
    
    
    const handleCancel = () => {
        setisDeleteOpen(false); // Menutup pop-up
        setisEditOpen(false)
        setisAddOpen(false)
    };

    const toggleDelete = (id: string, pertanyaan:string, jenis:string, bidang:string) => {
        
        setisDeleteOpen(true); // Membuka pop-up
    };
    
    const toggleAdd = () =>{
        setisAddOpen(true);
    }

    const toggleEdit = () =>{
        handleCancel();

        setisEditOpen(true);
    }


    const role = [
        { id: "37473721" , namaBidang: "Frontend Developer", prodi: "Rekayasa Perangkat Lunak Aplikasi"},
        { id: "37473722" , namaBidang: "backend Developer", prodi: "Rekayasa Perangkat Lunak Aplikasi"},
        { id: "37473723" , namaBidang: "UI/UX Designer", prodi: "Desain Komunikasi Visual"},
        { id: "37473724" , namaBidang: "Data Analyst", prodi: "Sistem Informasi"},
        { id: "37473725" , namaBidang: "IOT Developer", prodi: "Teknik Komputer"},
        { id: "37473726" , namaBidang: "Cyber Security", prodi: "Sistem Informasi"},
       
    ];

    return(
        <>
        
        <section className="w-full h-full relative flex flex-col py-2 md:p-4 text-md text-black dark:text-white">
            <div className="flex justify-between items-center">
                <div className="flex-col">
                    <p className="font-bold text-sm md:text-base">Intenship Field</p>
                    <p className="text-[#939393] dark:text-[#c0c0c0] text-xs md:text-sm" >
                        Control all Internship Field Based on Study Program
                    </p>
                </div>
                
                <div className="gap-2 flex">
                    <button onClick={()=>{toggleAdd()}} className="px-2 py-2 bg-[#4EA971] font-bold rounded-lg text-xs md:text-sm">
                        Add Field
                    </button>
                    <button className="px-2 py-2 bg-[#4EA971] font-bold rounded-lg text-xs md:text-sm flex gap-1">
                        <img src="./icons/filter.png" className="w-5 invert" alt=""/>
                        Filter
                    </button>
                </div>
                
            </div>
            <div className="mt-3 md:p-4 gap-2 md:gap-4 overflow-hidden pb-5 w-full h-full dark:bg-[#1e1f24] bg-[#ffffff] bg-border-2 border-[#232429] rounded-xl flex flex-col">
            <p className="text-base md:text-lg">List of requested company</p>
                <ul className=" text-sm md:text-base w-full overflow-y-scroll scrollbar-hide flex flex-col gap-2">
                    <li className="w-full text-[#62d28d]  font-semibold border-b-2 text-base md:text-lg border-black dark:border-white flex">
                        <p className="w-[5%] text-center flex justify-center items-center ">No</p>   
                        <p className="w-[10%] text-center flex justify-center items-center ">ID</p>   
                        <p className="w-[25%] text-center flex justify-center items-center ">Nama Bidang</p>
                        <p className="w-[35%] text-center flex justify-center items-center ">Prodi </p>
                        
                       
                    </li>
                    {
                        role.map((bidang, index)=>(
                        <li key={index} className="w-full border-b-2 border-black dark:border-white flex">
                            <p className="w-[5%] text-center flex justify-center items-center ">{index + 1}</p>
                            <p className="w-[10%] text-center flex justify-center items-center ">{bidang.id}</p>
                            <p className="w-[25%] text-center flex justify-center items-center ">{bidang.namaBidang}</p>
                            <p className="w-[35%] text-center flex justify-center items-center ">{bidang.prodi}</p>
                            <div className="w-[10%] text-center flex justify-center items-center pb-1 ">
                                <button onClick={()=>{}} className=" bg-[#4EA971] px-2 py-1 hover:bg-[#71de9b] flex justify-center text-xs md:text-sm font-semibold items-center rounded-lg gap-1 ">
                                    <img src="./icons/edit.png" className="w-4 invert" alt=""  />
                                    Edit
                                </button>
                            </div>
                            <div className="w-[10%] text-center flex justify-center items-center pb-1 ">
                                <button onClick={()=>{toggleAdd()}} className=" bg-[#f12e2e] px-2 py-1 hover:bg-[#e46060] flex justify-center text-xs md:text-sm font-semibold items-center rounded-lg gap-1">
                                    <img src="./icons/bin.png" className="w-4 invert" alt=""  />    
                                    Delete
                                </button>
                            </div>
                    </li>
                        ))
                    }
                    
                    
                </ul>
            </div>
           
            {isAddOpen && <AddBidangPopup addBidangAppear={handleCancel} />}
        </section>
        
        </>
    )
}

export default BidangMagangContent;