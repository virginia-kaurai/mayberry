import cakelogo from "./assets/homepage.jpeg";

function Homepage() {
  return (

 < >

    <div className="flex  px-10 gap-4 mb-10">
        <div className="w-10 border-t border-gold"></div>

        <p className="text-xs uppercase tracking-[0.4em] text-gold">
          Est. Small Batch Bakery
        </p>

        <div className="w-10 border-t border-gold"></div>
      </div>

              
    
    <div className="homepage grid grid-cols-1 md:grid-cols-2">
      <div><h1 className ="font-playfair text-charcoal text-5xl p-6">Cakes that taste like<br></br><span className="text-rose font-garamond text-5xl"> memories</span> </h1>

      <p className="font-quick text-charcoal text-2xl p-10"> 
        Handcrafted in small batches with seasonal fruit, French butter, and a lot of patience. Every cake is designed with you, for the moments worth remembering.
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>

     <div className="grid grid-cols-2 gap-4">
  <button className="rounded-full bg-rose px-8 py-4 text-xs uppercase tracking-[0.3em] text-white">
    Explore the Menu
  </button>

  <button className="rounded-full border border-chocolate/20 px-8 py-4 text-xs uppercase tracking-[0.3em] text-chocolate">
    Book a Consultation
  </button>
</div>
</div>
      <div className="flex  items-center justify-center">
        <img src={cakelogo} className= "rounded-t-full w-[380px] h-[520px] object-cover "   alt="Mayberry Cakes Logo" />
      </div>
    </div>
    </>
  );
}

export default Homepage;