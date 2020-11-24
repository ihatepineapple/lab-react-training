import React from 'react';

const BoxColor = (props) => {
    return (
        <div className="box-container" style={{ backgroundColor: `rgb(${props.r},${props.g},${props.b}) ` }}>
            <p>rgb = ({props.r},{props.g},{props.b})</p>
        </div>
    )
}

export default BoxColor;