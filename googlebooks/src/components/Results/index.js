import React from 'react'
import BookCard from '../BookCard'

const Results = () => {

    return (
        <div>
            <div className='row justify-content-center'>
                <div className='col-8'>
                    <h1 className='float-left'>Results:</h1>
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className='col-8'>
                    <BookCard />
                </div>
            </div>
        </div>
    )
}

export default Results