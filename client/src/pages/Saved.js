import React, {useState, useEffect} from 'react'
import API from '../utils/API'


const SearchPage = () => {
    // const [savedBooks, setSavedBooks] = useState([])

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
        <div className='search'>
         <div>Search Page</div>
        </div>
    )
}

export default SearchPage