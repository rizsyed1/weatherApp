import React from 'react';
import './submitComponent.css';

function SubmitComponent({handleSubmit}) {
    return (
        <input className='submitBox' type='submit' value='submit' onClick={handleSubmit} />
    )  
}

export default SubmitComponent;
