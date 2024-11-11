import React from 'react'
import TaskCard from './TaskCard'

const Section = ({ title }) => {
    return (
        <div id="xyz" className="flex snap-center flex-col min-w-[85vw] sticky  flex-grow  shadow-md p-3 rounded-md md:min-w-[30%]">
            <div className='bg-blue-500 p-2 mb-3 rounded-md text-white font-semibold'>
                {title}
            </div>
            <TaskCard/>
        </div>
    )
}

export default Section