import { useState } from "react"
import Search from "./Search"
import { SanityDocument } from "@sanity/client";
import { groq } from "next-sanity";
import { client } from "@/lib/client"
import Link from "next/link";
import { useAuthContext } from "@/hooks/useAuthContext";


export default function Navbar() {
    const [menuOpen,setMenuOpen] = useState()
    const {currentUser, logout} = useAuthContext()
    
    const handleClick =(e)=>{
        e.preventDefault()
        logout()
    }
  return (
    <>
    <div className="fixed w-full top-0 py-4 md:py-2 bg-themed3 z-50">
        <div className="max-w-7xl mx-auto px-5 py-2 flex items-center justify-between relative ">
        {!menuOpen && (
           <div onClick={()=> setMenuOpen(!menuOpen)} class="space-y-1 md:hidden cursor-pointer z-20">
           <div className="w-6 h-0.5 bg-white"></div>
           <div className="w-6 h-0.5 bg-white"></div>
           <div className="w-6 h-0.5 bg-white"></div>
         </div>
        )}

        {menuOpen && (
           <div onClick={()=> setMenuOpen(!menuOpen)} class=" md:hidden cursor-pointer z-20">
           <div className=" text-xs font-bold text-white">close</div>
         
           
         </div>
        )}
         
         <Link href="/"><img src={"http://localhost:3000/logo.png"} className="w-1/18 h-9 hidden md:block cursor-pointer  " /></Link>
         <Search />
          <div className="hidden md:block">
            <div className=" flex items-center justify-around gap-2 ">
              {!currentUser && 
                 (
                  <>
                    <Link href="/login"><p className="text-md font-thin text-themel4 cursor-pointer">Login</p></Link>
                    <Link href="/register"><p className="text-md font-thin text-themel4 cursor-pointer">Register</p></Link>
                  </>
                 )
              }
              {currentUser && (
                <>
                  <p className="text-md font-thin text-themel4 cursor-pointer">{currentUser.displayName}</p>
                  <button onClick={handleClick} className="text-md px-2 py-1 bg-themed4 font-thin text-themel4 cursor-pointer">Logout</button>

                </>
              )}
               
            </div>
          </div>
        
         </div>

         {menuOpen && (
             <div id="menu" className=" flex flex-col items-center justify-center space-y-4 bg-themed3 min-h-max absolute left-0 top-0 w-full p-10  rounded-b-3xl  text-themel4  text-center ">
                <Link href="/"><img src={"http://localhost:3000/logo.png"} className="w-1/18 h-9" /></Link>
                 <Link href="/login"><p className="text-md font-thin text-themel4 cursor-pointer">Login</p></Link>
                <Link href="/register"><p className="text-md font-thin text-themel4 cursor-pointer">Register</p></Link>
             </div>
         )}

       
      
    </div>
  
    </>
  )
}

