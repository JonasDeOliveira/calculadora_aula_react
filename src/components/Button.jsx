import React from 'react';
import './button.css';

export default props => {
    return (
        <button onClick={() => props.click(props.label)}>
            {props.label}
        </button>
    )
}