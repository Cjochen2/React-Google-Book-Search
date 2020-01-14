import React, { useState } from 'react'
import { Save, View, Delete } from '../Buttons'
import API from '../../utils/API'
import Modal from 'react-bootstrap/Modal'

const BookCard = ({ book, pageCheck, getSaved }) => {

    const [show, setShow] = useState(false)

    let bookInfo = (pageCheck) ? book : book.volumeInfo
    let bookImage = (pageCheck) ? book.image : book.volumeInfo.imageLinks.thumbnail

    const saveBook = (data) => {
        API.saveBook(data)
            .then(setShow(true))

    }

    const deleteBook = (data) => {
        API.deleteBook(data)
            .then(setShow(true))


    }

    const updateSavedPage = () => {
        setShow(false);
        getSaved();
    }



    return (

        <div className='bookCard container mt-3 mb-5'>
            <Modal show={show} onHide={() => pageCheck ? updateSavedPage() : setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{pageCheck ? "Book Deleted!" : "Book Saved!"}</Modal.Title>
                </Modal.Header>

                <Modal.Body>{bookInfo.title} by {bookInfo.authors} has been {pageCheck ? "deleted!" : "saved!"}</Modal.Body>

            </Modal>
            <div className='row'>
                <div className='title col-8 text-left pl-0'>{bookInfo.title}</div>
                <View
                    href={bookInfo.infoLink}
                />
                {pageCheck ? <Delete remove={deleteBook} id={book.id} /> : <Save save={saveBook} book={book} />}
            </div>
            {/* Need to generate formula for handling more than one Author */}
            <div className='row'>
                <div className='author'>Written By: {bookInfo.authors}</div>
            </div>
            <div className='row'>
                <div className='col-4 text-center'>
                    <img src={bookImage} alt={bookInfo.title} className="img-fluid img-thumbnail" />
                </div>
                <div className='col-8'>
                    {bookInfo.description}
                </div>
            </div>
        </div>
    )
}

export default BookCard