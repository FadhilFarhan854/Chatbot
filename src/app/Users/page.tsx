"use client";


import React from "react";

import { useState } from "react";
import SidebarUser from "./components/SidebarUser";
import ProfileUser from "./components/ProfileUser";
import RegisterInterview from "./components/MainContent/RegisterWawancara";
import Wawancara from "./components/MainContent/Wawancara";



   
const CompanySection = () =>{

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isprofileOpen, setIsProfileOpen] = useState(false);
    const [selectedPage, setSelectedPage] = useState("Dashboard");
    const [isLogedIn, setIsLogedIn] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const toggleProfile = () => setIsProfileOpen(!isprofileOpen);
    const handlePageChange = (page: string) => setSelectedPage(page);


    return (
    <>
            {
                
            <div className="md:p-4  w-full h-screen bg-[#F5F5F5] dark:bg-[#202126] flex flex-col md:flex-row">
                {/* Sidebar */}
                <div className={`${isSidebarOpen ? 'block' : 'hidden'} md:block md:w-1/5 lg:w-[15%] h-full md:h-full absolute md:static z-10 w-3/4`}>
                   <SidebarUser toggleSidebar={toggleSidebar} onPageSelect={handlePageChange} />
                </div>
                {/* Main Content */}
                <div className="flex-1 flex flex-col h-full w-full md:h-full">
                    {selectedPage === "Register Wawancara" && <RegisterInterview />}
                    {selectedPage === "Wawancara" && <Wawancara />}
                    
                   
                </div>

                {/* Profile component*/}
                <div className={`${isprofileOpen ? 'block' : 'hidden'} md:block md:w-1/5 lg:w-[20%] h-full md:h-full absolute md:static z-10 w-3/4`}>
                    <ProfileUser togleProfile={toggleProfile}/>
                </div>
            </div>
            }
           
        
        </>
    );
}

export default CompanySection;
