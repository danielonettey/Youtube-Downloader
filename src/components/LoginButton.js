import React from 'react'

import { UserCircleIcon } from '@heroicons/react/solid';

const LoginButton = ({login}) => {
    

    return (
        <button className='rounded border border-primary py-2 px-3 text-sm text-primary font-medium flex items-center space-x-1' onClick={login}>
            <p>Sign in</p>
            <UserCircleIcon className='w-6' />
        </button>
    )
}

export default LoginButton