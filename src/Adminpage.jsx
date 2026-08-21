import React, { useEffect, useState } from "react";
import axios from "axios";

const Adminpage = () => {

  // ================= FLAVOUR STATE =================

  const [flavours, setFlavours] = useState([]);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const [loading, setLoading] = useState(false);
  const [orders,setOrders]= useState([]);


  const fetchOrders =() =>{

    fetch("")
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

                <thead className="bg-gray-50">

                  <tr className="text-sm text-gray-500">

                    <th className="px-6 py-4">
                      Order
                    </th>

                    <th className="px-6 py-4">
                      Customer
                    </th>

                    <th className="px-6 py-4">
                      Cake
                    </th>

                    <th className="px-6 py-4">
                      Flavour
                    </th>

                    <th className="px-6 py-4">
                      Total
                    </th>

                    <th className="px-6 py-4">
                      Status
                    </th>

                  </tr>

                </thead>


                <tbody>

                  {/* Example order */}
            <tbody>
  {orders.map((order) => (
    <tr key={order.id} className="border-t">

      <td className="px-6 py-4 font-medium">
        {order.order_number}
      </td>

      <td className="px-6 py-4">
        {order.customer}
      </td>

      <td className="px-6 py-4">
        {order.cake}
      </td>

      <td className="px-6 py-4">
        {order.flavour}
      </td>

      <td className="px-6 py-4">
        KSh {order.total}
      </td>

      <td className="px-6 py-4">
        <span className="px-3 py-1 rounded-full text-xs bg-yellow-100 text-yellow-700">
          {order.status}
        </span>
      </td>

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

      </main>

    </div>

  );

};

export default Adminpage;