import HeaderAdmin from "./components/Header";
import SidebarAdmin from "./components/SidebarAdmin";
import React from "react";
import { Statistic1 } from "./components/Statistic";

const AdminPage = () =>{
    return(
        <>
            <section className="w-full h-[100vh] bg-[#202126] flex px-2 gap-3 py-5">
                <SidebarAdmin />
                <div className="flex-col gap-2 flex w-full">
                    <HeaderAdmin />
                    <Statistic1 />
                </div>
                
            </section>
        
        </>
    );
}

export default AdminPage;
