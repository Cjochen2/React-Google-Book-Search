import React, {useState} from 'react'
import Nav from '../components/Nav'
import Jumbo from '../components/Jumbotron';
import SearchBar from '../components/SearchBar';
import Results from '../components/Results';

const SearchPage = () => {
    const [results, setResults] = useState([])

    const updateResults = (data) => {
        setResults(data)
    }

    return (
        <div className='search'>
            <Nav />
            <Jumbo />
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