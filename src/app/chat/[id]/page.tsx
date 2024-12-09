// app/chat/[id]/page.tsx
"use client";
import { useState } from 'react';
import ChatSection from "../components/Chat";
import Profile from "../components/Profile";
import Sidebar from "../components/Sidebar";
import ChatSection2 from '../components/Chat2';

const ChatPage = ({ params }: { params: { id: string, NIM: string } }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isprofileOpen, setIsProfileOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const toggleProfile = () => setIsProfileOpen(!isprofileOpen);

    return (
        <div className="md:p-4  w-full h-screen bg-[#F5F5F5] dark:bg-[#202126] flex flex-col md:flex-row">
            {/* Sidebar */}
            <div className={`${isSidebarOpen ? 'block' : 'hidden'} md:block md:w-1/5 lg:w-[15%] h-full md:h-full absolute md:static z-10 w-3/4`}>
                <Sidebar toggleSidebar={toggleSidebar}/>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col h-full w-full md:h-full">
                <ChatSection2 toggleSidebar={toggleSidebar}  toggleProfile={toggleProfile}/>
            </div>

            {/* Profile component (if you're using it) */}
            <div className={`${isprofileOpen ? 'block' : 'hidden'} md:block md:w-1/5 lg:w-[20%] h-full md:h-full absolute md:static z-10 w-3/4`}>
              <Profile togleProfile={toggleProfile}/>
            </div>
            
        </div>
    );
};

export default ChatPage;