import React, { useEffect, useState } from 'react'

const PortofolioPage = () => {
    const welcomeText = "Welcome! My name is Daniel Nettey"
    const [welcome, setWelcome] = useState("")
    const [wordIndex, setWordIndex] = useState(1)
    const [add, setAdd] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (wordIndex <= welcomeText.length) {
                setWelcome(welcomeText.substring(0, wordIndex))
            }
        }, 100);

        if (wordIndex === 3) {
            setAdd(true)
        }

        if (wordIndex === welcomeText.length) {
            setTimeout(() => {
                setAdd(false)
            }, 5 * 100)
        }

        return () => {
            clearInterval(timer);
        }
    }, [wordIndex, add])


    useEffect(() => {
        if (wordIndex === welcomeText.length) {
            setTimeout(() => {
                setWordIndex(wordIndex - 1)
            }, 2 * 1000)
        }
        setWordIndex(add ? wordIndex + 1 : wordIndex - 1)

    }, [welcome])


    return (
        <div className='h-screen w-screen bg-black flex justify-center items-center'>
            <p className='font-medium text-5xl text-white max-w-xl text-center'>{welcome}|</p>
        </div>
    )
}

export default PortofolioPage