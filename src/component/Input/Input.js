// File: src/components/Input/Input.js
import React from 'react';
import './Input.css';

const CustomInput = ({ type, name, value, onChange, placeholder, className }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`custom-input ${className || ''}`}
    />
  );
};

export default CustomInput;
