import React from 'react'
import BookCard from '../BookCard'


const Results = ({ data }) => {



    return (
        <div>
            <div className='row justify-content-center'>
                <div className='col-8'>
                    <h1 className='float-left'>Results:</h1>
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className='col-8'>
                    {data.map((item, index) => <BookCard book={item} key={index + 1} />)}
                </div>
            </div>
        </div>
    )
}

export default Results