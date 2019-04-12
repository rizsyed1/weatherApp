import React from 'react';
import './textboxComponent.css'

function Textbox({location, handleChange}){
    return(
        <input className='textBox' type='text' value={location} placeholder='Search for location' onChange={handleChange}/>
    )
}

export default Textbox