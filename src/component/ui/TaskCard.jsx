import React from 'react';

function TaskCard({ task }) {
    return (
        <div className="bg-sky-100 px-4 py-4 min-h-[30%] flex flex-col justify-around rounded-md select-none">
            <h2 className="text-lg font-bold">{task?.title||"Task 1"}</h2>
            <p>{task?.description||"description-sample"}</p>
            <p className='text-gray-500 text-sm font-semibold '>Created at: {task?.createdAt||"01/09/2024"}</p>
            <div className="flex self-end mt-2">
                <button className="bg-red-500 hover:bg-red-700 text-xs md:text-sm text-white font-semibold py-1 px-2 rounded mr-2">
                    Delete
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-xs  md:text-sm text-white font-semibold py-1 px-2 rounded mr-2">
                    Edit
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-xs md:text-sm text-white font-semibold py-1 px-2 rounded">
                    View Details
                </button>
            </div>
        </div>
    );
}

export default TaskCard;