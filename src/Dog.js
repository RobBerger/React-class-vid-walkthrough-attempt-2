import React from 'react';

function Dog({ data }) {
    return (
        <div>
            <img src={data.img_url} alt={data.name} width="300"></img>
            <h2>{data.name}</h2>
            <p>{data.description}</p>
        </div>
    )
}

export default Dog;