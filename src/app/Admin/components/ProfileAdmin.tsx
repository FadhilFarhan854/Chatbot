"use client";

import DarkModeToggle from "@/app/components/darkmode";

interface ProfileProps {
    togleProfile:() => void
}

const ProfileAdmin:React.FC<ProfileProps> = ({ togleProfile }) =>{

    return(
        <>
            <section className="w-full h-full p-2 md:p-4 bg-white dark:bg-[#24252b] flex flex-col rounded-md shadow-[-2px_2px_4px_-2px_rgba(0,0,0,0.1)] shadow-black border-4 dark:border-[#25262c] overflow-y-auto">
                
                <button className="rounded-full w-10 h-10 top-[50svh] md:hidden -right-5 bg-white absolute -z-20" onClick={togleProfile}>
                    <img src="/icons/close.png" className="w-4 dark:invert" alt=""  />
                </button>
                <div className="w-full pt-5  ">
                        
                    <div className="w-full p-2 flex justify-center dark:invert relative">
                        
                        <img src="/icons/profile.png" alt="" className="w-[25%] h-[25%]" />
                    </div>
                    <div className="text-center text-black dark:text-white text-base font-semibold">
                        <p>Fadhilah Muhammad Farhan</p>
                        <p>6706220039</p>
                    </div>
                    <div className="text-xs font-semibold ">
                        <p className="text-[#6e6e72]">Tentang kamu</p>
                        <ul className="text-black dark:text-white text-sm mt-2 flex flex-col gap-1">
                            <a href="" className="p-1 py-2 flex items-center gap-2 rounded-sm hover:bg-[#70d195] dark:hover:bg-[#2a2b32] hover:shadow-sm dark:hover:text-green-200 hover:text-white group hover:shadow-green-200 duration-100">
                                <img src="/icons/profile.png" className="dark:invert group-hover:invert h-5" alt=""/>
                                <p className="">Profile</p>
                            </a>
                            
                            <div className="p-1 py-2 flex items-center gap-2 justify-between ">
                                <div className="flex gap-2 ">
                                    <img src="/icons/night-mode.png" className="dark:invert group-hover:invert h-5" alt=""/>
                                    <p className="">Dark Mode</p>
                                </div>
                                <DarkModeToggle /> 
                             
                            </div>
                            
                            
                        </ul>
                        
                    </div>
                </div>
                <a href="" className="p-2 text-black dark:text-white text-sm flex items-center gap-2 rounded-sm hover:bg-[#70d195] dark:hover:bg-[#2a2b32] hover:shadow-sm dark:hover:text-green-200 hover:text-white group hover:shadow-green-200 duration-100 absolute md:bottom-5 bottom-0">
                    <img src="/icons/logout.png" className="dark:invert group-hover:invert h-5" alt=""/>
                    <p className="">Logout</p>
                </a>
               
                
            </section>
        </>
    );
}

export default ProfileAdmin;