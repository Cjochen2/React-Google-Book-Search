import React from 'react'

export const Save = () => {

    return (
        <div className='save col-2'>
            <button>Save</button>
        </div>
    )
}

export const View = ({href}) => {

    return (
        <div className='view col-2'>
            <button><a href={href} target="_blank" rel="noopener noreferrer">View</a></button>
        </div>
    )

}

// export const Delete = () => {

// }