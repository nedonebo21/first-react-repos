import React from 'react';

export const  Post = () => {
    const sum = (a:number, b:number) => {
        return a + b;
    }

    return (
        <div>
            <h2>Post</h2>
            <button onClick={()=> sum(5, 5)}>sum</button>
        </div>
    )
}