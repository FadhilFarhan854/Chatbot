"useClient";
import { useState } from "react";
import EditPopup from "../Popups/edit";
import AddSoalPopup from "../Popups/AddSoal";
import bidangDummy from "../../../data/dataBidang";


const BankSoal = () => {

    const [isDeleteOpen, setisDeleteOpen] = useState(false);
    const [isEditOpen, setisEditOpen] = useState(false);
    const [isAddOpen, setisAddOpen] = useState(false);
    const [FilterValue, setFilterValue] = useState("D3 RPLA");
    
    const [selectedQuestion, setSelectedQuestion] = useState({ id: "", pertanyaan :"", jenis: "", bidang: ""});
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    
    
    const handleCancel = () => {
        setisDeleteOpen(false); // Menutup pop-up
        setisEditOpen(false)
        setisAddOpen(false)
        setIsFilterOpen(false)
    };
    const togglefilter = ()=>{
        setIsFilterOpen(true);
    }

    const toggleDelete = (id: string, pertanyaan:string, jenis:string, bidang:string) => {
        setSelectedQuestion({id, pertanyaan, jenis, bidang})
        setisDeleteOpen(true); // Membuka pop-up
    };
    
    const toggleAdd = () =>{
        setisAddOpen(true);
    }

    const toggleEdit = (id: string,  pertanyaan:string, jenis:string, bidang:string) =>{
        handleCancel();
        setSelectedQuestion({id, pertanyaan, jenis, bidang})
        setisEditOpen(true);
    }

    

    const bank = [
        { id: "37473721",pertanyaan:"Project apa yang kamu pernah lakukan ?", jenis:"Teknikal", prodi:"D3 Teknik Komputer" ,bidang:"general" },
        { id: "37473722",pertanyaan:"Bahasa apa yang paling kamu kuasai dalam FE development ?", jenis:"Teknikal", prodi:"D3 RPLA" ,bidang:"Frontend" },
        { id: "37473723",pertanyaan:"Bisakah kamu ceritakan tentang project yang kamu lakukan ?", jenis:"Teknikal", prodi:"D3 RPLA" ,bidang:"General" },
        { id: "37473724",pertanyaan:"Apakah kamu sanggup bekerjasama dalam tim ?", jenis:"Teknikal", prodi:"D3 Sistem Informasi" ,bidang:"General" },
        { id: "37473725",pertanyaan:"Apakah kamu menguasai bahasa pemrograman typescript?", jenis:"Teknikal", prodi:"D3 RPLA" ,bidang:"Fullstack" },
        { id: "37473726",pertanyaan:"bisakah kamu meggunakan laravel sebagai bahasa untuk backend  ?", jenis:"Teknikal", prodi:"D3 RPLA" ,bidang:"Backend" },
       
    ];

    const filterBank = bank.filter((filteredbank)=>(filteredbank.bidang===FilterValue || filteredbank.prodi === FilterValue) );
    

    return(
        <>
        
        <section className="w-full h-full relative flex flex-col py-2 md:p-4 text-md text-black dark:text-white">
            <div className="flex justify-between items-center">
                <div className="flex-col">
                    <p className="font-bold text-sm md:text-base">Question Bank</p>
                    <p className="text-[#939393] dark:text-[#c0c0c0] text-xs md:text-sm" >
                        Control all the question here
                    </p>
                </div>
                
                <div className="gap-2 flex">
                    <button onClick={()=>{toggleAdd()}} className="px-2 py-2 bg-[#4EA971] font-bold rounded-lg text-xs md:text-sm">
                        Add Question
                    </button>
                    <button onClick={()=>{togglefilter()}} className="px-2 py-2 bg-[#4EA971] font-bold rounded-lg text-xs md:text-sm flex gap-1">
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
                        <p className="w-[40%] text-center flex justify-center items-center ">Pertanyaan</p>
                        <p className="w-[25%] text-center flex justify-center items-center ">Prodi</p>
                        <p className="w-[10%] text-center flex justify-center items-center ">Bidang </p>
                        
                       
                    </li>
                    {

                        filterBank.map((soal, index)=>(
                        <li key={index} className="w-full border-b-2 border-black dark:border-white flex">
                            <p className="w-[5%] text-center flex justify-center items-center ">{index + 1}</p>
                            <p className="w-[40%] text-center flex justify-center items-center ">{soal.pertanyaan}</p>
                            <p className="w-[25%] text-center flex justify-center items-center ">{soal.prodi}</p>
                            <p className="w-[10%] text-center flex justify-center items-center ">{soal.bidang}</p>
                            <div className="w-[10%] text-center flex justify-center items-center pb-1 ">
                                <button onClick={()=>{toggleEdit(soal.id, soal.pertanyaan, soal.jenis,soal.bidang )}} className=" bg-[#4EA971] px-2 py-1 hover:bg-[#71de9b] flex justify-center text-xs md:text-sm font-semibold items-center rounded-lg gap-1 ">
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
            {isEditOpen && <EditPopup editprops={handleCancel}  id={selectedQuestion.id} pertanyaan={selectedQuestion.pertanyaan} jenis={selectedQuestion.jenis} bidang={selectedQuestion.bidang} />}
            {isAddOpen && <AddSoalPopup addSoalAppear={handleCancel} />}
        </section>
        
        </>
    )
}

export default BankSoal;