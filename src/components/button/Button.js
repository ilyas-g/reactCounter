import React from 'react';

export default function Button(props) {
    console.log(props);
    return (
        <button className={props.className}
            onClick={() => {
                props.setCounter(props.counter + 1);
            }}
        >
            {props.text}
        </button>
    );
}

