import React, { useContext, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import TaskModal from '../modals/TaskDetailsModal';

function TaskCard({ item, index }) {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState("view");
    const handleLogout = () => {
        setTaskSelected(item)
        handleOpenModal()
    }
    const openEditModal = ()=>{
        setModalType("edit")
        setIsModalOpen(true)
    }
    const openViewModal = ()=>{
        setModalType("view")
        setIsModalOpen(true)
    }
    const delViewModal = ()=>{
        setModalType("delete")
        setIsModalOpen(true)
    }
    return (
        <Draggable draggableId={item?._id} index={index} key={item?._id}>
            {(provided) => (
                <div    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                    ref={provided.innerRef} className="bg-sky-100 px-4 py-4  flex flex-col justify-around rounded-md select-none">
                    <h2 className="text-lg font-bold">{item?.title || "item 1"}</h2>
                    <p>{item?.description || "description-sample"}</p>
                    <p className='text-gray-500 text-sm font-semibold '>Created at: {item?.createdAt || "01/09/2024"}</p>
                    <div className="flex self-end mt-2">
                        <button onClick={delViewModal} className="bg-red-500 hover:bg-red-700 text-xs md:text-sm text-white font-semibold py-1 px-2 rounded mr-2">
                            Delete
                        </button>
                        <button onClick={openEditModal} className="bg-blue-500 hover:bg-blue-700 text-xs  md:text-sm text-white font-semibold py-1 px-2 rounded mr-2">
                            Edit
                        </button>
                        <button onClick={openViewModal} className="bg-blue-500 hover:bg-blue-700 text-xs md:text-sm text-white font-semibold py-1 px-2 rounded">
                            View Details
                        </button>
                    </div>
                    <TaskModal
                        type={modalType}
                        item={item}
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        onLogout={handleLogout}
                    />
                </div>


            )}

        </Draggable>
    );
}

export default TaskCard;