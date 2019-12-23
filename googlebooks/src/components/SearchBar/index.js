import React from 'react'

const SearchBar = () => {

    return (
        <div className='row justify-content-center'>
            <div className='col-8'>
                <h3 className='float-left mb-3'>Book Search:</h3>
                <input className='form-control' type='text' placeholder='Search for a Book'></input>
                <button className='float-right mt-3' type='submit'>Search</button>
            </div>
        </div>
    )
}

export default SearchBar