import React from 'react';
import './SubmitButton.css';

function SubmitButton({handleSubmit}) {
    return (
        <input className='submitButton' 
            type='submit' 
            value='submit' 
            onClick={handleSubmit} 
        />
    )  
}

export default SubmitButton;
