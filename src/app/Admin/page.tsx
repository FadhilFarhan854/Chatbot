"use client";

import HeaderAdmin from "./components/Header";
import SidebarAdmin from "./components/SidebarAdmin";
import React from "react";
import { Statistic1 } from "./components/Statistic";
import { useState } from "react";
import DashboardAdmin from "./components/MainAdmin";
import ProfileAdmin from "./components/ProfileAdmin";
import CompanyAdmin from "./components/CompanyPage";

   
const AdminPage = () =>{

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isprofileOpen, setIsProfileOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const toggleProfile = () => setIsProfileOpen(!isprofileOpen);


    return (
    <>
           <div className="md:p-4  w-full h-screen bg-[#F5F5F5] dark:bg-[#202126] flex flex-col md:flex-row">
            {/* Sidebar */}
                <div className={`${isSidebarOpen ? 'block' : 'hidden'} md:block md:w-1/5 lg:w-[15%] h-full md:h-full absolute md:static z-10 w-3/4`}>
                    <SidebarAdmin toggleSidebar={toggleSidebar}/>
                </div>

            {/* Main Content */}
                <div className="flex-1 flex flex-col h-full w-full md:h-full">
                    <CompanyAdmin />
                </div>

            {/* Profile component*/}
                <div className={`${isprofileOpen ? 'block' : 'hidden'} md:block md:w-1/5 lg:w-[20%] h-full md:h-full absolute md:static z-10 w-3/4`}>
                <ProfileAdmin togleProfile={toggleProfile}/>
                </div>
            </div>
        
        </>
    );
}

export default AdminPage;
