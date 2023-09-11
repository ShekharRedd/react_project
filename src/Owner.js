import React, { useState } from 'react';

const Owner = () => {
  const [formData, setFormData] = useState({
    veg: {
      serialNumber: '',
      name: '',
      price: '',
    },
    nonVeg: {
      serialNumber: '',
      name: '',
      price: '',
    },
  });

  const handleChange = (category, field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [category]: {
        ...prevData[category],
        [field]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the submission of the form data here.
    // For example, you can send it to a server or update the state.
    console.log('Form Data:', formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Veg Item</h2>
        <label>
          Serial Number:
          <input
            type="text"
            value={formData.veg.serialNumber}
            onChange={(e) => handleChange('veg', 'serialNumber', e.target.value)}
          />
        </label>
        <label>
          Name:
          <input
            type="text"
            value={formData.veg.name}
            onChange={(e) => handleChange('veg', 'name', e.target.value)}
          />
        </label>
        <label>
          Price:
          <input
            type="text"
            value={formData.veg.price}
            onChange={(e) => handleChange('veg', 'price', e.target.value)}
          />
        </label>

        <h2>Non-Veg Item</h2>
        <label>
          Serial Number:
          <input
            type="text"
            value={formData.nonVeg.serialNumber}
            onChange={(e) => handleChange('nonVeg', 'serialNumber', e.target.value)}
          />
        </label>
        <label>
          Name:
          <input
            type="text"
            value={formData.nonVeg.name}
            onChange={(e) => handleChange('nonVeg', 'name', e.target.value)}
          />
        </label>
        <label>
          Price:
          <input
            type="text"
            value={formData.nonVeg.price}
            onChange={(e) => handleChange('nonVeg', 'price', e.target.value)}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Owner;
