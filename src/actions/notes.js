import toast from "react-hot-toast";
import { db } from "../firebase/firebase-config";
import fileUpLoad from "../helpers/fileUpLoad";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";

export const startNewNote = () => {
    return async ( dispatch, getState ) => {
        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const doc = await db.collection(`${ uid }/journal/notes`).add( newNote );

        dispatch( activeNote( doc.id, newNote ));
        dispatch( addNewNote( doc.id, newNote ));
    }
}

export const activeNote = ( id, note ) =>({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
});

export const addNewNote = ( id, note ) =>({
    type: types.notesAddNew,
    payload: {
        id, ...note
    }
});

export const startLoadingNotes = ( uid ) =>{
    return async( dispatch ) =>{
        const notes = await loadNotes( uid );
        dispatch( setNotes( notes ) );
    }
}

export const setNotes = ( notes ) =>({
    type: types.notesLoad,
    payload: notes
});

export const startSaveNote = ( note ) => {
    return async ( dispatch, getState ) => {
        const { uid } = getState().auth;

        if(!note.url){
            delete note.url;
        }

        const noteToFirestore = { ...note };
        delete noteToFirestore.id;

        await db.doc(`${uid}/journal/notes/${note.id}`).update( noteToFirestore );

        dispatch( refreshNote(note.id, noteToFirestore ));
        toast.success('Saved');
    }
}

export const refreshNote = ( id, note ) =>({
    type: types.notesUpdated,
    payload:{
        id, 
        note:{
            id,
            ...note
        }
    }
});

export const startUpLoading = ( file )=>{
    return async ( dispatch, getState )=>{
        const { active:activeNote } = getState().notes;

        toast.loading('please wait...');
        const fileUrl = await fileUpLoad( file );
        activeNote.url = fileUrl;
        dispatch( startSaveNote( activeNote ) );


        toast.remove();
    }
};

export const startDeleteNote = ( id ) => {
    return async ( dispatch, getState ) => {
        const { uid } = getState().auth;
        await db.doc(`${uid}/journal/notes/${id}`).delete();

        dispatch( deleteNote( id ) );
        toast.success('removed');
    }
};

export const deleteNote = ( id ) => ({
    type: types.notesDelete,
    payload: id
});

export const noteLogout = () => ({
    type: types.notesLogoutCleaning
});