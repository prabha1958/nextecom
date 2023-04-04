import Link from "next/link"
import { useState } from "react"
import MobileMenu from "./MobileMenu"


export default function MobileFooter() {

    const [menuOpen,setMenuOpen] = useState(false)
    
   const handleClose = ()=>{
    setMenuOpen(false)
   }

  return (
    <>
    <div className="fixed">
    <div className="fixed w-full bottom-0 py-4 md:py-2 bg-themed2 z-50 flex items-center justify-between">

           {menuOpen && (
            <MobileMenu handleClose={handleClose} />
         )}




          {!menuOpen && (
           <div onClick={()=> setMenuOpen(!menuOpen)} class="mx-2 space-y-1 md:hidden cursor-pointer z-20">
           <div className="w-6 h-0.5 bg-white"></div>
           <div className="w-6 h-0.5 bg-white"></div>
           <div className="w-6 h-0.5 bg-white"></div>
         </div>
        )}

        {menuOpen && (
           <div onClick={()=> setMenuOpen(!menuOpen)} class="ml-2 md:hidden cursor-pointer z-20">
           <div className=" text-xs font-bold text-white">close</div>
         
           
         </div>
        )}

        <img src={"http://localhost:3000/cart1.png"} className=" w-7 h-7 md:hidden mr-3" />
       
    </div>
    </div>
    </> 
  )
}
