


function Contact(){


return(
    <div className="bg-rose grid grid-cols-1 md:grid-cols-2 p-10">
              {/* Section text */}
               <div>


                    <h1 className="text-white font-playfair text-3xl p-6 ">Tell Us More About your Occasion</h1>

                    <p className="text-white text-2xl font-quick p-6">Weddings, birthdays, quiet Tuesdays — we design each cake around you. Reach out and we’ll be in touch within 24 hours.

</p>
<div>

    <h1 className="  block p-4 tracking-[0.3em] text-white">HOURS <span>8 am - 5pm</span></h1>
    <h1 className=" block  p-4 tracking-[0.3em] text-white">LOCATION <span>Ngong</span></h1>
</div>
               </div>

            {/* Section form */}

          <form className="bg-cream rounded-t-[20px] px-8 py-10">
  
  <div className="mb-6">
    <label className="block text-xs tracking-[0.3em] text-charcoal mb-6">
      NAME
    </label>

    <input
      type="text"
      className="w-full bg-transparent border-0 border-b border-rose-200 
                 focus:outline-none focus:border-rose-500 pb-3"
    />
  </div>

  <div className="mb-6">
    <label className="block text-xs tracking-[0.3em] text-charcoal mb-6">
      EMAIL
    </label>

    <input
      type="email"
      className="w-full bg-transparent border-0 border-b border-rose-200 
                 focus:outline-none focus:border-rose-500 pb-3"
    />
  </div>

  <div className="mb-6">
    <label className="block text-xs tracking-[0.3em] text-charcoal mb-6">
      OCCASION
    </label>

    <input
      type="text"
      placeholder="Wedding, birthday, just because..."
      className="w-full bg-transparent border-0 border-b border-rose-200 
                 focus:outline-none focus:border-rose-500 pb-3 
                 placeholder:text-charcoal/50"
    />
  </div>

  <div className="mb-6">
    <label className="block text-xs tracking-[0.3em] text-charcoal mb-6">
      TELL US MORE
    </label>

    <textarea
      className="w-full bg-transparent border-0 border-b border-rose-200 
                 focus:outline-none focus:border-rose-500 resize-none"
      rows="4"
    />
  </div>

  <button className="bg-rose-300 rounded-full w-40 h-10">Send Enquiry</button>

</form>
    </div>
)
}
export default Contact