import React from 'react'

export const Save = ({ save, book }) => {

    return (
        <div className='save col-2'>
            <button onClick={() => save(book)}>Save</button>
        </div>
    )
}

export const View = ({ href }) => {

    return (
        <div className='view col-2'>
            <button>
                <a href={href} target="_blank" rel="noopener noreferrer">View</a>
            </button>
        </div>
    )

}

export const Delete = ({ remove, id }) => {

    return (
        <div className='delete col-2'>
            <button onClick={() => remove(id)}>Delete</button>
        </div>
    )
}
