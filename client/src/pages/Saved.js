import React, {useState, useEffect} from 'react'
import Results from '../components/Results'
import API from '../utils/API'


const SavedPage = () => {
    const [savedBooks, setSavedBooks] = useState([])

    useEffect(() => getSaved(), [] )

    const getSaved = () => {
        // console.log("It works like you thought")
        API.getBooks().then( res =>
            setSavedBooks(res.data)
        )
    }

    return (
        <div className='saved'>
        <div className='row justify-content-center'>
            <div className='col-8'>
                <h1 className='float-left'>Saved Books:</h1>
            </div>
        </div>
        <Results
            data={savedBooks}
            pageCheck={true}
        />
    </div>
    )
}

export default SavedPage