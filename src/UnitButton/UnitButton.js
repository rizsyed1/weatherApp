import React from 'react'; 
import './UnitButton.css';

function UnitButton({celsius, unitChange}) {
    if(celsius){
        return(
            <button className ='unitButton' type='button' onClick={unitChange}>
                to °F
            </button>
        )
    } else {
        return (
            <button className ='unitButton' type='button' onClick={unitChange}>
                to °C
            </button>
        )
    }


}

export default UnitButton;