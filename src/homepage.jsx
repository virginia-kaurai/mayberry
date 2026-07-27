import cakelogo from "./assets/homepage.jpeg";

function Homepage() {
  return (

 < >

    <div className="">
                <h2>Est. Small Batch Bakery</h2>
    </div>
    <div className="homepage grid grid-cols-1 md:grid-cols-2">
      <div><h1>Cakes that taste like memories</h1>

      <p>
        Handcrafted in small batches with seasonal fruit, French butter, and a lot of patience. Every cake is designed with you, for the moments worth remembering.
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <button>Explore The Menu</button>
        <button>Book A consultation</button>
</div>
      <div className="flex  items-center justify-center">
        <img src={cakelogo} className= "rounded-t-full w-[380px] h-[520px] object-cover "   alt="Mayberry Cakes Logo" />
      </div>
    </div>
    </>
  );
}

export default Homepage;