import React from 'react'

const BookCard = ({ book }) => {

    let bookInfo = book.volumeInfo

    return (
        <div className='bookCard container mt-3 mb-5'>
            <div className='row'>
                <div className='title col-8 text-left pl-0'>{bookInfo.title}</div>
                <div className='save col-2'>
                    <button>Save</button>
                </div>
                <div className='view col-2'>
                    <button><a href={bookInfo.infoLink} target="_blank" rel="noopener noreferrer">View</a></button>
                </div>
            </div>
            <div className='row'>
                <div className='author'>Written By: {bookInfo.authors}</div>
            </div>
            <div className='row'>
                <div className='col-4 text-center'>
                <img src={bookInfo.imageLinks.thumbnail} alt={bookInfo.title} className="img-fluid img-thumbnail" />
                </div>
                <div className='col-8'>
                    {bookInfo.description}
                </div>
            </div>
        </div>
    )
}

export default BookCard