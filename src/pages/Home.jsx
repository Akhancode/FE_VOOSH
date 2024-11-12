import React, { useContext } from 'react'
import AddTaskButton from '../component/ui/AddTaskButton'
import SearchBar from '../component/ui/SearchBar'
import Section from '../component/ui/Section'
import Board from '../component/ui/Board'
import { MyContext } from '../component/context/modelContext'
import TaskDetailsModal from '../component/modals/TaskDetailsModal'

const Home = () => {

    const { showModal, setShowModal,
        handleOpenModal,
        handleCloseModal,taskSelected, setTaskSelected } = useContext(MyContext);
    return (
        <div className="flex px-6 flex-col flex-grow justify-start gap-2 items-start min-h-full flex-1 py-3">
            <AddTaskButton />
            <SearchBar />
            <Board />
        </div>
    )
}

export default Home
