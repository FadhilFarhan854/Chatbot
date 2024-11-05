"use client";

import React, { useState } from "react";

interface QuestionProps {
    onValueChange: (value: string[]) => void; // Mengirim array string ke parent
    questionProps: () => void;
    bidang: string;
}

const QuestionListPopup: React.FC<QuestionProps> = ({ onValueChange, questionProps, bidang }) => {
    const [pertanyaan, setPertanyaan] = useState<string[]>([]); // Array string untuk ID pertanyaan yang dipilih

    

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, question: string) => {
        const isChecked = e.target.checked;

        if (isChecked) {
            // Tambahkan pertanyaan jika checkbox dicentang
            const updatedPertanyaan = [...pertanyaan, question];
            setPertanyaan(updatedPertanyaan);
            onValueChange(updatedPertanyaan); // Mengirim data terbaru ke parent
        } else {
            // Hapus pertanyaan jika checkbox tidak dicentang
            const updatedPertanyaan = pertanyaan.filter((pertanyaan) => pertanyaan !== question);
            setPertanyaan(updatedPertanyaan);
            onValueChange(updatedPertanyaan); // Mengirim data terbaru ke parent
        }
    };

    const bank = [
        { id: "37473721", pertanyaan: "Project apa yang kamu pernah lakukan?", jenis: "Teknikal", bidang: "general" },
        { id: "37473722", pertanyaan: "Bahasa apa yang paling kamu kuasai dalam FE development?", jenis: "Teknikal", bidang: "Frontend Developer" },
        { id: "37473723", pertanyaan: "Bisakah kamu ceritakan tentang project yang kamu lakukan?", jenis: "Teknikal", bidang: "general" },
        { id: "37473724", pertanyaan: "Apakah kamu sanggup bekerjasama dalam tim?", jenis: "Teknikal", bidang: "general" },
        { id: "37473725", pertanyaan: "Apakah kamu menguasai bahasa pemrograman typescript?", jenis: "Teknikal", bidang: "fullstack" },
        { id: "37473726", pertanyaan: "Bisakah kamu meggunakan laravel sebagai bahasa untuk backend?", jenis: "Teknikal", bidang: "Backend Developer" },
    ];

    const filterquestion = bank.filter((pertanyaan) => pertanyaan.bidang === bidang)

    return (
        <section className="w-full h-full flex justify-center absolute items-center text-black dark:text-white">
            <div className="p-3 md:w-[40vw] dark:bg-[#0000007e] backdrop-blur-md rounded-xl dark:border-white border-2 flex flex-col gap-3">
                <div className="flex w-full justify-between font-bold text-sm md:text-lg">
                    <p>Pilih Pertanyaan:</p>
                </div>
                <div>
                    <div>
                        {filterquestion.map((question) => (
                            <div className="flex gap-2" key={question.id}>
                                <input
                                    type="checkbox"
                                    id={question.id}
                                    value={question.pertanyaan}
                                    onChange={(e) => handleCheckboxChange(e, question.pertanyaan)}
                                    checked={pertanyaan.includes(question.pertanyaan)}
                                />
                                <label htmlFor={question.id}>{question.pertanyaan}</label>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-end gap-2 mt-6" >
                    <button onClick={questionProps} className="bg-[#359be5] px-3 py-2 hover:bg-[#86c2ed] mt-2 flex justify-center text-xs md:text-sm font-semibold items-center rounded-lg">
                        Batalkan
                    </button>
                    <button onClick={questionProps} className="bg-[#4EA971] px-3 py-2 mt-2 hover:bg-[#72d799] flex justify-center text-xs md:text-sm font-semibold items-center rounded-lg">
                        Simpan Pertanyaan
                    </button>
                    
                </div>
            </div>
              
        </section>
    );
};

export default QuestionListPopup;
