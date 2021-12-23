import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { setError, removeError } from '../../actions/ui';
import { useForm } from "../../hooks/useForm";
import validator from 'validator';
import toast from 'react-hot-toast';
import { useEffect } from 'react';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

const RegisterScreen = () => {

    const dispatch = useDispatch();
    const { msgError } = useSelector( state => state.ui );

    useEffect(() => {
        const notify = () => {
            if( msgError != null ){
                toast.error( msgError, {
                    duration: 3000
                } );
            } 
        }
        notify();
    }, [msgError])

    const [ values, handleInputChange ] = useForm({})

    const { name, email, password, password2 } = values;

    const handleRegister = (e) =>{
        e.preventDefault();
        if( isFormValid()){
            dispatch( startRegisterWithEmailPasswordName( email, password, name) );
        }
    }

    const isFormValid = () =>{
        if( name.trim().length < 3 ){
            dispatch( setError( 'name is required ') );
            return false;
        }else if( !validator.isEmail( email ) ){
            dispatch( setError( 'email is not valid ') );
            return false;
        }else if( password !== password2 || password.length < 5 ){
            dispatch( setError( 'Password should be at least 6 characters long' ) );
            return false;
        }
        dispatch( removeError() );
        return true;
    }

    return (
        <>
            <h3 className="text-white md:text-center text-2xl font-bold my-5">Register</h3>
            <form onSubmit={ handleRegister } className="px-3 pt-8">
                <input 
                    type="text" 
                    placeholder="Name"
                    name="name"
                    className="text-gray-300 bg-transparent border-b border-green-200 block w-full md:my-5 my-6 text-xl focus:outline-none focus:border-green-400 transition duration-500 ease-in-out"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />
                <input 
                    type="mail" 
                    placeholder="Email"
                    name="email"
                    className="text-gray-300 bg-transparent border-b border-green-200 block w-full md:my-5 my-6 text-xl focus:outline-none focus:border-green-400 transition duration-500 ease-in-out"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    name="password"
                    className="text-gray-300 bg-transparent border-b border-green-200 block w-full md:my-5 my-6 text-xl focus:outline-none focus:border-green-400 transition duration-500 ease-in-out"
                    value={ password }
                    onChange={ handleInputChange }
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    name="password2"
                    className="text-gray-300 bg-transparent border-b border-green-200 block w-full md:my-5 my-6 text-xl focus:outline-none focus:border-green-400 transition duration-500 ease-in-out"
                    value={ password2 }
                    onChange={ handleInputChange }
                />

                <button 
                    type="submit"
                    className="w-full rounded bg-green-400 md:py-1 py-3 mb-16 mt-3 font-bold hover:bg-green-500 transition duration-300 ease-in-out"
                >
                    Register & Login
                </button>
               
                <Link 
                    to="/auth/login"
                    className="text-white md:mt-16 md:block hover:underline"
                >
                    Already registered?
                </Link>
            </form>
        </>
    )
}

export default RegisterScreen;
