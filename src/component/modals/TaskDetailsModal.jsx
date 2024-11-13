import React, { useState } from "react";
import { createTask, deleteTask, editTask } from "../../api/api";
import moment from "moment";

const TaskModal = ({ type, item, isOpen, onClose, onSubmit }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState("view");
    const [title, setTitle] = useState(item?.title);
    const [description, setDescription] = useState(item?.description);
    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === 'title') {
            setTitle(value);
        } else if (name === 'description') {
            setDescription(value);
        }
    };

    const onCreate = async (itemData) => {
        console.log(itemData)
        await createTask(itemData)
        onClose()
    }
    const onSave = async (itemId, itemData) => {
        await editTask(itemId, itemData)
        onClose()
    }
    const onDelete = async (itemId) => {
        await deleteTask(itemId)
        onClose()
    }
    if (!isOpen) return null; // Only render if modal is open
    let heading = "Task Details"
    let content = (<div className="flex flex-col h-full  justify-between">
        <div>

            <h2 className="md:text-3xl font-semibold text-gray-800">{heading}</h2>
            <ul className="md:text-xl text-gray-700 mt-3">
                <li>Title : {item?.title}</li>
                <li>Description : {item?.description}</li>
                <li>CreatedAt : {moment((item?.createdAt)).format("DD-MM-YYYY") || "01/09/2024"}</li>
            </ul>
        </div>
        <div className="mt-4 flex justify-end space-x-3 ">
            <button
                onClick={onClose}
                className="px-4 py-2 text-gray-600 bg-gray-200 rounded hover:bg-gray-300 transition"
            >
                Cancel
            </button>
        </div>
    </div>)
    let actionButton = ""
    if (type == "create") {
        content = (

            <form className="flex flex-col justify-between h-full" onSubmit={() => {
                onCreate({ title, description })
            }}>
                <div>

                    <h2 className="md:text-3xl font-semibold text-gray-800">{heading}</h2>
                    <ul className="md:text-xl text-gray-700 mt-3">
                        <li>Title <span className="text-red-500">*</span></li>
                        <input
                            type="text"
                            className="border md:w-1/2"
                            name="title"
                            value={title || ""}
                            onChange={handleChange}
                            required
                        />
                        <li>Description</li>
                        <textarea
                            type="text"
                            name="description"
                            value={description || ""}
                            onChange={handleChange}
                            className="border md:w-1/2 h-1/2"
                        />
                    </ul>
                </div>
                <div className="self-end ">

                    <button type="submit" className="mt-4 px-4 py-2 mr-2 bg-blue-500 text-white rounded">
                        Submit
                    </button>
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-gray-600 bg-gray-200 rounded hover:bg-gray-300 transition"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        )

    }
    if (type == "edit") {
        heading = "Edit Task "
        content = (
            <div className="flex flex-col h-full  justify-between">
                <div>

                    <h2 className="md:text-3xl font-semibold text-gray-800">{heading}</h2>
                    <ul className="md:text-xl text-gray-700 mt-3">
                        <li>Title</li>
                        <input type="text" className="border md:w-1/2" name="title" value={title}
                            onChange={handleChange} />
                        <li>Description</li>
                        <textarea type="text" name="description" value={description}
                            onChange={handleChange} className="border md:w-1/2 h-1/2" />
                    </ul>
                </div>
                <div className="mt-4 flex justify-end space-x-3 ">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-gray-600 bg-gray-200 rounded hover:bg-gray-300 transition"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => { onSave(item._id, { title, description }) }}
                        className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 transition"
                    >
                        Save
                    </button>
                </div>
            </div>)



    }
    if (type == "delete") {
        heading = "Are you sure , want to delete ?"
        content = (
            <div className="flex flex-col h-full  justify-between">
                <div>
                    <h2 className="md:text-3xl font-semibold text-gray-800">{heading}</h2>
                    <ul className="md:text-xl text-gray-700 mt-3">
                        <li>Title : {item?.title}</li>
                        <li>Description : {item?.description}</li>
                        <li>CreatedAt : {moment((item?.createdAt)).format("DD-MM-YYYY") || "01/09/2024"}</li>
                    </ul>
                </div>
                <div className="mt-4 flex justify-end space-x-3 ">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-gray-600 bg-gray-200 rounded hover:bg-gray-300 transition"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={() => { onDelete(item._id) }}
                        className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 transition"
                    >
                        Delete
                    </button>
                </div>

            </div>
        )


    }
    if (type == "userProfile") {
        heading = "User Profile Details"
        content = ((<div className="flex flex-col h-full  justify-between">
            <div>

                <h2 className="md:text-3xl text-xl font-semibold text-gray-800">{heading}</h2>
                <ul className="md:text-xl text-gray-700 mt-3 font-medium">
                    <li><span className="font-bold">User Name  :
                    </span> {`${item?.firstName} ${item?.lastName}`} </li>
                    <li><span className="font-bold">Email  :
                    </span> {item?.email}</li>
                    <li><span className="font-bold">Registered On :
                    </span> {moment((item?.createdAt)).format("DD-MM-YYYY") || "01/09/2024"}</li>
                </ul>
            </div>
            <div className="mt-4 flex justify-end space-x-3 ">
                <button
                    onClick={onClose}
                    className="px-4 py-2 text-gray-600 bg-gray-200 rounded hover:bg-gray-300 transition"
                >
                    Cancel
                </button>
            </div>
        </div>))


    }
    return (
        <div className="fixed inset-0  flex items-center justify-center z-50">
            {/* Backdrop */}
            <div className="fixed inset-0 bg-gray-800 opacity-50" onClick={onClose}></div>

            <div className="bg-white rounded-lg shadow-lg md:w-1/2 w-4/5 md:h-1/2 p-6 relative z-10 flex flex-col justify-between">

                {content}

            </div>
        </div>
    );
};

export default TaskModal;
