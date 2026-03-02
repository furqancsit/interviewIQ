import React, { useState } from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
    const [credits, setCredits] = useState(0)
    return (
        <>
            <div className=' w-full py-4 px-3'>

                <div className='flex max-w-6xl mx-auto justify-between items-center'>
                    <div>
                        <Link to="/" className='text-2xl font-bold tracking-tight text-gray-900 hover:text-black transition'>interviewIQ.<span className='text-blue-600'>AI</span></Link>
                    </div>
                    <div className='flex items-center gap-4'>
                        <h3 className='rounded-full border px-3 py-1.5 text-sm font-medium text-blue-600 border-blue-200'> {credits}:credits</h3>
                        <p className='text-sm font-medium text-gray-700 group-hover:text-black transition'>user</p>
                    </div>
                </div>

            </div>


        </>


    )
}

export default Navbar