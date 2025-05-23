'use client';

import { useState } from 'react';

export default function LikeButton() {
    // Add useState() to your project. It returns an array, and you can 
    // access and use those array values inside your component using array destructuring:
    // The first item in the array is the state value, which you can name 
    // anything. It's recommended to name it something descriptive:
    const [likes, setLikes] = useState(0);
    function handleClick() {
        setLikes(likes + 1);
    }
    return <button onClick={handleClick}>Like ({likes})</button>
}