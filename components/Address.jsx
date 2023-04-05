

export default function Address({address}) {


  return (
    <div className=" w-96 mx-auto flex items-start gap-2">
        
         <div  className="flex flex-col items-start space-y-1 cursor-pointer">
            <p className="text-xs font-bold text-themed4">{address.premises}</p>
            <p className="text-xs font-bold text-themed4">{address.street}</p>
            <p className="text-xs font-bold text-themed4">{address.area}</p>
            <p className="text-xs font-bold text-themed4">{address.landmark}</p>
            <p className="text-xs font-bold text-themed4">{address.city}</p>
            <p className="text-xs font-bold text-themed4">{address.state}</p>
            <p className="text-xs font-bold text-themed4">{address.pin}</p>
         </div>
        
    </div>
  )
}
