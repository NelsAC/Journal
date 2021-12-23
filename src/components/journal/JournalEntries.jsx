import React from 'react'
import { useSelector } from 'react-redux';
import JournalEntry from './JournalEntry';

export const JournalEntries = () => {
    const { notes } = useSelector(state => state.notes);

    return (
        <div className="md:w-11/12 mx-auto mt-8 overflow-y-scroll scroll-appearance h-auto block max-h-64 md:h-full">
            {
                notes.map(note => (
                    <JournalEntry 
                        key={ note.id } 
                        { ...note } 
                    />
                ))
            }
        </div>
    )
}
