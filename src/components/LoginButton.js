import React from 'react'
import { useGoogleLogin } from '@react-oauth/google'
import { UserCircleIcon } from '@heroicons/react/solid';

const LoginButton = () => {
    const login = useGoogleLogin({
        onSuccess: (tokenResponse) => {
            console.log(tokenResponse);
            sessionStorage.setItem('token', tokenResponse.access_token)
        },
        onError: error => console.log(error),

        scope: 'https://www.googleapis.com/auth/youtube https://www.googleapis.com/auth/youtube.readonly'
    });

    return (
        <button className='rounded border border-primary py-2 px-3 text-sm text-primary font-medium flex items-center space-x-1' onClick={login}>
            <p>Sign in</p>
            <UserCircleIcon className='w-6' />
            
        </button>
    )
}

export default LoginButton