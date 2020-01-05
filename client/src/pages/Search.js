import React, { useState } from 'react'
import SearchBar from '../components/SearchBar';
import Results from '../components/Results';

const SearchPage = () => {
    const [results, setResults] = useState([])

    const updateResults = (data) => {
        setResults(data)
    }

    return (
        <div className='search'>
            <SearchBar
                results={updateResults}
            />
            <div className='row justify-content-center'>
                <div className='col-8'>
                    <h1 className='float-left'>Results:</h1>
                </div>
            </div>
            <Results
                data={results}
            />
        </div>
    )
}

export default SearchPage