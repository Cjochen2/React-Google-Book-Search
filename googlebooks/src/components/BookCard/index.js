import React from 'react'

const BookCard = ({ book }) => {

    return (
        <div className='container'>
            <div className='row'>
                <div className='title col-8'>{book.volumeInfo.title}</div>
                <div className='save col-2'>
                    <button>Save</button>
                </div>
                <div className='view col-2'>
                    <button>View</button>
                </div>
            </div>
            <div className='row'>
                <div className='author'>{book.volumeInfo.authors}</div>
            </div>
        </div>
    )
}

export default BookCard