import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Color from './Color';
import ColorNav from './ColorNav';
import NewColorForm from "./NewColorForm";


function MyRoutes() {
    const [colors, setColors] = useState(['red'])

    function handleAdd(newColor) {
        setColors(prevColors => ([...prevColors, newColor]));
    }


    return (
        <div>
            <BrowserRouter>
                <Routes> 
                    <Route path='/colors/new' element={<NewColorForm addColor={handleAdd} colors={colors} />} />

                    <Route path='/colors/:name' element={<Color colors={colors} />} />

                    <Route path='/colors' element={<ColorNav colors={colors} />} />


                </Routes>
            </BrowserRouter>
        </div>
    )

}


export default MyRoutes;