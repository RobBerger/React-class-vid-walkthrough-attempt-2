import React from 'react';

function Dog({ name, description}) {
    return (
        <div>
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    )
}

export default Dog;