import { useParams, NavLink} from "react-router-dom";



function Color({ colors }) {
    const {name} = useParams();

    const currentColor = colors.find(
        
        color => color === name
        
    );

    let colorInfo = null;
    if (currentColor) {
        colorInfo = (

            <div style={{ backgroundColor: currentColor, height: "400px", width: "400px", }}>The color is {currentColor}!
                <p> <NavLink to="/colors">Go Back</NavLink></p>
            </div>
        )
    }


    return (
        <div>

            {colorInfo ? colorInfo : "There is no such color in our store" }

        </div>
    )
}

export default Color;