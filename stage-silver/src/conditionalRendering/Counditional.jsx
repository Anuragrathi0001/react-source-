import React from 'react';

export default function Conditional() {
    const arry = ["apple", "banana", "strawberry", "peach"];

    return (
        <div>
            {arry.length > 0 ? (
                <h1>
                    {arry.map((item, index) => (
                   <h1>{index} {item }</h1>  
                    ))}
                </h1>
            ) : null}
        </div>
    );
}
