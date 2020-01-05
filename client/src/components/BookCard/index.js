import React from 'react'
import {Save, View} from '../Buttons'
import API from '../../utils/API'

const BookCard = ({ book }) => {

    let bookInfo = book.volumeInfo

    const saveBook = (data) => {
        console.log(data)
    }

    return (
        <div className='bookCard container mt-3 mb-5'>
            <div className='row'>
                <div className='title col-8 text-left pl-0'>{bookInfo.title}</div>
                <View 
                href={bookInfo.infoLink}
                />
                <Save 
                save = {saveBook}
                book = {book}
                />
            </div>
            {/* Need to generate formula for handling more than one Author */}
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