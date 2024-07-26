import React, { useEffect, useState } from 'react'

const Home = () => {
    const [text, setText] = useState('')
    const [copy, setCopy] = useState('')
    const [charcount, setCharcount] = useState(0)
    const [wordcount, setWordcount] = useState(0)

    const handleUpperCase = () => {
        setText(text.toUpperCase())

    }
    const handleLoverCase = () => {
        setText(text.toLowerCase())

    }
    const handleClear = () => {
        setText('')

    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text)
            .then(() => {
                setCopy('Copied!')
                setTimeout(() => { setCopy('') }, 2000);
            })
    }

    const handleCount = () => {
        setCharcount(text.length)

    }
    const calculateWordLengths = () => {

        const words = text.trim().split(/\s+/);
        const finalWords = words.filter(word => word.length > 0);
        setWordcount(finalWords.length)

    };
    const handleExtraSpace = () => {

        const newText = text.trim().replace(/\s+/g, ' ');
        setText(newText)
    }
    useEffect(() => {

        handleCount();
        calculateWordLengths();
    }, [text])

    return (

        <div className=' w-[90%] mx-auto mt-8 ' >
            <h1
                className='text-2xl text-slate-700 font-semibold'>
                Enter the text and analyze below
            </h1>
            {copy &&
                <p className=' w-40 break-words bg-gray-100 py-2 px-4 text-center border rounded text-blue-700 font-bold fixed right-5 top-20'>
                    {copy}</p>
            }
            <textarea
                className='border rounded border-green-500 focus:outline-green-500  w-full h-40 p-4 my-2 xl:w-4/5'
                name="input"
                id="input"
                value={text}
                onChange={(e) => setText(e.target.value)}
            ></textarea>
            <div className='flex  flex-wrap'>
                <button className='custom-button' onClick={handleUpperCase} >Convert to Uppercase</button>
                <button className='custom-button' onClick={handleLoverCase} >Convert to Lowercase</button>
                <button className='custom-button' onClick={handleClear} >Clear Text</button>
                <button className='custom-button' onClick={handleCopy} >Copy Text</button>
                <button className='custom-button' onClick={handleExtraSpace} >Remove Extra Spaces</button>
            </div>
            <div className='mt-4 text-slate-700'>
                <h1
                    className='text-xl font-medium '>
                    Enter Text Summary
                </h1>
                <p>
                    {wordcount} Word and {charcount} Characters
                </p>

            </div>

            <div className='text-slate-700 mt-4 '>
                <h1 className='text-xl font-medium ' >Preview</h1>
                <p className="w-full break-words">
                    {text ? text : 'Enter Some Text in above Text Area'}
                </p>

            </div>
        </div>

    )
}

export default Home
