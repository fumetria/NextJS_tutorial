import { useState } from 'react';

function Header({ title }) {
    return <h1>{title ? title : 'Default Title'}</h1>;
}
export default function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
    // Add useState() to your project. It returns an array, and you can 
    // access and use those array values inside your component using array destructuring:
    // The first item in the array is the state value, which you can name 
    // anything. It's recommended to name it something descriptive:
    const [likes, setLikes] = useState(0);
    function handleClick() {
        setLikes(likes + 1);
    }
    return (
        <div>
            <Header title="Develop. Preview. Ship." />
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
            <button onClick={handleClick}>Like ({likes})</button>
        </div>
    );
}
