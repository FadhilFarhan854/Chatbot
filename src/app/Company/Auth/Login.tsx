"use client";
import Spline from '@splinetool/react-spline';
import { useState } from 'react';


const CompanyLogin = () => {

    const [state, setstate] = useState("");
    const [companyName, setcompanyName] = useState("");
    const [Pasword, setPasword] = useState("");
    
    
    const handleLogin = () =>{

    }

    return(
        <>
            <section  className="bg-[url('/images/bg4.jpeg')] bg-no-repeat bg-cover w-full h-[100vh] flex items-center ">
                <div className="  w-[35%] h-screen border-black flex flex-col bg-[#ffffff4d] p-5 backdrop-blur-sm  ">
                    <div className="w-full h-10 flex py-2 gap-2">
                        <img className="h-7" src="/images/telu.png" alt=""  />
                        <p className=" font-semibold text-xl">Chatbot</p>                   
                    </div>
                    
                    <div className='w-full text-center md:mt-12'>
                        <p className=' font-semibold text-3xl'>Login</p>

                        <form className="h-full w-full flex flex-col gap-3 mt-10" onSubmit={handleLogin}>
                            <div className="w-full flex flex-col gap-5">
                                <input className="w-full text-md dark:text-white text-black p-2 bg-[#ffffff07] border-2 border-black dark:border-white rounded-md" type="text" name="nim" id="" placeholder="NIM" value={companyName} onChange={(e) => setcompanyName(e.target.value)}/>
                                <input className="w-full text-md dark:text-white text-black p-2 bg-[#ffffff07] border-2 border-black dark:border-white rounded-md" type="password" name="password" id="" placeholder="Password" value={Pasword} onChange={(e)=>setPasword(e.target.value)}/>
                            </div>
                            <button type="submit" className="p-2 text-md text-black font-bold bg-[#535353] hover:bg-green-400 hover:scale-105 transition-all duration-100 rounded-md hover:shadow-md hover:shadow-green-200" >Login</button>
                        </form>
                    </div>
                </div>
                <div className=" w-[65%] h-screen">
                <Spline scene="https://prod.spline.design/oVOdWcpmlyPMzja5/scene.splinecode"  />
                
                </div>
            </section>
        </>
    )
}

export default CompanyLogin