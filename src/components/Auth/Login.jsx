import { useId, useState } from "react";

export const Login=()=>{

    const id=useId();

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")

    const submitHandler=(e)=>{
        e.preventDefault()
        console.log(
            email,password
        );

        setEmail("");
        setPassword(
            ""
        );
        
    }
    
    return(<>
    <div className="flex h-screen w-screen items-center justify-center">
        <div className="border-2 rounded border-blue-500 !p-30 ">
            <form onSubmit={(e)=>{submitHandler(e)}} className="flex flex-col justify-center items-center ">
                    <input value={email} onChange={(e) => { setEmail(e.target.value) }} className="border-2  border-blue-600 rounded-full !px-8 !py-3 text-3xl   text-white placeholder:text-gray-500  outline-none" type="email" placeholder="Enter Your Email" name="" id={id+"email"} />
                    <input value={password} onChange={(e) => { setPassword(e.target.value) }} className="border-2  border-blue-600 rounded-full !px-8 !py-3 text-3xl outline-none text-white placeholder:text-gray-500 !mt-5" type="password" name="" id={id+"password"} placeholder="Enter Your Password" />
                <button className="text-white border-none border-3 rounded-full !px-8 !py-4 !mt-4 !mb-4 bg-blue-500 font-[1000]" >Login</button>
            </form>
        </div>
    </div>
    </>)
}