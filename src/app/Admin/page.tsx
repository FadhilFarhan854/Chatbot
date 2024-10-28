"use client";


import SidebarAdmin from "./components/SidebarAdmin";
import React from "react";
import { Statistic1 } from "./components/Statistic";
import { useState } from "react";
import DashboardAdmin from "./components/MainCntent/MainAdmin";
import ProfileAdmin from "./components/ProfileAdmin";
import CompanyAdmin from "./components/MainCntent/CompanyPage";
import CompanyApproval from "./components/MainCntent/CompanyApproval";
import InterviewApproval from "./components/MainCntent/InterviewApproval";

   
const AdminPage = () =>{

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isprofileOpen, setIsProfileOpen] = useState(false);
    const [selectedPage, setSelectedPage] = useState("Dashboard");

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const toggleProfile = () => setIsProfileOpen(!isprofileOpen);
    const handlePageChange = (page: string) => setSelectedPage(page);


    return (
    <>
           <div className="md:p-4  w-full h-screen bg-[#F5F5F5] dark:bg-[#202126] flex flex-col md:flex-row">
            {/* Sidebar */}
                <div className={`${isSidebarOpen ? 'block' : 'hidden'} md:block md:w-1/5 lg:w-[15%] h-full md:h-full absolute md:static z-10 w-3/4`}>
                    <SidebarAdmin toggleSidebar={toggleSidebar} onPageSelect={handlePageChange}/>
                </div>

            {/* Main Content */}
                <div className="flex-1 flex flex-col h-full w-full md:h-full">
                    {selectedPage === "Dashboard" && <DashboardAdmin />}
                    {selectedPage === "CompanyControl" && <CompanyAdmin />}
                    {selectedPage === "CApproval" && <CompanyApproval />}
                    {selectedPage === "InterviewApproval" && <InterviewApproval />}
                    {/* Add other components as needed based on `selectedPage` */}
                    
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
