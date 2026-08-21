
import React, { useEffect, useState } from "react";
import axios from "axios";

const Flavours = () => {

  const [flavours, setFlavours] = useState([]);

  useEffect(() => {

    

    const fetchFlavours = () => {
    fetch("http://127.0.0.1:8000/api/flavours/")
        .then(response => response.json())
        .then(data => {console.log("API DATA:", data);
            setFlavours(data);
        })
        .catch(error => console.log(error));
}

    fetchFlavours();

  }, []);


  return (

    <section className="py-12">

      <h1 className="text-3xl font-bold text-center mb-10">
        Our Flavours
      </h1>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-black">

        {flavours.map((flavour) => (

          <div
            key={flavour.id}
            className="bg-white rounded-xl shadow overflow-hidden"
          >

            <div className="p-5">

              <h2 className="text-xl font-semibold">
                {flavour.name}
              </h2>

              <p className="text-gray-500 mt-2">
                {flavour.description}
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>

  );
};

export default Flavours;