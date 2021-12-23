import React from 'react'
import { useSelector } from 'react-redux';
import NoteScreen from '../notes/NoteScreen'
import { NothingSelected } from './NothingSelected'
import Sidebar from './Sidebar'

const JournalScreen = () => {

    const { active } = useSelector(state => state.notes);


    return (
        <div className="flex md:flex-row flex-col h-screen">
            <Sidebar />

            <main className="md:w-9/12 bg-gray-300 w-full h-full">
            {
                    ( active ) ?
                    (<NoteScreen />) :
                    (<NothingSelected />)
                }
            </main>
        </div>
    )
}

export default JournalScreen
