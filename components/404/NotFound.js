import React from 'react'

const NotFound = () => {
    return (
        <div className="text-center ">
            <img className='w-1/2 md:w-1/2 lg:w-1/2 text-center mx-auto mt-16' src="/assets/404.png" alt="" />
            <h5 className="text-gray-900 font-extrabold">Ooops!!</h5>
            <p className="text-gray-400 font-bold my-2">THAT PAGE DOESN'T EXISTS OR IS UNAVAILABLE.</p>
            <button className="bg-brand-200 text-white font-bold  p-3 my-8 focus:outline-none  "> <a href="/">Go Back to Home</a></button>
        </div>
    )
}

export default NotFound
