import LOGO from "./assets/LOGO.jpeg";

function Menu() {
  return (
    <div className="bg-cream min-h-screen py-10 m-10">

      {/* Section title */}
      <div className="flex items-center justify-center gap-4 mb-10">
        <div className="w-10 border-t border-gold"></div>

        <p className="text-xs uppercase tracking-[0.4em] text-gold">
          The Menu
        </p>

        <div className="w-10 border-t border-gold"></div>
      </div>
          <div className="p-10 grid grid-cols-1 justify-center">

            <h1 className="font-playfair text-3xl text-charcoal j">Hand Made in<span className="text-rose"> Small Batches</span> </h1>
            <p className="font-quick text-xl ">A tight, seasonal menu — because doing a few things exceptionally well beats doing <br></br>many things average.</p>

          </div>
      {/* Cake cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10 ">

        {/* Card 1 */}
        <div className="shadow-sm rounded-md">
          <img
            src={LOGO}
            alt="Chocolate Cake"
            className="w-full h-70 object-cover"
          />

          <div className="p-5">
            <h1 className="text-xl font-semibold text-chocolate">
              Chocolate Cake
            </h1>

            <h2 className="text-gold mt-2">
              $30
            </h2>

            <p className="mt-2 text-chocolate">
              Buttercream, seasonal florals, sculpted sugar leaves.
            </p>
            <button className=" text-white rounded-full uppercase tracking-[0.3em] bg-rose hover:bg-gold  p-4 mt-4">View Details</button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="shadow-sm bg-white rounded-md" >
          <img
            src={LOGO}
            alt="Chocolate Cake"
            className="w-full h-70 object-cover"
          />

          <div className="p-5">
            <h1 className="text-xl font-semibold text-chocolate">
              Chocolate Cake
            </h1>

            <h2 className="text-gold mt-2">
              $30
            </h2>

            <p className="mt-2 text-chocolate">
              Buttercream, seasonal florals, sculpted sugar leaves.
            </p>

            <button className=" text-white rounded-full uppercase tracking-[0.3em] bg-rose hover:bg-gold  p-4 mt-4">View Details</button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="shadow-sm bg-white rounded-md">
          <img
            src={LOGO}
            alt="Chocolate Cake"
            className="w-full h-70 object-cover"
          />

          <div className="p-5">
            <h1 className="text-xl font-semibold text-chocolate">
              Chocolate Cake
            </h1>

            <h2 className="text-gold mt-2">
              $30
            </h2>

            <p className="mt-2 text-chocolate">
              Buttercream, seasonal florals, sculpted sugar leaves.
            </p>

            <button className=" text-white rounded-full uppercase tracking-[0.3em] bg-rose hover:bg-gold  p-4 mt-4">View Details</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Menu;