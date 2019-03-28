import React from 'react';

function FormComponent({handleKeyDown}){
  return (
    <form>
      <input type='text' placeholder='city' onKeyDown={handleKeyDown} />
    </form>
  )
}

export default FormComponent;
