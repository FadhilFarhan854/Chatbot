"use client";
import React, { useState, useEffect, useRef } from "react";
import BubbleChat from "./Bubblechat";
import { checkBobot, getNextQuestion } from "@/app/API/chat/route";
import DarkModeToggle from "@/app/components/darkmode";

const ChatSection = () => {
  const [chatHistory, setChatHistory] = useState<{ sender: string; text: string }[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [userAnswer, setUserAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [followUpCount, setFollowUpCount] = useState(0);
  const [lastBobot, setLastBobot] = useState(0);
  
  const questions: string[] = [
      "Apakah Anda memiliki pengalaman dalam bekerja?",
      `Apa Anda sanggup bekerja dalam tim ${lastBobot} `,
  ];

  // Create a ref for the chat container
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  // Use useEffect to set the first question when the component mounts
  useEffect(() => {
      const initialQuestion = questions[0];
      setCurrentQuestion(initialQuestion);
      setChatHistory([{ sender: "bot", text: initialQuestion }]); // Start with the first question
  }, []);

  const handleAnswer = async (e: React.FormEvent) => {
      e.preventDefault();
      // Save user's answer to chat history
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
              // Reset follow-up count and move to next main question
              setFollowUpCount(0);
              setQuestionIndex(questionIndex + 1);
              const nextQuestion = questions[questionIndex + 1];
              setCurrentQuestion(nextQuestion);
              // Save the next question to chat history
              setChatHistory((prev) => [
                  ...prev,
                  { sender: "bot", text: nextQuestion },
              ]);
          } else {
              setCurrentQuestion(`Wawancara telah selesai, silahkan klik tombol kirim untuk mengirim semua jawaban Anda. ${bobot}`);
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
          <section className="w-[65%] h-full flex flex-col">
                <div className="w-full flex justify-between">
                    <div>
                        <h1 className="text-white text-base font-bold">Chatbot AI</h1>
                        <p className="text-[#c0c0c0] text-sm">An AI Conversional tool to dig candidate's potential and knowing interest</p>
                    </div>
                    <div className="py-2">
                        <DarkModeToggle />
                    </div>
                </div>
              

              <div className="mt-3 gap-2 overflow-hidden pb-5 w-full h-full dark:bg-[#1e1f24] bg-[#ffffff] bg-border-2 border-[#232429] rounded-xl flex flex-col">
                  <div 
                      ref={chatContainerRef} // Attach the ref to the chat container
                      className="w-full px-16 gap-5 flex flex-col justify-start mt-10 items-center overflow-y-scroll scrollbar-hide h-[90%]"
                  >
                      <img src="/images/telu.png" alt="" className="h-10" />
                      <div className="dark:text-white text-black text-center">
                          <h1 className="text-base font-bold">Test Your Potential and Interest Now</h1>
                          <p className="text-[#333333] dark:text-[#c0c0c0] text-sm">An AI Conversional tool to dig candidate's potential and knowing interest</p>
                      </div>
                      <div className="grid-cols-3 w-full dark:text-white text-black gap-5 grid">
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
                      <p className="text-[#333333] dark:text-[#c0c0c0] text-sm">Jawablah Setiap pertanyaan dengan jujur dan objektif, setiap jawaban anda akan mempengaruhi hasil</p>
                      <BubbleChat messages={chatHistory} />
                  </div>
                  <div className="w-full px-16">
                      <form onSubmit={handleAnswer} action="" className="w-full dark:bg-[#2e2f35] bg-[#E0E0E0] rounded-full flex">
                          <div className="relative w-full p-4 flex items-center">
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
                                  className="absolute transform right-2 flex items-center justify-center bg-red-400 rounded-full h-9 w-9 hover:bg-red-300 hover:scale-105 hover:shadow-sm hover:shadow-red-200 transition-all duration-100"
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
