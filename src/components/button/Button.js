import React from 'react';

export default function Button({ className, text, setCounter, counter }) {
    return (
        <button className={className}
            onClick={() => {
                if (text === '+') {
                    setCounter(counter + 1);
                } else {
                    setCounter(counter - 1);
                }
            }}
        >
            {text}
        </button>
    );
}

