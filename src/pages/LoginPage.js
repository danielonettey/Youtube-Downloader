import { useGoogleLogin } from '@react-oauth/google'
import React from 'react'
import Logo from '../assets/dantubeLogo.png'

const LoginPage = () => {

    const login = useGoogleLogin( {
        onSuccess: (tokenResponse) => {
            console.log(tokenResponse);
            sessionStorage.setItem('token',tokenResponse.access_token)
        },
        onError: error => console.log(error),
        
        scope: 'https://www.googleapis.com/auth/youtube https://www.googleapis.com/auth/youtube.readonly'
    });

    return (
        <div className='w-screen h-screen flex flex-col items-center justify-center'>
            <div className='mb-20 mx-auto flex items-center'>
                <img src={Logo} />
            </div>

            <button className='rounded border border-primary py-2 px-3 text-sm text-primary font-medium' onClick={login}>
                Sign in with Google
            </button>

        </div>
    )
}

export default LoginPage