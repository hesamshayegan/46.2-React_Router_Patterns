import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css'

const Nav = ({dogs}) => {
    const dogLinks = dogs.map((dog) => (
        <NavLink className="NavLink" key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`} >
            {dog.name}
        </NavLink>
    ))

    return (
        <nav>
            <NavLink className="NavLink" key={'all'} to={"/dogs"} >
                All
            </NavLink>
            {dogLinks}
        
        </nav>
    )
}

export default Nav;