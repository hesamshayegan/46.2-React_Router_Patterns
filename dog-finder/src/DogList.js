import React from 'react';
import { Link } from 'react-router-dom';

const DogList = ({dogs}) => {
    return (
        <div>
            {dogs.map((dog) => (
                <Link key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`}>
                    <img src={dog.src} alt={dog.name} />
                    <h3> {dog.name} </h3>
                </Link>
            ))}
        </div>
    )
}

export default DogList;