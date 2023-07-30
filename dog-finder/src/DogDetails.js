import React from 'react';

const DogDetails = ({ dog }) => {
    if(!dog) {
        return <h3> Dog not found </h3>
    }

    return (
        <div>
            <img src={dog.src} alt={dog.name} />
            <h2> {dog.name} </h2>
            <h4>Age: {dog.age} </h4>
            <ul>
                {dog.facts.map((fact, index) => (
                    <li key={index}> {fact} </li>
                ))}
            </ul>
        </div>
    )
};

export default DogDetails;