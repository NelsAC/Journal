import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { startSaveNote, startUpLoading } from "../../actions/notes";

const NotesAppBar = () => {

    const dispatch = useDispatch();
    
    const { active: note } = useSelector( state => state.notes );

    const handleSave = () =>{
        dispatch( startSaveNote( note ) );
    }

    const handleAddImage = () =>{ 
        document.querySelector('#fileSelector').click();
    }

    const handleSelectImage = ({ target:{files} }) =>{
        const file = files[0];
        if(file){
            dispatch( startUpLoading( file ) );
        }
        document.querySelector('#fileSelector').value = '';
    }

    return (
        <div className="flex justify-between bg-black p-5"> 
            <span className="font-semibold text-white">{ moment().format('MMMM Do YYYY') }</span>
            <input 
                type="file" 
                name="file" 
                id="fileSelector" 
                onChange={ handleSelectImage }
                style={{ display: 'none'}}
            />
            <div className="flex gap-5">
                <button 
                    className="text-green-400"
                    onClick={ handleAddImage }
                >
                    <i className="far fa-image mr-1"></i>
                    Picture
                </button>
                <div className="w-px bg-white"></div>
                <button 
                    className="text-green-400"
                    onClick={ handleSave }
                >
                    <i className="far fa-save mr-1"></i>
                    Save
                </button>
            </div>
        </div>
    )
}

export default NotesAppBar
