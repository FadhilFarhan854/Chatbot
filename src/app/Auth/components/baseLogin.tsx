import React from "react";
interface BaseProps{
    children: React.ReactNode;
}

const Base: React.FC<BaseProps> = ({children})=>{
    return (
    <>
    <section  className="bg-[url('/images/background.png')] bg-no-repeat bg-cover w-full h-[100vh] flex items-center justify-center ">
        <div className="  w-[25%] h-[60%] border-black border-1 rounded-xl overflow-hidden shadow-xl shadow-[#ff6c6c]">
            <div className="w-full h-full bg-[#00000049] backdrop-blur-md flex ">
                <div className="w-full bg-[#00000044] backdrop-blur-lg h-full p-7 " >
                    <p className="text-white text-3xl font-semibold text-center">Login</p>
                    <div className="h-full py-5">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    </>
    );
    
    }
export default Base;