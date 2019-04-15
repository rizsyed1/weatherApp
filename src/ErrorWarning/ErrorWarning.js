import React from 'react';
import './ErrorWarning.css'

function ErrorWarning ({error}) {
    if (error){
        return(
            <div className='error'>Please enter a valid location name</div>
        )
    } else {
        return ''
    }

}

export default ErrorWarning