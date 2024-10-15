// app/chat/[id]/page.tsx
import ChatSection from "../components/Chat";
import Profile from "../components/Profile";
import Sidebar from "../components/Sidebar";


const ChatPage = ({ params }: { params: { id: string, NIM: string } }) => {
    return (
      <>
        <section className="w-full h-[100vh] bg-red-700 dark:bg-[#202126] flex px-2 gap-3 py-5">
        <Sidebar />
        <ChatSection />
        <Profile />
        </section>
      </>
    );
  
  };
  
export default ChatPage;
 