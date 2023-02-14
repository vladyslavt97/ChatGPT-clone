'use client'
import { signIn } from "next-auth/react"
import Image from "next/image"
import fb from '../public/fb.png'
import google from '../public/google.png'
import github from '../public/github.png'

function Login() {
  return (
    <div className="bg-[#11A37F] h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-black">Recreated by Vladyslav Tsurkanenko😊</h1>
        <Image 
        src="https://links.papareact.com/2i6"
        width={300}
        height={300}
        alt="logo"
        />
        <button onClick={()=>signIn('facebook')} className="text-white font-bold text-3xl animate-pulse flex flex-row items-center bg-blue-500 px-5 py-2 rounded-lg">Signin with &nbsp;
          <Image src={fb} alt="fb" width={50} height={50}/>
        </button>
        <button onClick={()=>signIn('google')} className="text-white font-bold text-3xl animate-pulse flex flex-row items-center mt-5 bg-slate-600 px-5 py-2 rounded-lg">Sign in with &nbsp;
          <Image src={google} alt="fb" width={100} height={100}/>
        </button>
        <button onClick={()=>signIn('github')} className="text-white font-bold text-3xl animate-pulse flex flex-row items-center mt-5 bg-slate-600 px-5 py-2 rounded-lg">Sign in with &nbsp;
          <Image src={github} alt="fb" width={80} height={80}/>
        </button>
    </div>
  )
}

export default Login