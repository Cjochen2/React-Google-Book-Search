import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {

    return (
        <nav className='navbar navbar-expand-lg'>
            <h3 className='navbar-brand'>Cujo's Book Search App</h3>
            <div className='collapse navbar-collapse'>
                <div className='navbar-nav'>
                    <div className='p-2'>
                        <Link to='/'>Search</Link>
                    </div>
                    <div className='p-2'>
                        <Link to='/saved'>Saved</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav