import LOGO from "./assets/LOGO.jpeg";
import IMAGE1 from "./assets/IMAGE1.jpeg";
import IMAGE2 from "./assets/IMAGE2.jpeg";
import IMAGE3 from "./assets/IMAGE3.jpeg";
import { useState } from "react";
import Modal from "./modal";


function Menu() {


  const [isOpen, setIsOpen] = useState(false);
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
            src={IMAGE1}
            alt="white chocolate"
            className="w-full h-70 object-cover rounded-md"
          />

          <div className="p-5">
            <h1 className="text-xl font-semibold text-chocolate">
             white Chocolate Cake
            </h1>

            <h2 className="text-gold mt-2">
              2700
            </h2>

            <p className="mt-2 text-chocolate">
              Buttercream, seasonal florals, sculpted sugar leaves.
            </p>
            <button className=" text-white rounded-full uppercase tracking-[0.3em] bg-rose hover:bg-gold  p-4 mt-4" onClick={() => setIsOpen(true)}>Order Now</button>
            <Modal open={isOpen} onClose={() => setIsOpen(false)}></Modal>
          </div>
        </div>

        {/* Card 2 */}
        <div className="shadow-sm bg-white rounded-md" >
          <img
            src={IMAGE2}
            alt="Chocolate Cake"
            className="w-full h-70 object-cover rounded-md"
          />

          <div className="p-5">
            <h1 className="text-xl font-semibold text-chocolate">
              black chocolate
            </h1>

            <h2 className="text-gold mt-2">
              3500
            </h2>

            <p className="mt-2 text-chocolate">
              Buttercream, seasonal florals, sculpted sugar leaves.
            </p>

            <button className=" text-white rounded-full uppercase tracking-[0.3em] bg-rose hover:bg-gold  p-4 mt-4" onClick={() => setIsOpen(true)}>Order Now</button>
            <Modal open={isOpen} onClose={() => setIsOpen(false)}></Modal>
          </div>
        </div>

        {/* Card 3 */}
        <div className="shadow-sm bg-white rounded-md">
          <img
            src={IMAGE3}
            alt="Chocolate Cake"
            className="w-full h-70 object-cover rounded-md"
          />

          <div className="p-5">
            <h1 className="text-xl font-semibold text-chocolate">
            vanilla cake
            </h1>

            <h2 className="text-gold mt-2">
              2000
            </h2>

            <p className="mt-2 text-chocolate">
              Buttercream, seasonal florals, sculpted sugar leaves.
            </p>

            <button className=" text-white rounded-full uppercase tracking-[0.3em] bg-rose hover:bg-gold  p-4 mt-4" onClick={() => setIsOpen(true)}>Order Now</button>
            <Modal open={isOpen} onClose={() => setIsOpen(false)}></Modal>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Menu;