import React from 'react';
import css from "./ColumnsProperties.module.css"

const ColumnsProperties = ({children, handleChange, handleSubmit, formData }) => {
  const { PzA, MxA, MyA, PzB, MxB, MyB, PzC, MxC, MyC, PzD, MxD, MyD } = formData;

  return (
    <form onSubmit={handleSubmit} className={css.container}>
   
     <p>Load case A:</p>
          
      <label>
        Pz:
        <input
          type="number"
          name="PzA"
          value={PzA}
          onChange={handleChange}
        />
      </label>
      <label>
        Mx:
        <input
          type="number"
          name="MxA"
          value={MxA}
          onChange={handleChange}
        />
      </label>
      <label>
        My:
        <input
          type="number"
          name="MyA"
          value={MyA}
          onChange={handleChange}
        />
      </label>
      
      <p>Load case B:</p>
          
      <label>
        Pz:
        <input
          type="number"
          name="PzB"
          value={PzB}
          onChange={handleChange}
        />
      </label>
      <label>
        Mx:
        <input
          type="number"
          name="MxB"
          value={MxB}
          onChange={handleChange}
        />
      </label>
      <label>
        My:
        <input
          type="number"
          name="MyB"
          value={MyB}
          onChange={handleChange}
        />
      </label>
      <p >Load case C:</p>
          
      <label>
        Pz:
        <input
          type="number"
          name="PzC"
          value={PzC}
          onChange={handleChange}
        />
      </label>
      <label>
        Mx:
        <input
          type="number"
          name="MxC"
          value={MxC}
          onChange={handleChange}
        />
      </label>
      <label>
        My:
        <input
          type="number"
          name="MyC"
          value={MyC}
          onChange={handleChange}
        />
      </label>
      <p >Load case D:</p>
          
      <label>
        Pz:
        <input
          type="number"
          name="PzD"
          value={PzD}
          onChange={handleChange}
        />
      </label>
      <label>
        Mx:
        <input
          type="number"
          name="MxD"
          value={MxD}
          onChange={handleChange}
        />
      </label>
      <label>
        My:
        <input
          type="number"
          name="MyD"
          value={MyD}
          onChange={handleChange}
        />
      </label>
       
             { children}
    </form>

  );
};

export default ColumnsProperties;