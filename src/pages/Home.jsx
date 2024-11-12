import React from 'react'
import AddTaskButton from '../component/ui/AddTaskButton'
import SearchBar from '../component/ui/SearchBar'
import Section from '../component/ui/Section'
import Board from '../component/ui/Board'

const Home = () => {
    return (
        <div className="flex px-6 flex-col flex-grow justify-start gap-2 items-start min-h-full flex-1 ">
            <h2 className="text-2xl font-semibold">Welcome to the Home Page!</h2>
            <AddTaskButton />
            <SearchBar />
            <Board/>
        </div>
    )
}

export default Home
