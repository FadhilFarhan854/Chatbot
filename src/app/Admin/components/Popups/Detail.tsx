"use client"
import React from "react";

interface Detailprops{
    detailprops : () => void
    id: string;
    companyName: string;
    alamat: string;
    bidang:string;
    startDate: string;
    deadline: string;
    listPertanyaan:string[];
}

const Detailpopup:React.FC<Detailprops> = ({detailprops, id, companyName, alamat, bidang, startDate, deadline, listPertanyaan}) => {
    

    return(
        <> 
        <section className="w-full h-full flex justify-center absolute  items-center text-black dark:text-white " >
            
            <div className="h-96 p-3 md:w-[40lvw]  dark:bg-[#3f3f3f7e] backdrop-blur-md rounded-xl dark:border-white border-2 flex flex-col gap-3">
                <div className="pb-7 overflow-y-scroll scrollbar-hide ">
                    <div className="flex w-full justify-between font-bold text-sm md:text-lg relative">
                        <p className="w-full border-b-2">Detail :</p>
                    </div>
                    <div className="pb-3 flex flex-col gap-2">
                        <div>
                            <p className="text-[#939393] dark:text-[#c0c0c0] font-bold">id :</p>
                            <p>{id}</p>
                        </div>
                        <div>
                            <p className="text-[#939393] dark:text-[#c0c0c0] font-bold">Nama Perusahaan :</p>
                            <p>{companyName}</p>
                        </div>
                        <div>
                            <p className="text-[#939393] dark:text-[#c0c0c0] font-bold">Alamat :</p>
                            <p>{alamat}</p>
                        </div>
                        <div>
                            <p className="text-[#939393] dark:text-[#c0c0c0] font-bold">Bidang :</p>
                            <p>{bidang}</p>
                        </div>
                        <div>
                            <p className="text-[#939393] dark:text-[#c0c0c0] font-bold">Tanggal Mulai :</p>
                            <p>{startDate}</p>
                        </div>
                        <div>
                            <p className="text-[#939393] dark:text-[#c0c0c0] font-bold">Deadline Pendaftaran :</p>
                            <p>{deadline}</p>
                        </div>
                        <div>
                            <p className="text-[#939393] dark:text-[#c0c0c0] font-bold">List pertanyaan :</p>
                            <ul className="px-1">
                                {listPertanyaan.map((pertanyaan, index)=>(
                                    <>
                                        <li contentEditable = "true" className="">{`${index}. ${pertanyaan}`}</li>
                                    </>
                                ))   
                                }
                            </ul>
                        </div>
                     
                    </div>
                </div>
            
                <div className="w-full flex gap-3 justify-end fixed bottom-3 right-3 ">
                    <button onClick={detailprops} className=" bg-[#359be5] px-3 py-2 hover:bg-[#86c2ed] flex justify-center text-xs md:text-sm font-semibold items-center rounded-lg ">Close</button>
                    <button onClick={detailprops} className=" bg-[#4EA971] px-3 py-2 hover:bg-[#72d799] flex justify-center text-xs md:text-sm font-semibold items-center rounded-lg ">Update</button>
                </div>
            </div>

        </section>
        </>
    )
}

export default Detailpopup;