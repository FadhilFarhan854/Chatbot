"use client";
import React from "react";

const Sidebar = () =>{

    return(
        <>
            <section className="w-[15%] h-full dark:bg-[#24252b] bg-white rounded-md shadow-[2px_2px_4px_-2px_rgba(0,0,0,0.1)] shadow-black border-4  dark:border-[#25262c] flex flex-col gap-5 px-3">
                <div className="w-full h-10 flex py-2 gap-2">
                    <img className="h-7" src="/images/telu.png" alt=""  />
                    <p className="text-white font-semibold text-xl">Chatbot</p>
                </div>
                <div className="text-xs font-semibold ">
                    <p className="text-[#6e6e72]">Features</p>
                    <ul className="dark:text-white text-black text-sm mt-2 flex flex-col gap-1">
                        <a href="" className="p-1 flex items-center gap-2 rounded-sm dark:hover:bg-[#2a2b32] hover:bg-[#E0E0E0] hover:shadow-sm hover:text-red-500 dark:hover:text-red-200 hover:shadow-red-200 duration-100">
                            <img src="/icons/dashboard.png" className="dark:invert h-5" alt=""/>
                            <p className="">Dashboard</p>
                        </a>
                        <a href="" className="p-1 flex items-center gap-2 rounded-sm dark:hover:bg-[#2a2b32] hover:bg-[#E0E0E0] hover:shadow-sm hover:text-red-500 dark:hover:text-red-200 hover:shadow-red-200 duration-100">
                            <img src="/icons/chat.png" className="dark:invert h-5" alt=""/>
                            <p className="">Chat</p>
                        </a>
                        <a href="" className="p-1 flex items-center gap-2 rounded-sm dark:hover:bg-[#2a2b32] hover:bg-[#E0E0E0] hover:shadow-sm hover:text-red-500 dark:hover:text-red-200 hover:shadow-red-200 duration-100">
                            <img src="/icons/info.png" className="dark:invert h-5" alt=""/>
                            <p className="">About this app</p>
                        </a>
                        <a href="" className="p-1 flex items-center gap-2 rounded-sm dark:hover:bg-[#2a2b32] hover:bg-[#E0E0E0] hover:shadow-sm hover:text-red-500 dark:hover:text-red-200 hover:shadow-red-200 duration-100">
                            <img src="/icons/marketing.png" className="dark:invert h-5" alt=""/>
                            <p className="">Credit</p>
                        </a>
                        <a href="" className="p-1 flex items-center gap-2 rounded-sm dark:hover:bg-[#2a2b32] hover:bg-[#E0E0E0] hover:shadow-sm hover:text-red-500 dark:hover:text-red-200 hover:shadow-red-200 duration-100">
                            <img src="/icons/manual-book.png" className="dark:invert h-5" alt=""/>
                            <p className="">Manual</p>
                        </a>
                        
                    </ul>
                    
                </div>
            </section>
        </>
    );

}
export default Sidebar;