import React from 'react'; 
import './UnitButton.css';

function UnitButton({celsius, unitChange}) {
    if(celsius){
        return(
            <button type='button' onClick={unitChange}>
                To °F
            </button>
        )
    } else {
        return (
            <button type='button' onClick={unitChange}>
                To °C
            </button>
        )
    }


}

export default UnitButton;