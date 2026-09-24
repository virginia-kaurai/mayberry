import { useState } from "react";
import {useNavigate} from "react-router-dom"
 
const Modal = ({ open , onClose}) => {
    

    const [cakename,setCakename] = useState("");
    const [quantity,setQuantity] = useState("");
    const [specialinstructions,setSpecialinstructions] = useState("");
    const [deliverydate,setDeliverydate] = useState("");
    const [deliverytime,setDeliverytime] = useState("");
    const [deliveryaddress,setDeliveryaddress] = useState("");
    const [customername,setCustomername] = useState("");
    const [customerphone,setCustomerphone] = useState("");
    const [customeremail,setCustomeremail] = useState("");
    const navigate = useNavigate();

    if(!open) return null;

 
const handleSubmit  =(e)=>{
  e.preventDefault();
  fetch("http://127.0.0.1:8000/api2/orderslist/",{
    method:"POST",
    headers:{
        'Content-Type':'application/json',
    },
    body: JSON.stringify({

        cakename,quantity,specialinstructions,deliverydate,deliveryaddress,deliverytime,customername,customerphone,customeremail
    })
  })
  .then((response)=>{
     if(!response.ok){

        throw new Error("failed to create an order");
     }
     navigate("/")
  })
 .catch(error =>(console.log(error)))
    }

return(
  

<div className="fixed inset-0 bg-rose/50 flex items-center justify-center">

   
    <div className="bg-white rounded-xl shadow-xl w-full max-w-md max-h-[90vh]  overflow-y-auto p-6">
    <form onSubmit={handleSubmit}>
        <label>Cake Name</label>
        <input type="text" className="border border-rose-300 rounded-md p-2 mb-4 w-full" placeholder="chocolate cake" value={cakename} onChange={ (e)=>setCakename(e.target.value)}/>
        <label>quantity</label>
        <input type="number" className="border border-rose-300 rounded-md p-2 mb-4 w-full" placeholder="1" value={quantity} onChange={ (e)=>setQuantity(e.target.value)}/>
        <label>special instructions</label>
        <input type="text" className="border border-rose-300 rounded-md p-2 mb-4 w-full" placeholder="Happy birthday Brian" value={specialinstructions} onChange={ (e)=>setSpecialinstructions(e.target.value)}/>
        <label>Delivery Date</label>
        <input type="date" className="border border-rose-300 rounded-md p-2 mb-4 w-full" placeholder="YYYY-MM-DD" value={deliverydate} onChange={ (e)=>setDeliverydate(e.target.value)}/>
        <label>Delivery Time</label>
        <input type="time" className="border border-rose-300 rounded-md p-2 mb-4 w-full" placeholder="HH:MM" value={deliveytime} onChange={ (e)=>setDeliverytime(e.target.value)}/>
        <label>Delivery Address</label>
        <input type="text" className="border border-rose-300 rounded-md p-2 mb-4 w-full" placeholder="123 Main St" value={deliveryaddress} onChange={ (e)=>setDeliveryaddress(e.target.value)}/>
        <label>Customer Name</label>
        <input type="text" className="border border-rose-300 rounded-md p-2 mb-4 w-full" placeholder="John Doe" value={customername} onChange={ (e)=>setCustomername(e.target.value)}/>
      
        <label>Customer Phone</label>
        <input type="text" className="border border-rose-300 rounded-md p-2 mb-4 w-full" placeholder="0712345678" value={customerphone} onChange={ (e)=>setCustomerphone(e.target.value)}/>
        <label>Customer Email</label>
        <input type="email" className="border border-rose-300 rounded-md p-2 mb-4 w-full" placeholder="example@example.com"  value={customeremail} onChange={ (e)=>setCustomeremail(e.target.value)}/>
        
      
        <button type="submit" className="bg-rose-500 text-white py-2 px-4 rounded-md gap-5">Submit</button>

<button onClick={onClose} className="bg-yellow-300 text-white py-2 px-4 rounded-md gap-5">Cancel</button>
    </form>
    </div>
</div>
)
}

export default Modal