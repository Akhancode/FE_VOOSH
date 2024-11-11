import React from 'react'
import AddTaskButton from '../component/ui/AddTaskButton'
import SearchBar from '../component/ui/SearchBar'
import Section from '../component/ui/Section'

const Home = () => {
    return (
        <div className="flex px-6 flex-col flex-grow justify-start gap-2 items-start min-h-full flex-1">
            <h2 className="text-2xl font-semibold">Welcome to the Home Page!</h2>
            <AddTaskButton />
            <SearchBar />
            <div id="xyz" className="snap-x py-3 flex md:flex-row md:w-full gap-3 overflow-scroll max-w-[100vw] md:overflow-hidden flex-grow min-h-96">
                <Section title="TODO"/>
                <Section title="IN PROGRESS"/>
                <Section title="DONE"/>
            </div>
        </div>
    )
}

export default Home
