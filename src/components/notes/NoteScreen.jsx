import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeNote, startDeleteNote } from '../../actions/notes';
import { useForm } from "../../hooks/useForm";
import NotesAppBar from "./NotesAppBar";

const NoteScreen = () => {

    const dispatch = useDispatch();

    const { active:note } = useSelector(state => state.notes);

    const [ values, handleInputChange, reset ] = useForm( note );

    const { title, body, id} = values;

    const activeId = useRef( note.id );
    
    useEffect(() => {

        if(note.id !== activeId.current) {
            reset( note );
            activeId.current = note.id;
        }
        
    }, [note, reset]);

    useEffect(() => {

        dispatch( activeNote( values.id, { ...values } ) );
    
    }, [values, dispatch])

    const handleDelete = () =>{

        dispatch( startDeleteNote( id ) );
    }

    return ( 
        <div className="flex flex-col h-full relative">
            <button 
                className="bg-red-400 h-12 absolute right-0 inset-y-1/2 px-2 font-semibold rounded-full hover:bg-red-600 transition duration-500"
                onClick={ handleDelete }
            >
                <i className="far fa-save mr-1"></i>
                Delete
            </button>
            <NotesAppBar />

            <div className="flex flex-col flex-auto">
                <input 
                    type="text" 
                    placeholder="Some awesome title" 
                    className="bg-transparent focus:outline-none p-5 font-bold text-2xl" 
                    autoComplete="off"
                    name="title"
                    value={ title }
                    onChange={ handleInputChange }
                />
                <textarea 
                    placeholder="What happened today"
                    className="bg-transparent focus:outline-none p-5 text-xl resize-none flex-auto"
                    name="body"
                    value={ body }
                    onChange={ handleInputChange }
                >
                </textarea>
                {
                    note.url && (
                        <div className="p-5">
                            <img 
                                src={ note.url }
                                alt="imagen"
                                className="h-40 shadow-lg rounded"
                            />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default NoteScreen;