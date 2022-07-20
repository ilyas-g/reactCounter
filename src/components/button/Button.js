import React from 'react';

export default function Button({ className, text, setCounter, counter }) {
    return (
        <button className={className}
            onClick={() => {
                // text === '+' ? setCounter(counter + 1) : setCounter(counter - 1); // Ternaire juste pour illustrer le + et -
                if (text === '+') {
                    setCounter(counter + 1);
                } else if (text === '-') {
                    setCounter(counter - 1);
                } else {
                    setCounter(0);
                }
            }}
        >
            {text}
        </button>
    );
}

