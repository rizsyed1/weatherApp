import React from 'react';

function SubmitComponent({handleSubmit}) {
    return (
        <input type='submit' value='submit' onClick={handleSubmit} />
    )  
}

export default SubmitComponent;
