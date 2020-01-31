import React from 'react'

export const View = ({ href }) => {

    return (
        <div className='view col-1 offset-1 pt-3'>
            <button type='button' className='btn test'>
                <a href={href} target="_blank" rel="noopener noreferrer">View</a>
            </button>
        </div>
    )

}

export const Save = ({ save, book }) => {

    return (
        <div className='save col-1 pt-3'>
            <button type='button' className='btn btn-success' onClick={() => save(book)}>Save</button>
        </div>
    )
}

export const Delete = ({ remove, id }) => {

    return (
        <div className='delete col-1 pt-3'>
            <button type='button' className='btn btn-primary' onClick={() => remove(id)}>Delete</button>
        </div>
    )
}
