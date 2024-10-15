"use client";

const Profile = () =>{

    return(
        <>
            <section className="w-[20%] gap-5  justify-between bg-white dark:bg-[#24252b] h-full flex flex-col rounded-md shadow-[-2px_2px_4px_-2px_rgba(0,0,0,0.1)] shadow-black border-4  dark:border-[#25262c]">
                <div className="w-full pt-5 px-2">
                    <div className="w-full p-2 flex justify-center dark:invert">
                        <img src="/icons/profile.png" alt="" className="w-[25%]" />
                    </div>
                    <div className="text-center text-black dark:text-white text-base font-semibold">
                        <p>Fadhilah Muhammad Farhan</p>
                        <p>6706220039</p>
                    </div>
                    <div className="text-xs font-semibold ">
                        <p className="text-[#6e6e72]">Tentang kamu</p>
                        <ul className="text-black dark:text-white text-sm mt-2 flex flex-col gap-1">
                            <a href="" className="p-1 flex items-center gap-2 rounded-sm hover:bg-[#E0E0E0] dark:hover:bg-[#2a2b32] hover:shadow-sm dark:hover:text-red-200 hover:text-red-500 hover:shadow-red-200 duration-100">
                                <img src="/icons/profile.png" className="dark:invert h-5" alt=""/>
                                <p className="">Profile</p>
                            </a>
                            <a href="" className="p-1 flex items-center gap-2 rounded-sm hover:bg-[#E0E0E0] dark:hover:bg-[#2a2b32] hover:shadow-sm dark:hover:text-red-200 hover:text-red-500 hover:shadow-red-200 duration-100">
                                <img src="/icons/clipboard.png" className="dark:invert h-5" alt=""/>
                                <p className="">List Wawancara</p>
                            </a>
                            <a href="" className="p-1 flex items-center gap-2 rounded-sm hover:bg-[#E0E0E0] dark:hover:bg-[#2a2b32] hover:shadow-sm dark:hover:text-red-200 hover:text-red-500 hover:shadow-red-200 duration-100">
                                <img src="/icons/result.png" className="dark:invert h-5" alt=""/>
                                <p className="">Hasil</p>
                            </a>
                            
                        </ul>
                        
                    </div>
                </div>
                <a href="" className="p-2 text-black dark:text-white text-sm flex items-center gap-2 rounded-sm hover:bg-[#E0E0E0] dark:hover:bg-[#2a2b32] hover:shadow-sm dark:hover:text-red-200 hover:text-red-500 hover:shadow-red-200 duration-100">
                    <img src="/icons/logout.png" className="dark:invert h-5" alt=""/>
                    <p className="">Logout</p>
                </a>
               
                
            </section>
        </>
    );
}

export default Profile;