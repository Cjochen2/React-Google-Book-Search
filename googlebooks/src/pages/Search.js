import React from 'react'
import Nav from '../components/Nav'
import Jumbo from '../components/Jumbotron';
import SearchBar from '../components/SearchBar';
import Results from '../components/Results';

const SearchPage = () => {

    return (
        <div className='search'>
            <Nav />
            <Jumbo />
            <SearchBar />
            <Results />
        </div>
    )
}

export default SearchPage