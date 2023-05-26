import React  from 'react';


const FactoryCases = ({formData, handleChange}) => {
 

  return (
   
      <div > 
      <p name="LabelU1">Label U1:</p>
          
      <label>
        A:
        <input
          type="number"
          name="U1A"
          value={formData.U1A}
          onChange={handleChange}
        />
      </label>
      <label>
        B:
        <input
          type="number"
          name="U1B"
          value={formData.U1B}
          onChange={handleChange}
        />
      </label>
      <label>
        C:
        <input
          type="number"
          name="U1C"
          value={formData.U1C}
          onChange={handleChange}
        />
      </label>
      <label>
        D:
        <input
          type="number"
          name="U1D"
          value={formData.U1D}
          onChange={handleChange}
        />
      </label>
      
      <p name="LabelU2">Label U2:</p>
          
      <label>
        A:
        <input
          type="number"
          name="U2A"
          value={formData.U2A}
          onChange={handleChange}
        />
      </label>
      <label>
        B:
        <input
          type="number"
          name="U2B"
          value={formData.U2B}
          onChange={handleChange}
        />
      </label>
      <label>
        C:
        <input
          type="number"
          name="U2C"
          value={formData.U2C}
          onChange={handleChange}
        />
      </label>
      <label>
        D:
        <input
          type="number"
          name="U2D"
          value={formData.U2D}
          onChange={handleChange}
        />
      </label>
      
      <p name="LabelU3">Label U3:</p>
          
      <label>
        A:
        <input
          type="number"
          name="U3A"
          value={formData.U3A}
          onChange={handleChange}
        />
      </label>
      <label>
        B:
        <input
          type="number"
          name="U3B"
          value={formData.U3B}
          onChange={handleChange}
        />
      </label>
      <label>
        C:
        <input
          type="number"
          name="U3C"
          value={formData.U3C}
          onChange={handleChange}
        />
      </label>
      <label>
        D:
        <input
          type="number"
          name="U3D"
          value={formData.U3D}
          onChange={handleChange}
        />
      </label>
      </div>
   


  );
};

export default FactoryCases;