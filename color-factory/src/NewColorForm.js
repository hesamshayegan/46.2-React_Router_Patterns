import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewColorForm = ({ addColor, colors }) => {

    const INITIAL_STATE = { name: "" };
    const [formData, setFormData] = useState(INITIAL_STATE);

    //  The useNavigate hook provides a function that allows you to 
    //   programmatically navigate to different routes in your application.
    const navigate = useNavigate();


    const handleSubmit = evt => {
        evt.preventDefault();
        addColor(formData.name);
        setFormData(INITIAL_STATE);
        console.log(colors)
        // It means that the user is requesting to navigate back to the previous location
        //  in the application's historyis equivalent to clicking the browser's back button. 
        navigate(-1);
    };



    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    };



    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Type a Color Name:</label>
            <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />
            <button>Add a new Color!</button>
        </form>
    );
};

export default NewColorForm;