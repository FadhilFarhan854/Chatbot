"use client";
import React, { useState, useEffect, useRef } from "react";
import BubbleChat from "./Bubblechat";
import { checkBobot, conclude, getNextQuestion } from "@/app/controllers/chat/ChatControllers";
import DarkModeToggle from "@/app/components/darkmode";

interface ChatSectionProps {
    toggleSidebar: () => void;
    toggleProfile: () => void;
    // isSidebarOpen: () => boolean;
    // isProfileOpen: () => boolean;
  }

const ChatSection:React.FC<ChatSectionProps> = ({ toggleSidebar, toggleProfile }) => {
  const [chatHistory, setChatHistory] = useState<{ sender: string; text: string }[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [userAnswer, setUserAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [followUpCount, setFollowUpCount] = useState(0);
  const [lastBobot, setLastBobot] = useState(0);

  
  const questions: string[] = [
      "Apakah Anda memiliki pengalaman dalam bekerja?",
      //`Apa Anda sanggup bekerja dalam tim ${lastBobot} `,
  ];

  // Create a ref for the chat container
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
      const initialQuestion = questions[0];
      setCurrentQuestion(initialQuestion);
      setChatHistory([{ sender: "bot", text: initialQuestion }]); // Start with the first question
  }, []);

  const handleAnswer = async (e: React.FormEvent) => {
      e.preventDefault();
      
      setChatHistory((prev) => [
          ...prev,
          { sender: "user", text: userAnswer },
      ]);

      setIsLoading(true);
      const bobot = await checkBobot(userAnswer, currentQuestion);
      setLastBobot(bobot);

      try {
          if (followUpCount < 2 && bobot > 0.3) {
              const nextQuestion = await getNextQuestion(userAnswer, currentQuestion);
              if (!nextQuestion) throw new Error("No question received.");
              setCurrentQuestion(nextQuestion);
              setFollowUpCount(followUpCount + 1);
              // Save the next question to chat history
              setChatHistory((prev) => [
                  ...prev,
                  { sender: "bot", text: nextQuestion },
              ]);
          } else if (questionIndex < questions.length - 1) {
              
              setFollowUpCount(0);
              setQuestionIndex(questionIndex + 1);
              const nextQuestion = questions[questionIndex + 1];
              setCurrentQuestion(nextQuestion);
              
              setChatHistory((prev) => [
                  ...prev,
                  { sender: "bot", text: nextQuestion },
              ]);
          } else {
              const conclusion = await conclude(chatHistory)
            
              setChatHistory((prev) => [
                ...prev,
                { sender: "bot", text: conclusion  },
            ]);
              setFollowUpCount(0);
              setQuestionIndex(0);
          }
      } catch (error) {
          console.error("Error getting next question:", error);
          setCurrentQuestion("Sorry, something went wrong. Please try again.");
      } finally {
          setIsLoading(false);
          setUserAnswer("");
      }
  };

  // Effect to scroll to the bottom of the chat container whenever chatHistory changes
  useEffect(() => {
      if (chatContainerRef.current) {
          chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
      }
  }, [chatHistory]);

  return (
      <>
        <section className="w-full h-full flex flex-col py-2 md:p-4">
            <div className=" w-full flex md:justify-between gap-3 px-2 items-center">
                <div className="flex  items-center">
                    <button onClick={toggleSidebar} className="p-2 rounded-md w-10 min-w-10 min-h-10 h-10 bg-gray-200 dark:bg-gray-700 md:hidden">
                        <img src="/icons/dashboard.png" alt="Menu" className="h-6 w-6 dark:invert" />
                    </button>
                <div className="md: ml-2">
                    <h1 className="text-black dark:text-white text-sm md:text-base font-bold">Chatbot AI</h1>
                    <p className="text-[#939393] dark:text-[#c0c0c0] text-xs md:text-sm">An AI Conversational tool to dig candidate's potential and knowing interest</p>
                </div>
                </div>
                
                <button onClick={toggleProfile}className=" p-2 rounded-md w-10 min-w-10 min-h-10 h-10 bg-gray-200 dark:bg-gray-700 md:hidden">
                    <img src="/icons/profile.png" alt="Menu" className="h-6 w-6 dark:invert" />
                </button>
            </div>
              

              <div className="mt-3 gap-2 overflow-hidden pb-5 w-full h-full dark:bg-[#1e1f24] bg-[#ffffff] bg-border-2 border-[#232429] rounded-xl flex flex-col">
                    <div ref={chatContainerRef}   className="w-full md:px-16 px-5 gap-5 flex flex-col justify-start mt-10 items-center overflow-y-scroll scrollbar-hide h-[90%]">
                      <img src="/images/telu.png" alt="" className="h-10" />
                      <div className="dark:text-white text-black text-center">
                          <h1 className="text-base font-bold">Test Your Potential and Interest Now</h1>
                          <p className="text-[#333333] dark:text-[#c0c0c0] text-sm">An AI Conversional tool to dig candidate's potential and knowing interest</p>
                      </div>
                      <div className="grid-cols-3 w-full dark:text-white text-black gap-5 md:grid hidden">
                          <div className="bg-[#E0E0E0] dark:bg-[#24262b] h-40 border-2 rounded-md border:[#EEEEEE] dark:border-[#27292e] p-2 flex flex-col gap-3  text-center">
                              <h1 className="text-base font-bold">Trusted</h1>
                              <p className="text-[#333333] dark:text-[#c0c0c0] text-sm">Setiap Pertanyaan yang diajukan merupakan pengembagan dari AI dan juga berdasarkan ahli</p>
                          </div>
                          <div className="bg-[#E0E0E0] dark:bg-[#24262b] h-40 border-2 rounded-md border:[#EEEEEE] dark:border-[#27292e] p-2 flex flex-col gap-3  text-center">
                              <h1 className="text-base font-bold">Updated</h1>
                              <p className="text-[#333333] dark:text-[#c0c0c0] text-sm">Aplikasi yang kami bangun selalu diperbarui sesuai kebutuhan pengguna. baik segi fitur maupun kualitas pertanyaan</p>
                          </div>
                          <div className="bg-[#E0E0E0] dark:bg-[#24262b] h-40 border-2 rounded-md border:[#EEEEEE] dark:border-[#27292e] p-2 flex flex-col gap-3  text-center">
                              <h1 className="text-base font-bold">Effectiveness</h1>
                              <p className="text-[#333333] dark:text-[#c0c0c0] text-sm">Keefektifan selalu menjadi faktor penting dalam sebuah kegiatan. aplikasi ini membuat proses wawancara lebih efektif</p>
                          </div>
                      </div>
                      <p className="text-[#333333] dark:text-[#c0c0c0] text-center text-sm">Jawablah Setiap pertanyaan dengan jujur dan objektif, setiap jawaban anda akan mempengaruhi hasil</p>
                      <BubbleChat messages={chatHistory} />
                    </div>

                  <div className="w-full md:px-16 px-5">
                      <form onSubmit={handleAnswer} action="" className="w-full dark:bg-[#2e2f35] bg-[#E0E0E0] rounded-full flex">
                          <div className="relative w-full p-2 md:p-4 flex items-center">
                              <input 
                                  type="text" 
                                  className="focus:outline-none w-full px-2 pr-8 bg-transparent border-transparent text-black dark:text-white text-base placeholder:text-base focus:border-transparent" 
                                  placeholder="write your answer here" 
                                  value={userAnswer} 
                                  onChange={(e) => { setUserAnswer(e.target.value); }} 
                              />
                              <button 
                                  disabled={isLoading} 
                                  type="submit" 
                                  className="absolute transform right-2 flex items-center justify-center bg-[#50c07b] rounded-full h-9 w-9 hover:bg-[#8de0ad] hover:scale-105 hover:shadow-sm hover:shadow-red-200 transition-all duration-100"
                              >
                                  <img src="/icons/send2.png" className="h-[50%] invert" alt="Send" />
                              </button>
                          </div>
                      </form>
                  </div>
              </div>
          </section>
      </>
  );
};

export default ChatSection;
