import React from "react";

const Adminpage = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
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

      {/* Navigation */}
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

        {/* ================= ORDERS ================= */}

        <section id="orders">

          <div className="mb-6">

            <h2 className="text-2xl font-semibold text-gray-800">
              Orders
            </h2>

            <p className="text-gray-500 mt-1">
              Orders received from customers.
            </p>

          </div>


          {/* Orders Table */}

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

                  <tr className="border-t">

                    <td className="px-6 py-4 font-medium">
                      #1001
                    </td>

                    <td className="px-6 py-4">
                      Jane Wanjiku
                    </td>

                    <td className="px-6 py-4">
                      Chocolate Cake
                    </td>

                    <td className="px-6 py-4">
                      Chocolate
                    </td>

                    <td className="px-6 py-4">
                      KSh 2,500
                    </td>

                    <td className="px-6 py-4">

                      <span className="px-3 py-1 rounded-full text-xs bg-yellow-100 text-yellow-700">
                        Pending
                      </span>

                    </td>

                  </tr>


                  <tr className="border-t">

                    <td className="px-6 py-4 font-medium">
                      #1002
                    </td>

                    <td className="px-6 py-4">
                      Mary Njeri
                    </td>

                    <td className="px-6 py-4">
                      Red Velvet
                    </td>

                    <td className="px-6 py-4">
                      Vanilla
                    </td>

                    <td className="px-6 py-4">
                      KSh 3,000
                    </td>

                    <td className="px-6 py-4">

                      <span className="px-3 py-1 rounded-full text-xs bg-blue-100 text-blue-700">
                        Preparing
                      </span>

                    </td>

                  </tr>


                </tbody>

              </table>

            </div>

          </div>

        </section>


        {/* ================= FLAVOURS ================= */}

        <section id="flavours" className="mt-16">

          <div className="flex justify-between items-center mb-6">

            <div>

              <h2 className="text-2xl font-semibold text-gray-800">
                Flavours
              </h2>

              <p className="text-gray-500 mt-1">
                Manage flavours displayed on the website.
              </p>

            </div>


            <button className="bg-pink-600 text-white px-5 py-3 rounded-lg hover:bg-pink-700">
              + Add Flavour
            </button>

          </div>


          {/* Flavours */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">


            {/* Chocolate */}

            <div className="bg-white rounded-xl shadow-sm p-6">

              <h3 className="text-xl font-semibold text-gray-800">
                Chocolate
              </h3>

              <p className="text-gray-500 mt-2">
                Rich and creamy chocolate flavour.
              </p>

              <div className="flex gap-3 mt-6">

                <button className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                  Edit
                </button>

                <button className="px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100">
                  Delete
                </button>

              </div>

            </div>


            {/* Vanilla */}

            <div className="bg-white rounded-xl shadow-sm p-6">

              <h3 className="text-xl font-semibold text-gray-800">
                Vanilla
              </h3>

              <p className="text-gray-500 mt-2">
                Classic smooth vanilla flavour.
              </p>

              <div className="flex gap-3 mt-6">

                <button className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                  Edit
                </button>

                <button className="px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100">
                  Delete
                </button>

              </div>

            </div>


            {/* Strawberry */}

            <div className="bg-white rounded-xl shadow-sm p-6">

              <h3 className="text-xl font-semibold text-gray-800">
                Strawberry
              </h3>

              <p className="text-gray-500 mt-2">
                Fresh and fruity strawberry flavour.
              </p>

              <div className="flex gap-3 mt-6">

                <button className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                  Edit
                </button>

                <button className="px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100">
                  Delete
                </button>

              </div>

            </div>

          </div>


          {/* Add Flavour */}

          <div className="bg-white rounded-xl shadow-sm p-6 mt-8 max-w-xl">

            <h3 className="text-xl font-semibold text-gray-800 mb-5">
              Add Flavour
            </h3>


            <form>

              {/* Name */}

              <div className="mb-5">

                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Flavour Name
                </label>

                <input
                  type="text"
                  placeholder="e.g. Strawberry"
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
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-pink-500"
                ></textarea>

              </div>


              {/* Image */}

              <div className="mb-6">

                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Flavour Image
                </label>

                <input
                  type="file"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3"
                />

              </div>


              <button
                type="submit"
                className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700"
              >
                Save Flavour
              </button>

            </form>

          </div>

        </section>

      </main>

    </div>
  );
};

export default Adminpage;