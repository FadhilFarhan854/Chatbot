"use client";
import React from "react";

interface SidebarProps {
    toggleSidebar: () => void;
    onPageSelect: (page: string) => void;
}

const SidebarUser:React.FC<SidebarProps> = ({ toggleSidebar, onPageSelect }) =>{
    return(
        <>
            <section className=" w-full h-full dark:text-white text-black dark:bg-[#24252b] overflow-x-visible bg-white rounded-md shadow-[2px_2px_4px_-2px_rgba(0,0,0,0.1)] shadow-black border-4 dark:border-[#25262c] flex flex-col gap-5 px-3 overflow-y-auto">
                
                
                <button className="rounded-full w-10 h-10 top-[50svh] md:hidden -right-5 bg-white absolute -z-20" onClick={toggleSidebar}>
                    <img src="/icons/close.png" className="w-4 dark:invert" alt=""  />
                </button>
                <div className="w-full h-10 flex py-2 gap-2">
                    <img className="h-7" src="/images/telu.png" alt=""  />
                    <p className=" font-semibold text-xl">Chatbot</p>
                   
                </div>
                <div className="text-xs font-semibold ">
                    <p className="text-[#6e6e72]">Features</p>
                    <ul className=" text-sm mt-2 flex flex-col gap-1">
                        <button onClick={()=>onPageSelect("Dashboard")} className="p-1 py-2 flex items-center gap-2 rounded-sm dark:hover:bg-[#2a2b32] hover:bg-[#70d195] hover:shadow-sm hover:text-white group dark:hover:text-green-200 dark:hover:shadow-green-200 duration-100">
                            <img src="/icons/dashboard.png" className="dark:invert group-hover:invert h-5" alt=""/>
                            <p className="">Dashboard</p>
                        </button>
                        <button onClick={()=>onPageSelect("Register Wawancara")} className="p-1 py-2 flex items-center gap-2 rounded-sm dark:hover:bg-[#2a2b32] hover:bg-[#70d195] hover:shadow-sm hover:text-white group dark:hover:text-green-200 hover:shadow-green-200 duration-100">
                            <img src="/icons/list-text.png" className="dark:invert group-hover:invert h-5" alt=""/>
                            <p className="">Register Wawancara</p>
                        </button>
                        <button onClick={()=>onPageSelect("Wawancara")} className="p-1 py-2 flex items-center gap-2 rounded-sm dark:hover:bg-[#2a2b32] hover:bg-[#70d195] hover:shadow-sm hover:text-white group dark:hover:text-green-200 hover:shadow-green-200 duration-100">
                            <img src="/icons/approval.png" className="dark:invert group-hover:invert h-5" alt=""/>
                            <p className="">Wawancara</p>
                        </button>
                        <button onClick={()=>onPageSelect("Hasil Wawancara")} className="p-1 py-2 flex items-center gap-2 rounded-sm dark:hover:bg-[#2a2b32] hover:bg-[#70d195] hover:shadow-sm hover:text-white group dark:hover:text-green-200 hover:shadow-green-200 duration-100">
                            <img src="/icons/approval.png" className="dark:invert group-hover:invert h-5" alt=""/>
                            <p className="">Hasil Wawancara</p>
                        </button>
                        <button onClick={()=>{}} className="p-1 py-2 flex items-center gap-2 rounded-sm dark:hover:bg-[#2a2b32] hover:bg-[#70d195] hover:shadow-sm hover:text-white group dark:hover:text-green-200 hover:shadow-green-200 duration-100">
                            <img src="/icons/marketing.png" className="dark:invert group-hover:invert h-5" alt=""/>
                            <p className="">Credit</p>
                        </button>
                        <button onClick={()=>{}} className="p-1 py-2 flex items-center gap-2 rounded-sm dark:hover:bg-[#2a2b32] hover:bg-[#70d195] hover:shadow-sm hover:text-white group dark:hover:text-green-200 hover:shadow-green-200 duration-100">
                            <img src="/icons/manual-book.png" className="dark:invert group-hover:invert h-5" alt=""/>
                            <p className="">Manual</p>
                        </button>
                        
                        
                    </ul>
                    
                </div>
            </section>
        </>
    );

}
export default SidebarUser;