import React from 'react';
import './TextInput.css'

function TextInput({location, handleChange}){
    return(
        <input className='textInput'
         type='text' 
         value={location} 
         placeholder='Search for location' 
         onChange={handleChange}
         />
    )
}

export default TextInput