import React, { useEffect, useState } from "react";
import axios from "axios";

const Adminpage = () => {

  // ================= FLAVOUR STATE =================

  const [flavours, setFlavours] = useState([]);

  const [cakes, setCakes] = useState([]);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const [loading, setLoading] = useState(false);
  const [orders,setOrders]= useState([]);

 const [cakename, setCakename] = useState("");
  const [cakeimage, setCakeimage] = useState("");
  const [cakedescription, setCakedescription] = useState("");
  const [cakeprice, setCakeprice] = useState("");



  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];

    setCakeimage(selectedImage);

    console.log("Selected image:", selectedImage);
};

  const fetchOrders =() =>{

    fetch("http://127.0.0.1:8000/api2/orderslist/")
    .then(response => response.json())
    .then(data=>{console.log("api data:" ,data)
      setOrders(data);
    })
    .catch(error=>console.log(error));
  }
 useEffect(() => {

    fetchOrders();

  }, []);


  // ================= FETCH FLAVOURS =================

  const fetchFlavours = async () => {

    try {

      const response = await axios.get(
        "http://127.0.0.1:8000/api/flavours/"
      );

      setFlavours(response.data);

    } catch (error) {

      console.log(
        "Error fetching flavours:",
        error.response?.data || error.message
      );

    }

  };


  // Fetch flavours when admin page loads

  useEffect(() => {

    fetchFlavours();

  }, []);


  // ================= ADD FLAVOUR =================

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!name || !description) {

      alert("Please fill in all fields.");

      return;

    }

    setLoading(true);

    try {

      const response = await axios.post(
        "http://127.0.0.1:8000/api/flavours/",
        {
          name: name,
          description: description
        }
      );

      console.log("Created flavour:", response.data);

      // Add the new flavour immediately to the page

      setFlavours((previousFlavours) => [
        ...previousFlavours,
        response.data
      ]);

      // Clear form

      setName("");
      setDescription("");

      alert("Flavour added successfully!");

    } catch (error) {

      console.log(
        "Error adding flavour:",
        error.response?.data || error.message
      );

      alert("Failed to add flavour.");

    } finally {

      setLoading(false);

    }

  };


  //delete the flavours 

const deleteflavour = async (id) =>{

  try{
    await axios.delete(`http://127.0.0.1:8000/api/flavour/delete/${id}/`

    );

    setFlavours(flavours.filter((flavour)=>flavour.id !==id));
  }
  catch(error){
    console.error("error deleting flavour",error);
  }
};



  {/* this block of code created a container for the data and posts the cake data*/ }

  const handlecakeSubmit = async (e) => {
    e.preventDefault();

    // Check that all fields have been filled
    if (!cakename || !cakeprice || !cakedescription || !cakeimage) {
        alert("Please fill in all fields.");
        return;
    }

    setLoading(true);

    // Create FormData
    const formData = new FormData();

    formData.append("name", cakename);
    formData.append("description", cakedescription);
    formData.append("price", cakeprice);
    formData.append("image", cakeimage);

    try {
        const response = await axios.post(
            "http://127.0.0.1:8000/cakes/cakes/add/",
            formData
        );

        console.log("Cake created:", response.data);

        setCakes((previousCakes) => [
            ...previousCakes,
            response.data
        ]);

        alert("Cake added successfully!");

        // Clear the form
setCakename("");
setCakeprice("");
setCakedescription("");
setCakeimage(null);

    } catch (error) {
        console.log(
            "Error adding cake:",
            error.response?.data || error.message
        );

        alert("Failed to add cake.");

    } finally {
        setLoading(false);
    }
};


{/* deleting a cake*/ }

const deleteCake = async (id) => {
  try {
    await axios.delete(
      `http://127.0.0.1:8000/cakes/cakes/delete/${id}`
    );

    // Remove the deleted cake from the screen
    setCakes(cakes.filter((cake) => cake.id !== id));

  } catch (error) {
    console.error("Error deleting cake:", error);
  }
};
  


