import React from 'react';
import './SubmitButton.css';

function SubmitButton({handleSubmit}) {
    return (
        <input className='submitBox' 
        type='submit' 
        value='submit' 
        onClick={handleSubmit} 
        />
    )  
}

export default SubmitButton;
