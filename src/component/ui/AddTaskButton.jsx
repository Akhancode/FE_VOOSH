import React, { useState } from 'react';
import TaskModal from '../modals/TaskDetailsModal';

function AddTaskButton() {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("view");
  const openCreateModal = ()=>{
    setModalType("create")
    setIsModalOpen(true)
}
  return (
    <div className="flex justify-end">
      <button onClick={openCreateModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Add Task
      </button>
      <TaskModal
        type={modalType}
        item={{}}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default AddTaskButton;