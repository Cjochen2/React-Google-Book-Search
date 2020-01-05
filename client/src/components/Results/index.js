import React from 'react'
import BookCard from '../BookCard'


const Results = ({ data, pageCheck }) => {



    return (
        <div>
            <div className='row justify-content-center'>
                <div className='col-8'>
                    {data.map((item, index) => <BookCard book={item} key={index + 1} pageCheck={pageCheck}/>)}
                </div>
            </div>
        </div>
    )
}

export default Results