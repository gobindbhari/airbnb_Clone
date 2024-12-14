import React from 'react'

const Post = () => {
  return (
    <>
       <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-4">
        Family Room: Nirvana Homes | Wooden house | Farm stay
      </h1>

      {/* Images Section */}
      <div className="grid grid-cols-2 gap-4">
        {/* Large Image */}
        <div className="row-span-2">
          <img
            src="/images/main.jpg" // Replace with actual path
            alt="Main View"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        {/* Smaller Images */}
        <img
          src="/images/room1.jpg"
          alt="Room 1"
          className="w-full h-40 object-cover rounded-lg"
        />
        <img
          src="/images/room2.jpg"
          alt="Room 2"
          className="w-full h-40 object-cover rounded-lg"
        />
        <img
          src="/images/room3.jpg"
          alt="Room 3"
          className="w-full h-40 object-cover rounded-lg"
        />
        <div className="relative">
          <img
            src="/images/room4.jpg"
            alt="Room 4"
            className="w-full h-40 object-cover rounded-lg"
          />
          <button className="absolute inset-0 bg-black bg-opacity-50 text-white font-semibold flex items-center justify-center rounded-lg">
            Show all photos
          </button>
        </div>
      </div>

      {/* Description Section */}
      <div className="mt-6">
        <p className="text-lg text-gray-700">
          Private room in bed and breakfast in Pharog, India
        </p>
        <p className="text-sm text-gray-600">
          4 guests · 1 bedroom · 4 beds · 1 private bathroom
        </p>
        <a href="#" className="text-blue-600 underline mt-2 block">
          ★ 1 review
        </a>
      </div>

      {/* Host Highlights */}
      <div className="mt-6 space-y-4">
        <div className="flex items-center">
          <span className="mr-2 text-2xl">🔐</span>
          <p className="text-gray-700 font-medium">
            Self check-in
            <span className="block text-sm text-gray-500">
              Check yourself in with the lockbox.
            </span>
          </p>
        </div>
        <div className="flex items-center">
          <span className="mr-2 text-2xl">☕</span>
          <p className="text-gray-700 font-medium">
            Wake up to breakfast and coffee
            <span className="block text-sm text-gray-500">
              Included essentials make mornings extra easy.
            </span>
          </p>
        </div>
        <div className="flex items-center">
          <span className="mr-2 text-2xl">⭐</span>
          <p className="text-gray-700 font-medium">
            Exceptional Host communication
            <span className="block text-sm text-gray-500">
              Guests gave Tarana a 5-star rating for communication.
            </span>
          </p>
        </div>
      </div>

      {/* Date Picker */}
      <div className="mt-8 border p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Add dates for prices</h2>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-gray-600 mb-1">CHECK-IN</label>
            <input
              type="date"
              className="w-full border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">CHECKOUT</label>
            <input
              type="date"
              className="w-full border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-gray-600 mb-1">Guests</label>
          <select className="w-full border rounded px-2 py-1">
            <option>1 guest</option>
            <option>2 guests</option>
            <option>3 guests</option>
            <option>4 guests</option>
          </select>
        </div>
      </div>

      {/* About Section */}
      <div className="mt-6">
        <p className="text-gray-700 leading-relaxed">
          Nirvana Homes uses a 19th-Century wooden house built using “Kath Kuni”
          Architecture, an indigenous construction technique. Providing a
          panoramic view of the Himalayas, amidst apple orchards, we're located
          80km from Shimla. <br />
          With 2 king-size beds & seating space, this room is ideal for groups
          who want to stay together in comfort and enjoy colorful décor and a
          peaceful stay.
        </p>
        <button className="text-blue-600 mt-2 underline">Show more</button>
      </div>
    </div>
    </>
  )
}

export default Post
