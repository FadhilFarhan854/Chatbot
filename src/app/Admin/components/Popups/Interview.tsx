"use client";

import React, { useState } from "react";
import QuestionListPopup from "./QuestionList";

interface InterviewProps {
    interviewprops: () => void;
}

const InterviewPopup: React.FC<InterviewProps> = ({ interviewprops }) => {
    const [bidang, setBidang] = useState("");
    const [isCustomBidang, setIsCustomBidang] = useState(false);
    const [pertanyaan, setPertanyaan] = useState<string[]>([]);
    const [isPertanyaanOpen, setisPertanyaanOpen] = useState(false);


    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;

        if (selectedValue === "custom") {
            setIsCustomBidang(true);  
            setBidang("");  
        } else {
            setIsCustomBidang(false); 
            setBidang(selectedValue);  
        }
    };
    const togleQuestion = () =>{
        setisPertanyaanOpen(true)
    }
   
    const handleCancel = () =>{
        setisPertanyaanOpen(false)
    }
    const handleQuestionChange= (value: string[]) => {
        setPertanyaan(value)
    };


    return (
        <section className="w-full h-full flex justify-center absolute items-center text-black dark:text-white">
            <div className="p-3 md:w-[40vw] dark:bg-[#0000007e] backdrop-blur-md rounded-xl dark:border-white border-2 flex flex-col gap-3">
                <div className="flex w-full justify-between font-bold text-sm md:text-lg">
                    <p>Tambahkan Wawancara :</p>
                </div>
                <div>
                    <p className="text-[#939393] dark:text-[#c0c0c0]">Creator :</p>
                    <p>Admin 1</p>
                    <p className="text-[#939393] dark:text-[#c0c0c0]">Bidang :</p>
                    <select className="bg-transparent" value={isCustomBidang ? "custom" : bidang} onChange={handleSelectChange}>
                        <option className="bg-[#8383838f] text-black" value="Frontend Developer">Frontend Developer</option>
                        <option className="bg-[#8383838f] text-black" value="Backend Developer">Backend Developer</option>
                        <option className="bg-[#8383838f] text-black" value="Full Stack Developer">Full Stack Developer</option>
                        <option className="bg-[#8383838f] text-black" value="Designer">Designer</option>
                        <option className="bg-[#8383838f] text-black" value="Project Manager">Project Manager</option>
                        <option className="bg-[#8383838f] text-black" value="custom">Lainnya</option>
                    </select>
                    
                    {isCustomBidang && (
                        <input
                            type="text"
                            value={bidang}
                            onChange={(e) => setBidang(e.target.value)}
                            className="bg-[#8383838f] text-white p-2 rounded-md w-full mt-3"
                            placeholder="Masukkan bidang custom"
                        />
                    )}

                    <p className="text-[#939393] dark:text-[#c0c0c0]">List Pertanyaan:</p>

                    {
                        pertanyaan.map((question, index)=>(
                            <div>
                                <p>{`${index+1}. ${question}`}</p>
                            </div>
                        ))
                    }

                    <button onClick={togleQuestion} className="bg-[#4EA971] px-2 py-1 mt-2 hover:bg-[#72d799] flex justify-center text-xs md:text-sm font-semibold items-center rounded-lg">
                        buka bank soal
                    </button>
                </div>
                <div className="w-full flex gap-3 justify-end  bottom-3 right-3 ">
                    <button onClick={interviewprops} className=" bg-[#359be5] px-3 py-2 hover:bg-[#86c2ed] flex justify-center text-xs md:text-sm font-semibold items-center rounded-lg ">Close</button>
                    <button onClick={interviewprops} className=" bg-[#4EA971] px-3 py-2 hover:bg-[#72d799] flex justify-center text-xs md:text-sm font-semibold items-center rounded-lg ">Update</button>
                </div>
                
            </div>
            
           
            {isPertanyaanOpen && <QuestionListPopup questionProps={handleCancel} onValueChange={handleQuestionChange} bidang={bidang}/> }
        </section>
    );
};

export default InterviewPopup;
