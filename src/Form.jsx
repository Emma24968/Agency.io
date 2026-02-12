import React from 'react'

export default function Form() {
  return (

    <form className="max-w-xl mx-auto p-6 space-y-4">

      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <textarea
        placeholder="Your Message"
        rows="5"
        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
      ></textarea>
      <button
        type="submit"
        className=" bg-blue-700 text-white p-3 rounded-lg hover:opacity-90 transition"
      >
        Submit
      </button>
    </form>
  )
}
