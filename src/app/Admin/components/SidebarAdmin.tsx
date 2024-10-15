"use client";
import React from "react";

const SidebarAdmin = () =>{

    return(
        <>
         <section className="w-[15%] h-full bg-[#24252b] rounded-md shadow-md shadow-black border-4 border-[#25262c] flex flex-col gap-5 px-3">
                <div className="w-full h-10 flex py-2 gap-2">
                    <img className="h-7" src="/images/telu.png" alt=""  />
                    <p className="text-white font-semibold text-xl">Chatbot</p>
                </div>
                <div className="text-xs font-semibold ">
                    <p className="text-[#6e6e72]">Features</p>
                    <ul className="text-white text-sm mt-2 flex flex-col gap-1">
                        <a href="" className="p-1 flex items-center gap-2 rounded-sm hover:bg-[#2a2b32] hover:shadow-sm hover:text-red-200 hover:shadow-red-200 duration-100">
                            <img src="/icons/dashboard.png" className="invert h-5" alt=""/>
                            <p className="">Dashboard</p>
                        </a>
                        <a href="" className="p-1 flex items-center gap-2 rounded-sm hover:bg-[#2a2b32] hover:shadow-sm hover:text-red-200 hover:shadow-red-200 duration-100">
                            <img src="/icons/chat.png" className="invert h-5" alt=""/>
                            <p className="">Status</p>
                        </a>
                        <a href="" className="p-1 flex items-center gap-2 rounded-sm hover:bg-[#2a2b32] hover:shadow-sm hover:text-red-200 hover:shadow-red-200 duration-100">
                            <img src="/icons/info.png" className="invert h-5" alt=""/>
                            <p className="">Usage</p>
                        </a>
                        <a href="" className="p-1 flex items-center gap-2 rounded-sm hover:bg-[#2a2b32] hover:shadow-sm hover:text-red-200 hover:shadow-red-200 duration-100">
                            <img src="/icons/marketing.png" className="invert h-5" alt=""/>
                            <p className="">Edit</p>
                        </a>
                        <a href="" className="p-1 flex items-center gap-2 rounded-sm hover:bg-[#2a2b32] hover:shadow-sm hover:text-red-200 hover:shadow-red-200 duration-100">
                            <img src="/icons/manual-book.png" className="invert h-5" alt=""/>
                            <p className="">Manual</p>
                        </a>
                        
                    </ul>
                    
                </div>
            </section>
        </>
    );


}
export default SidebarAdmin;