//button for deleting orders on the admin panel
 const DeleteOrders = async(id) => {
  try{
    await axios.delete(`http://127.0.0.1:8000/api2/orders/delete/${id}`);

    setOrders(orders.filter((order) => order.id !== id));
  }
  //remove the deleted cake from the screen

  
  catch (error) {
    console.error("Error deleting cake:", error);
  }
 }


const fetchCakes = async () => {
  try {
    const response = await axios.get(
      "http://127.0.0.1:8000/cakes/cakeslist/"
    );

    setCakes(response.data);
  } catch (error) {
    console.error("Error fetching cakes:", error);
  }
};
useEffect(() => {
  fetchCakes();
}, []);

  return (

    <div className="min-h-screen bg-gray-100">


      {/* ================= HEADER ================= */}

      <header className="bg-white border-b">

        <div className="max-w-6xl mx-auto px-6 py-5">

          <h1 className="text-2xl font-bold text-pink-600">
            Mayberry Bakery
          </h1>

          <p className="text-sm text-gray-500">
            Admin Panel
          </p>

        </div>

      </header>


      {/* ================= NAVIGATION ================= */}

      <nav className="bg-white border-b">

        <div className="max-w-6xl mx-auto px-6">

          <div className="flex gap-8">

            <a
              href="#orders"
              className="py-4 text-pink-600 font-medium border-b-2 border-pink-600"
            >
              Orders
            </a>

            <a
              href="#flavours"
              className="py-4 text-gray-500 font-medium hover:text-pink-600"
            >
              Flavours
            </a>


            <a
              href="#cakes"
              className="py-4 text-pink-600 font-medium border-b-2 border-pink-600"
            >
              Cakes
            </a>

          </div>

        </div>

      </nav>


      <main className="max-w-6xl mx-auto px-6 py-8">


        {/* ================================================= */}
        {/* ===================== ORDERS ==================== */}
        {/* ================================================= */}

        <section id="orders">

          <div className="mb-6">

            <h2 className="text-2xl font-semibold text-gray-800">
              Orders
            </h2>

            <p className="text-gray-500 mt-1">
              Orders received from customers.
            </p>

          </div>

 
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">

            <div className="overflow-x-auto">

              <table className="w-full text-left">

                <thead className="bg-gray-50 border-b border-black">

                  <tr className="text-sm text-gray-500">

                    <th className="px-6 py-4">
                      Order Number
                    </th>

                    <th className="px-6 py-4">
                      Customer Name
                    </th>

                    <th className="px-6 py-4">
                      Cake name
                    </th>

                    <th className="px-6 py-4">
                      Customer phone
                    </th>
                      <th className="px-6 py-4">
                      Quantity
                    </th>

                    <th className="px-6 py-4">
                      Total
                    </th>

                   

                  </tr>

                </thead>


                <tbody>

                  {/* Example order */}
            <tbody>
  {orders.map((order) => (
    <tr key={order.id} className="">

      <td className="px-6 py-4 font-medium">
        {order.ordernumber}
      </td>

      <td className="px-6 py-4">
        {order.customername}
      </td>

      <td className="px-6 py-4">
        {order.cakename}
      </td>

      <td className="px-6 py-4">
        {order.customerphone}
      </td>
        <td className="px-6 py-4">
        {order.quantity}
      </td>

      <td className="px-6 py-4">
         {order.total}
      </td>

      <button onClick={() => deleteOrder(order.id)}>Delete order</button>

    </tr>
  ))}
</tbody>

                </tbody>

              </table>

            </div>

          </div>  

        </section>


        {/* ================================================= */}
        {/* ==================== FLAVOURS =================== */}
        {/* ================================================= */}

        <section
          id="flavours"
          className="mt-16"
        >


          {/* Heading */}

          <div className="flex justify-between items-center mb-6">

            <div>

              <h2 className="text-2xl font-semibold text-gray-800">
                Flavours
              </h2>

              <p className="text-gray-500 mt-1">
                Manage flavours displayed on the website.
              </p>

            </div>


            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("add-flavour")
                  .scrollIntoView({
                    behavior: "smooth"
                  })
              }
              className="bg-pink-600 text-white px-5 py-3 rounded-lg hover:bg-pink-700"
            >
              + Add Flavour
            </button>

          </div>


          {/* ================= FLAVOUR CARDS ================= */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">


            {flavours.length === 0 ? (

              <p className="text-gray-500">
                No flavours have been added yet.
              </p>

            ) : (

              flavours.map((flavour) => (

                <div
                  key={flavour.id}
                  className="bg-white rounded-xl shadow-sm p-6"
                >

                  <h3 className="text-xl font-semibold text-gray-800">
                    {flavour.name}
                  </h3>

                  <p className="text-gray-500 mt-2">
                    {flavour.description}
                  </p>


                  <div className="flex gap-3 mt-6">

                    <button
                      type="button"
                      className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
                    >
                      Edit
                    </button>


                    <button
                    onClick= {() => deleteflavour((flavour.id))
    
  }
                      type="button"
                      className="px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100"
                    >
                      Delete
                    </button>

                  </div>

                </div>

              ))

            )}

          </div>


          {/* ================= ADD FLAVOUR FORM ================= */}

          <div
            id="add-flavour"
            className="bg-white rounded-xl shadow-sm p-6 mt-8 max-w-xl"
          >

            <h3 className="text-xl font-semibold text-gray-800 mb-5">
              Add Flavour
            </h3>


            <form onSubmit={handleSubmit}>


              {/* Name */}

              <div className="mb-5">

                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Flavour Name
                </label>

                <input
                  type="text"
                  placeholder="e.g. Strawberry"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-pink-500"
                />

              </div>


              {/* Description */}

              <div className="mb-5">

                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>

                <textarea
                  rows="4"
                  placeholder="Describe the flavour..."
                  value={description}
                  onChange={(e) =>
                    setDescription(e.target.value)
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-pink-500"
                ></textarea>

              </div>


              {/* Submit */}

              <button
                type="submit"
                disabled={loading}
                className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 disabled:opacity-50"
              >

                {loading
                  ? "Saving..."
                  : "Save Flavour"
                }

              </button>


            </form>

          </div>

        </section>

        <section id="#cakes" >

          <h1>Cakes</h1>

          <form onSubmit={handlecakeSubmit } className="p-6 m-8">
            <label>cake image</label>
            <input type="file"
    accept="image/*" 
                  onChange={handleImageChange
                  }


                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-pink-500"
            ></input>

            <label className="text-3xl font-bold text-gray-400">Cakename</label>
            <input type="text" placeholder="e.g. Strawberry"
                  value={cakename}
                  onChange={(e) =>
                    setCakename(e.target.value)
                  }
                  
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-pink-500"
                  ></input>

            <label className="text-3xl font-bold text-gray-400">price</label>
            <input type="number" placeholder="e.g. 3400"
                  value={cakeprice}
                  onChange={(e) =>
                    setCakeprice(e.target.value)
                  }
                  
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-pink-500"
                  ></input>

              <label className="text-3xl font-bold text-gray-400">description</label>
              <input type="text" placeholder="e.g. a cake made with vanilla essense"
                  value={cakedescription}
                  onChange={(e) =>
                    setCakedescription(e.target.value)
                  }
                  
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-pink-500"
                  ></input>

                      <button type="Submit">Save cake</button>
          </form>

          
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {cakes.map((cake) => (

            <div key={cake.id}>

                <img
                    src={`http://127.0.0.1:8000${cake.image}`}
                    alt={cake.name}
                    className="w-full h-64 object-cover rounded-lg"
                />

                <h2>
                    {cake.name}
                </h2>

                <p>
                    {cake.description}
                </p>

                <p>
                    KSh {cake.price}
                </p>

                <button onClick={() => deleteCake(cake.id)}>Delete</button>

            </div>

        ))}
        
      </div>
  
        </section>

      </main>

    </div>

  );

};

export default Adminpage;