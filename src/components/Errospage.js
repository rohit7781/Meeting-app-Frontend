import React from 'react'
import errorimg from '../Image/errorimg.png'

const Errospage = () => {
    return (
        <div className='container my-5 text-center'>
            <h1 className="text-center">Soory ! This Page Is not Found</h1>
            <img className='my-5' alt='https://files.muzli.space/1b3affecaf1101a9dab137a9f87da3c5.jpeg' src={errorimg} width={1000}/>
        </div>
    )
}

export default Errospage
