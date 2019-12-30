import React, {useState} from 'react'
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
            results = {updateResults}
            />
            <Results 
            data= {results} 
            />
        </div>
    )
}

export default SearchPage