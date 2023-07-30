import React from "react";
import { NavLink } from "react-router-dom";

function ColorNav({ colors }) {

    return (

        <div >

            <div>Welcome to the color factory.</div>
            <NavLink to="/colors/new">Add a Color</NavLink>
            <div>

                {colors.map((color, i) => (
                    <p> <NavLink key={i} to={`/colors/${color}`}>{color}</NavLink></p>
                ))}
            </div>

        </div>



    );
}
export default ColorNav;