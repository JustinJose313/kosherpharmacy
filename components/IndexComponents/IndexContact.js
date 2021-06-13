import React from "react";

const IndexContact = () => {
  return (
    <div className='bg-gradient-to-br from-brand-100 to-brand-200'>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <h2 className='text-white text-3xl sm:text-4xl font-bold mb-6 text-center'>Send us your feedback</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 shadow-lg">
          <div className="relative bg-brand-100">
            <div
              className="w-full h-full opacity-80"
            >
                <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1618498082410-b4aa22193b38?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="" />
            </div>
            {/* <div className='absolute top-0 left-0 w-full h-full bg-gray-700 bg-opacity-30'>Hello</div> */}
          </div>
          <div className="p-4 md:p-8 bg-white">
            <div className="flex flex-col space-y-2">
              <label className="font-semibold" htmlFor="name">
                Your Name
              </label>
              <input
                className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="name"
                type="text"
                placeholder=""
              />
            </div>
            <div className="flex flex-col space-y-2 mt-6">
              <label className="font-semibold" htmlFor="subject">
                Subject
              </label>
              <input
                className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="subject"
                type="text"
                placeholder=""
              />
            </div>
            <div className="flex flex-col space-y-2 mt-6">
              <label className="font-semibold" htmlFor="message">
                Your Message
              </label>
              <textarea
                rows="4"
                className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="message"
                type="text"
                placeholder=""
              />
            </div>
            <div className="flex justify-end mt-4">
              <button className="px-5 py-3 w-full md:w-auto text-white bg-brand-100 hover:bg-brand-200 transition shadow-md">
                Send Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexContact;
