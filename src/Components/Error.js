import React from 'react'

function Error({ error }) {

    if (!error) return null;

    return (
        <p className="error">{error}</p>
    )
}

export default Error
