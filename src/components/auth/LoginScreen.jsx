import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

const LoginScreen = () => {

    const dispatch = useDispatch();
    const { loading } = useSelector( state => state.ui);

    const [ values, handleInputChange ] = useForm({
        email: '',
        password: ''
    })

    const { email, password } = values;

    const handleLogin = (e) =>{
        e.preventDefault();
        dispatch( startLoginEmailPassword( email, password ) );
    }

    const handleGoogleLogin = () =>{
        dispatch( startGoogleLogin() );
    }

    return (
        <>
            <h3 className="text-white md:text-center text-2xl font-bold my-5">Login</h3>
            <form onSubmit= { handleLogin } className="px-3 pt-8 pb-8">
                <input 
                    type="mail" 
                    placeholder="Email"
                    name="email"
                    className="text-gray-300 bg-transparent border-b border-green-200 block w-full md:my-5 my-6 mb-12 text-xl focus:outline-none focus:border-green-400 transition duration-500 ease-in-out"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    name="password"
                    className="text-gray-300 bg-transparent border-b border-green-200 block w-full md:my-5 my-6 mb-12 text-xl focus:outline-none focus:border-green-400 transition duration-500 ease-in-out"
                    value={ password }
                    onChange={ handleInputChange }
                />

                <button 
                    type="submit"
                    className="w-full rounded bg-green-400 md:py-1 py-3 mb-16 mt-3 font-bold hover:bg-green-500 transition duration-300 ease-in-out"
                    disabled={ loading }
                >
                    Login
                </button>

                <div className="pt-5 border-t border-gray-600 text-center">
                    <p className="text-white mt-8">Login with social networks</p>

                    <div 
                        className="flex items-center justify-center my-4 gap-2 rounded bg-blue-600 md:py-1 py-3 cursor-pointer hover:bg-blue-700 transition duration-300 ease-in-out"
                        onClick={ handleGoogleLogin }
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                <Link 
                    to="/auth/register"
                    className="text-white md:mt-16 md:block hover:underline"
                >
                    Create new account
                </Link>
            </form>
        </>
    )
}

export default LoginScreen
