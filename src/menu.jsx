
import { useEffect, useState } from "react";
import Modal from "./modal";

function Menu() {
  const [cakes, setCakes] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  // Fetch cakes from Django
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/cakes/")
      .then((response) => response.json())
      .then((data) => {
        setCakes(data);
      })
      .catch((error) => {
        console.error("Error fetching cakes:", error);
      });
  }, []);

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

      {/* Introduction */}
      <div className="p-10 grid grid-cols-1 justify-center">
        <h1 className="font-playfair text-3xl text-charcoal">
          Hand Made in
          <span className="text-rose"> Small Batches</span>
        </h1>

        <p className="font-quick text-xl">
          A tight, seasonal menu — because doing a few things exceptionally
          well beats doing many things average.
        </p>
      </div>

      {/* Cake cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10">

        {cakes.map((cake) => (
          <div key={cake.id} className="shadow-sm bg-white rounded-md">

            <img
              src={cake.image}
              alt={cake.name}
              className="w-full h-70 object-cover rounded-md"
            />

            <div className="p-5">

              <h1 className="text-xl font-semibold text-chocolate">
                {cake.name}
              </h1>

              <h2 className="text-gold mt-2">
                KSh {cake.price}
              </h2>

              <p className="mt-2 text-chocolate">
                {cake.description}
              </p>

              <button
                className="text-white rounded-full uppercase tracking-[0.3em] bg-rose hover:bg-gold p-4 mt-4"
                onClick={() => setIsOpen(true)}
              >
                Order Now
              </button>

            </div>
          </div>
        ))}

      </div>

      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
      />

    </div>
  );
}

export default Menu;

