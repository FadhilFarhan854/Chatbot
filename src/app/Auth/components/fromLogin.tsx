"use client";
import React from "react";
import { useState } from "react";

const FormLogin = ()=>{
    const [nim, setNim] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin =(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log("NIM:", nim);
        console.log("Password:", password);
    }
    return (
        <>
        <section className="w-full p-5 h-full">
            <form className="h-full w-full flex flex-col justify-between" onSubmit={handleLogin}>
                <div className="w-full flex flex-col gap-5">
                    <input className="w-full text-md text-white p-2 bg-[#ffffff07] border-b-2 border-white rounded-md" type="text" name="nim" id="" placeholder="NIM" value={nim} onChange={(e) => setNim(e.target.value)}/>
                    <input className="w-full text-md text-white p-2 bg-[#ffffff07] border-b-2 border-white rounded-md" type="password" name="password" id="" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button type="submit" className="p-2 text-md text-black font-bold bg-[#535353] hover:bg-red-400 hover:scale-105 transition-all duration-100 rounded-md hover:shadow-md hover:shadow-red-200" >Login</button>
            </form>
        </section>
        </>
        );
}

export default FormLogin;