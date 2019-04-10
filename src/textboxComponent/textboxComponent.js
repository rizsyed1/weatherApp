import React from 'react';

function Textbox({city, handleChange}){
    return(
        <input type='text' value={city} placeholder='city' onChange={handleChange}/>
    )
}

export default Textbox