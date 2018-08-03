import React from 'react';

export const Option1 = ({option, handleChange}) => {
  return (
    <section>
      <label>Option 1</label>
      {/*
        We are using a condition within checked to test if a radio is selected or not
        This is just to give us more control.
        For even more control we use the value attribute to help with our
        handleChange function.
        */}
        <input
          type="radio"
          value="option1"
          checked={option === "option1"}
          onChange={handleChange} />
      </section>
  )
};
