import React from 'react'
import {img} from './404.png'

const NotFound = () => {
    return (
        <div className="text-center">
            <img className='w-full object-cover' src={img} alt="" />
        </div>
    )
}

export default NotFound
