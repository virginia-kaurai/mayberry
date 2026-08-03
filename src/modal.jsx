
const Modal = ({ open , onClose}) => {
    if(!open) return null;

return(


<div className="fixed inset-0 bg-rose/50 flex items-center justify-center">

   
    <div className="bg-white rounded-xl shadow-xl w-full max-w-md max-h-[90vh]  overflow-y-auto p-6">
    <form>
        <label>Cake Name</label>
        <input type="text" className="border border-rose-300 rounded-md p-2 mb-4 w-full" placeholder="chocolate cake" />
        <label>quantity</label>
        <input type="number" className="border border-rose-300 rounded-md p-2 mb-4 w-full" placeholder="1" />
        <label>special instructions</label>
        <input type="text" className="border border-rose-300 rounded-md p-2 mb-4 w-full" placeholder="Happy birthday Brian"/>
        <label>Delivery Date</label>
        <input type="date" className="border border-rose-300 rounded-md p-2 mb-4 w-full" placeholder="YYYY-MM-DD"/>
        <label>Delivery Time</label>
        <input type="time" className="border border-rose-300 rounded-md p-2 mb-4 w-full" placeholder="HH:MM"/>
        <label>Delivery Address</label>
        <input type="text" className="border border-rose-300 rounded-md p-2 mb-4 w-full" placeholder="123 Main St"/>
        <label>Customer Name</label>
        <input type="text" className="border border-rose-300 rounded-md p-2 mb-4 w-full" placeholder="John Doe"/>
      
        <label>Customer Phone</label>
        <input type="text" className="border border-rose-300 rounded-md p-2 mb-4 w-full" placeholder="0712345678"/>
        <label>Customer Email</label>
        <input type="email" className="border border-rose-300 rounded-md p-2 mb-4 w-full" placeholder="example@example.com" />
        
      
        <button type="submit" className="bg-rose-500 text-white py-2 px-4 rounded-md gap-5">Submit</button>

<button onClick={onClose} className="bg-yellow-300 text-white py-2 px-4 rounded-md gap-5">Cancel</button>
    </form>
    </div>
</div>
)
}

export default Modal