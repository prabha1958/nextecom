import { useAuthContext } from "@/hooks/useAuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import AddAddress from "./AddAddress";
import { collection,query,where, onSnapshot,getDocs  } from "firebase/firestore";
import {  db } from "../firebase/config";
import Address from "./Address";
import MoreAddress from "./MoreAddress";
import CartItem from "./CartItem";
import axios from "axios";
import OrderPay from "./OrderPay";


export default function Checkout({handleClose, cartitems, deleteItem, total}) {
    const {currentUser, setNotification} = useAuthContext()
    const [address,setAddress] = useState([])
    const [defaultAddress,setDefaultAddress] = useState()
    const [selAddress,setSelAddress] = useState(defaultAddress)
    const [open,setOpen] = useState(false)
    const [response,setResponse] = useState()
    const [modalOpen,setModalOpen] = useState(false)
  

   

    useEffect(()=>{
        async function go(){
            const q = query(collection(db,"addresses"),where("userid","==",currentUser.uid))
             const res =  onSnapshot(q,(snapshot)=>{
                 let result = []
                 
                  snapshot.docs.forEach((doc)=>{
                      result.push(doc.data())
                    
                  })
                  const defadd = result.filter(item=>item.default == true)
                 
                  setAddress(result)
                  setSelAddress(defadd)
                  
             })
        }
        go()
    },[currentUser])

    const inputs = [
        userid=>currentUser.uid,
        uername=>currentUser.displayName,
        email=>currentUser.email,
        mobile=>currentUser.mobile,
        amount=>total
]

   

     const orderCreate = async (inputs)=>{
        if(inputs.selAddress == ''){
             setNotification("select your shipping address")
             return
        }
        const result =  await axios.post("/api/payorder",{
            userid:currentUser.uid,
            username:currentUser.displayName,
            email:currentUser.email,
            mobile:currentUser.mobile,
            amount:total,
            cartitems,
            address:selAddress,
        })

          if(result){
            setResponse(result.data.res)
            setModalOpen(true)
          }
     }

    console.log(defaultAddress)
  return (
    <>
    <div className="fixed top-0 left-0 right-0 bottom-0 opacity-95  bg-themed3   px-3 overflow-y-scroll " >
      <div className="max-w-7xl min-h-screen mx-auto flex flex-col items-center justify-center bg-slate-300 opacity-100 border border-blue-400 mt-10  ">  
          <div className="w-full text-right my-6 px-4 ">
                   <p onClick={()=>handleClose()} className="cursor-pointer">Close</p> 
                   

          </div>  
          <div className="w-full text-center my-4 px-4 ">
                   <p className="text-2xl font-bold text-themed4">CHECKOUT </p> 
          </div>  
           <div  className="w-full flex items-center justify-center gap-3 px-5">
               <div className="flex-1 flex flex-col items-start  space-y-2 ">
                    <p className="text-sm font-bold text-themed4">Your details</p>
                   <div className=" w-96 mb-2 flex items-center gap-2 mt-5">
                       <p className="font-bold text-xs text-themed4">Name</p>
                       <p className="text-sm font-extrabold text-themed3">{currentUser.displayName}</p>
                   </div>
                   <div className=" w-96 mb-2 flex items-center gap-2">
                       <p className="font-bold text-xs text-themed4">email</p>
                       <p className="text-sm font-extrabold text-themed3">{currentUser.email}</p>
                   </div>
                   <div>
                      <p>Shipping address selected</p>
                      {defaultAddress && (
                        <>
                           <p className="text-xs font-bold text-gray-700">{defaultAddress.premises}</p>
                           <p className="text-xs font-bold text-gray-700">{defaultAddress.street}</p>
                           <p className="text-xs font-bold text-gray-700">{defaultAddress.area}</p>
                           <p className="text-xs font-bold text-gray-700">{defaultAddress.city}</p>
                           <p className="text-xs font-bold text-gray-700">{defaultAddress.state}</p>
                           <p className="text-xs font-bold text-gray-700">{defaultAddress.pin}</p>
                        </>
                      ) }
                   </div>
                   <div className=" w-96 mb-2 flex flex-col  items-center gap-2">
                       <p>Select your shipping address</p>
                       {!address && <AddAddress userid={currentUser.uid}/>}
                       {address && address.map((item, index)=>(
                        <div onClick={()=>setSelAddress(item)} className="flex items-center justify-center gap-2">
                             <Address key={index} address={item}   />
                        </div>
                          
                       ))}
                       
                       </div>
                       <p onClick={()=>setOpen(true)} className="text-xs font-bold text-themeblue cursor-pointer">add addresses</p>
               </div>
               <div className="flex-1 flex flex-col space-y-2">
               {cartitems.length >0 && cartitems.map((item,index)=>(
                      <CartItem key={index} cartitems={item} sno={index+1} deleteItem={deleteItem}  />
                    )) }
                 {total>0 && <div className="w-full text-center mt-4 "> <span className="text-sm font-normal text-gray-700">Total amount</span>&nbsp;&nbsp;<span className="text-xl font-extrabold text-themed4">{total}</span></div>} 

                  <p>Pay with</p>
                  <img onClick={orderCreate}  src={`${photourl}/razorpay.png`}  className=" w-1/3 rounded-lg cursor-pointer"/>
               </div>
              
           </div>    
       
        </div>
    </div>
       {open && <MoreAddress  setOpen={setOpen}/>}
       {modalOpen && <OrderPay data={response} setModalOpen={setModalOpen} />}
    </>
  )
}
