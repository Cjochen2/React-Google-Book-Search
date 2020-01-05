import React, {useState, useEffect} from 'react'
import Results from '../components/Results'
import API from '../utils/API'


const SearchPage = () => {
    const [savedBooks, setSavedBooks] = useState([])

    useEffect(() => {
        getSaved()
    })

    const getSaved = () => {
        // console.log("It works like you thought")
        API.getBooks().then( res =>
            console.log(res.data)
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
        />
    </div>
    )
}

export default SearchPage