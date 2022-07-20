import React from 'react';

export default function Button({ className, text, setCounter, counter }) {
    return (
        <button className={className}
            onClick={() => {
                text === '+' ? setCounter(counter + 1) : setCounter(counter - 1);
                // if (text === '+') {
                //     setCounter(counter + 1);
                // } else {
                //     setCounter(counter - 1);
                // }
            }}
        >
            {text}
        </button>
    );
}

