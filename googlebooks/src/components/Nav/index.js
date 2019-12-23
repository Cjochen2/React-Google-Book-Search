import React from 'react'

const Nav = () => {

    return (
        <nav className='navbar navbar-expand-lg'>
            <h3 className='navbar-brand'>Cujo's Book Search App</h3>
            <div className='collapse navbar-collapse'>
            <div className='navbar-nav'>
                <button className='nav-item btn btn-link'>Search</button>
                <button className='nav-item btn btn-link'>Saved</button>
            </div>
            </div>
        </nav>
    )
}

export default Nav