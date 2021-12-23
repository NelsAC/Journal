import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../actions/auth";
import { startNewNote } from "../../actions/notes";
import { JournalEntries } from "./JournalEntries"

const Sidebar = () => {

    const dispatch = useDispatch();
    const { name } = useSelector(state => state.auth);

    const handleLogout = () => {
        dispatch( startLogout() ); 
    }

    const handleAddNew = () =>{
        dispatch( startNewNote() );
    }

    return (
        <aside className="bg-gray-800 md:h-screen md:w-3/12 flex flex-col">
            <div className="flex items-center justify-between p-5">
                <h3 className="text-white flex gap-2 items-center">
                    <i className="fas fa-user-secret"></i>
                    <span>{ name }</span>
                </h3>

                <button 
                    className="text-white"
                    onClick= { handleLogout }
                >
                    Logout
                </button>
            </div>

            <div 
                className="md:text-center text-gray-300 cursor-pointer hover:text-gray-500 transition duration-500 ease-in-out md:p-0 px-5 md:block flex items-center gap-2 justify-center"
                onClick={ handleAddNew }
            >
                <i className="far fa-calendar-plus md:text-7xl text-4xl"></i>
                <p className="md:mt-5">
                    New entry
                </p>
            </div>

            <JournalEntries />
        </aside>
    )
}

export default Sidebar
