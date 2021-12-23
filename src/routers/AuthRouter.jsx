import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginScreen from '../components/auth/LoginScreen';
import RegisterScreen from '../components/auth/RegisterScreen';

import journalImg from '../img/journal.png';

export const AuthRouter = () => {
    return (
        <div className="md:flex md:items-center bg-gray-800 h-screen text-center">
            <div className='md:w-2/4 relative md:h-screen md:flex items-center justify-center'>
                <h1 className="md:text-center text-green-400 md:text-5xl text-4xl font-courgette mb-8 z-10 py-8">Journal App</h1>
                <img src={journalImg} alt="journal" className='absolute top-0 hidden md:block w-96' />
            </div>
            <div className="md:w-1/3 md:border-l-4 md:border-green-400 md:rounded">   
                <Switch>
                    <Route 
                        exact
                        path="/auth/login"
                        component={ LoginScreen }
                    />
                    <Route 
                        exact
                        path="/auth/register"
                        component={ RegisterScreen }
                    />
                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </div>
    )
}
