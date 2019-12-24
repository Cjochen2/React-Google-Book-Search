import React, { useState } from 'react'
import axios from 'axios'


const SearchBar = ({test}) => {
    const [searchTerm, setSearchTerm] = useState('')
    const [results, setResults] = useState('')

    const updateSearchTerm = e => {

        setSearchTerm(e.target.value)
    }

    const query = e => {
        e.preventDefault()

        axios.get('https://www.googleapis.com/books/v1/volumes?q=' + searchTerm)
            .then((response) => {
                setResults(response.data);
                setSearchTerm('');
                test('true')
            })

    }

    return (
        <div className='row justify-content-center'>
            <div className='col-8'>
                <h3 className='float-left mb-3'>Book Search:</h3>
                <form onSubmit={query}>
                    <input className='form-control' type='text' value={searchTerm} placeholder='Search for a Book by Author or Title' onChange={updateSearchTerm}></input>
                    <button className='float-right mt-3'>Search</button>
                </form>
            </div>
        </div>
    )
}

export default SearchBar