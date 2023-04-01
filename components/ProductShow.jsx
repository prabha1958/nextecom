import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import { SanityDocument } from "@sanity/client";
import { client } from "@/lib/client";
import { useState, useEffect } from "react";
import { groq } from "next-sanity";
import Link from "next/link";
import { useRouter } from "next/router";
import OtherRelated from "./OtherRelated";

export default function ProductShow({mobile, type }) {
  
    const builder = imageUrlBuilder(client);
    const [selIndex,setSelIndex] = useState(0)
    const discount = (mobile[0].mrp - mobile[0].saleprice)/mobile[0].mrp*100
    const [allmobiles, setAllmobiles] = useState()
    const [code,setCode] = useState(mobile[0].category)
    const router = useRouter()

    useEffect(()=>{
      async function  go(){
       
       const query = groq`*[_type == '${type}']`
        const result = await client.fetch(query)
         setAllmobiles(result)
       }
       go()
    },[])
    
    const other = (allmobiles || []).filter(item=>item.slug.current !== mobile[0].slug.current)

    const handleClick = (id,type)=>{
        router.push({
          pathname:"/product",
          query: {
              pid:id,
              ptype:type
          }
        })
  }
   
  
  return (
    <div className="w-full mt-20 ">
        <div className="w-full text-center py-3">
           <h1 className="text-xl font-bold text-themed4">{mobile[0].name}</h1>
        </div>
        
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row itmes-center justify-center px-2 mt-8 mb-8 ">
        
         <div className="flex-1 flex gap-3  items-center justify-center">
            
             <div className="grid grid-cols-1 gap-2 ">
               {mobile[0].image && mobile[0].image.map((item,index)=>(
                  <Image 
                  className={index == selIndex?'border-2 border-themered':'border border-themed3'}
                  style={{ "cursor":"pointer"}}
                  src={builder.image(item).width(70).height(90).url()}
                  width={70}
                  height={90}
                  alt={mobile[0].name}
                  onClick={()=>setSelIndex(index)}
                  />
               ))}
                    </div> 
                    <div className=" flex items-center justify-center  ">
                    <Image 
                        className=""
                        src={builder.image(mobile[0].image[selIndex]).width(450).height(450).url()}
                        width={450}
                        height={450}
                        alt={mobile[0].name}
                        />
                    </div>
             </div>
         
         <div className="flex-1 flex flex-col px-6 mt-10 md:mt-0 ">
            <p className="text-2xl font-extrabold text-themed4">{mobile[0].shortdesc}</p>
            <p className="text-sm font-medium text-gray-500">{mobile[0].fulldesc[0]}</p>
            <div className="flex flex-col mt-8 items-start space-y-2">
                 <p className="px-4 py-1 bg-themered rounded-lg text-white text-xl">{Math.trunc(discount)} % off</p>
                <p className="text-2xl font-bold text-gray-900 ">&#8377; {mobile[0].saleprice} <span className="text-xs font-thin text-gray-600 line-through">mrp :&#8377; {mobile[0].mrp}</span></p>
                <p className="text-xs font-bold text-gray-400">&#40; &#8377;{mobile[0].mrp - mobile[0].saleprice} off &#41;</p>
            </div>
            <div className=" flex items-start mt-8 justify-sgart gap-2">
                <button className="text-md rounded-lg font-thin bg-themered text-themel4 px-4 py-2">By Now</button>
                <button className="text-md rounded-lg font-thin bg-themeblue text-themel4 px-4 py-2 ">Add to cart</button>
            </div>
            <div className="flex items-start mt-8 justify-sgart">
                <p className="text-xl font-bold text-themed4">About the product</p>

            </div>
            <div className=" flex flex-col items-start mt-8 justify-sgart gap-2">
              {mobile[0].fulldesc && mobile[0].fulldesc.map((item,index)=>(
                   <p key={index} className="text-sm font-semibold text-gray-600">{index+1}. {item}</p>
              ))} 
            </div>
               
         </div>
      </div>
      <div className="max-w-7xl mx-auto my-8 ">
         <hr className="w-full h-1 bg-themed4 " />
         <div className="w-full text-center">
            <h1 className="text-xl font-bold text-themed4 my-5">Other related products</h1>
            <div className="w-full flex flex-col md:flex-row items-center justify-center gap-2 overflow-x-scroll">
              
               {other && other.map((item, index)=>(
                
                  <div onClick={()=>handleClick(item._id,item._type)} className="cursor-pointer"><OtherRelated other={item} /></div>
               ))}
               
            </div>
         </div>
      </div>
    </div>
  )
}
