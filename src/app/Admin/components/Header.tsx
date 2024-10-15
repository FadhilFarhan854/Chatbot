"use client";
import React from "react";
import { DateTime } from 'luxon';

const HeaderAdmin = () =>{
    const formattedDate = DateTime.local().toFormat('dd MMMM yyyy');

    const handleSearch = () =>{

    }

    return(
        <>
            <section className="w-full p-1 px-3 flex justify-between items-center text-md h-14 bg-[#24252b] border-[#24252b] border-2 rounded-xl ">
                <div className="text-white h-full items-center font-semibold  flex">
                    <p>Welcome, Admin123</p>
                </div>
                <form className="h-full w-[30vw] bg-[#202126] gap-3 px-2 flex rounded-full border-2 border-[#2d2f36]" onSubmit={handleSearch}>
                    <img src="/icons/lens.png" alt="" className=" h-full invert py-2" />
                    <input type="text" className="bg-transparent text-white w-full focus:outline-none" />
                </form>
                <div className="text-[#c0c0c0]  h-full items-center   flex">
                    {formattedDate}
                </div>
            </section>
        </>
    )
}

export default HeaderAdmin;