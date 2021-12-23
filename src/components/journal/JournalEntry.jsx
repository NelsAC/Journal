import moment from "moment";
import { useDispatch } from "react-redux";
import { activeNote } from "../../actions/notes";

const JournalEntry = ({ id, date, title, body, url}) => {

    const dispatch = useDispatch();

    const noteDate = moment(date);

    const handleClick = () =>{
        dispatch( activeNote( id, {
            date, title, body, url
        }) );
    }

    return (
        <div 
            className="bg-gray-400 mb-5 rounded-lg overflow-hidden flex h-20 cursor-pointer" 
            onClick={ handleClick }
        >
            {
                url && (
                    <div 
                        className="w-28 h-28"
                        style={{
                            backgroundSize: 'cover',
                            backgroundImage: `url(${ url })`
                        }}
                    >   
                    </div>
                )
            }

            <div className="ml-2">
                <p className="text-sm font-bold">
                    { title }
                </p>
                <p className="text-sm">
                    { body }
                </p>
            </div>

            <div className="mr-1 flex items-center justify-center flex-col text-sm font-bold text-gray-800">
                <span>
                    { noteDate.format('dddd') }
                </span>
                <h4>
                    { noteDate.format('Do') }
                </h4>
            </div>
        </div>
    )
}

export default JournalEntry
