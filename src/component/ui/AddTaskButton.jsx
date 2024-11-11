import React from 'react';

function AddTaskButton() {
  return (
    <div className="flex justify-end">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Add Task
      </button>
    </div>
  );
}

export default AddTaskButton;