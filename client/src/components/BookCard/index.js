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

    const renderAuthors = () => {

        if (bookInfo.authors) {

            switch (bookInfo.authors.length) {

                case 2:
                    return bookInfo.authors[0] + " and " + bookInfo.authors[1];

                case 3:
                    return bookInfo.authors[0] + ", " + bookInfo.authors[1] + ", and " + bookInfo.authors[2];

                default:
                    return bookInfo.authors
            }
        } else {
            return "Unable to locate Author's Information"
        }
    }

    return (

        <div className='bookCard container mt-3 mb-5'>

            <Modal show={show} onHide={() => pageCheck ? updateSavedPage() : setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{pageCheck ? "Book Deleted!" : "Book Saved!"}</Modal.Title>
                </Modal.Header>

                <Modal.Body><strong>{bookInfo.title}</strong> has been {pageCheck ? "deleted!" : "saved!"}</Modal.Body>

            </Modal>


            <div className='row'>
                <div className="col-sm-8" >
                    <h3 className='title text-left pl-4 pt-3'>{bookInfo.title}</h3>
                    <h5 className='author text-left pl-4 mb-3'>{bookInfo.authors ? 'Written By:' : null} {renderAuthors()}</h5>
                </div>
                <View
                    href={bookInfo.infoLink}
                />
                {pageCheck ? <Delete remove={deleteBook} id={book.id} /> : <Save save={saveBook} book={book} />}
            </div>
            
            <div className='row'>
                <div className='col-lg-4 my-auto'>
                    <img src={bookImage} alt={bookInfo.title} className="img-fluid img-thumbnail mb-3" />
                </div>
                <div className='description col-lg-8 p-3'>
                    {bookInfo.description ? bookInfo.description : <h2>No Description to display</h2>}
                </div>
            </div>
        </div>
    )
}

export default BookCard