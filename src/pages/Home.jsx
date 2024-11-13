import React, { useContext, useEffect } from 'react'
import AddTaskButton from '../component/ui/AddTaskButton'
import SearchBar from '../component/ui/SearchBar'
import Section from '../component/ui/Section'
import Board from '../component/ui/Board'
import { MyContext } from '../component/context/modelContext'
import TaskDetailsModal from '../component/modals/TaskDetailsModal'
import { getUser } from '../api/api'

const Home = () => {

    const { user, setUser } = useContext(MyContext);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = await getUser()
                setUser(userData)
            } catch (error) {
                console.error("Error fetching board data", error);
            }
        };
        fetchData()
    }, [])

    return (
        <div className="flex px-6 flex-col flex-grow justify-start gap-2 items-start min-h-full flex-1 py-3">
            <AddTaskButton />
            <SearchBar />
            <Board />
        </div>
    )
}

export default Home
