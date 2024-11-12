import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

function TaskCard({ item,index }) {
    return (
        <Draggable draggableId={item.id} index={index} key={item.id}>
            {(provided) => (
                <div    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                    ref={provided.innerRef} className="bg-sky-100 px-4 py-4  flex flex-col justify-around rounded-md select-none">
                    <h2 className="text-lg font-bold">{item?.title || "item 1"}</h2>
                    <p>{item?.description || "description-sample"}</p>
                    <p className='text-gray-500 text-sm font-semibold '>Created at: {item?.createdAt || "01/09/2024"}</p>
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

            )}
        </Draggable>
    );
}

export default TaskCard;