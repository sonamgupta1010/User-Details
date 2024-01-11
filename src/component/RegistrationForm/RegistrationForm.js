// File: src/components/RegistrationForm/RegistrationForm.js
import React from 'react';
import useFormValidation from '../../hooks/useFormValidation';
import CustomInput from '../Input';
import CustomButton from '../Button';
import './RegistrationForm.css';

const RegistrationForm = ({ onSubmit }) => {
  const validationRules = {
    name: { required: true },
    email: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, errorMessage: 'Enter a valid email address' },
    password: { required: true, pattern: /.{6,}/, errorMessage: 'Password must be at least 6 characters long' },
  };

  const { formData, errors, handleInputChange, validateForm,resetForm } = useFormValidation(validationRules);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
      resetForm();
    }
  };

  

  return (
    <div className="registration-form">
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <CustomInput
          type="text"
          name="name"
          value={formData.name || ''}
          onChange={handleInputChange}
          placeholder="Enter your name"
          className={errors.name ? 'error' : ''}
        />

        <CustomInput
          type="email"
          name="email"
          value={formData.email || ''}
          onChange={handleInputChange}
          placeholder="Enter your email"
          className={errors.email ? 'error' : ''}
        />

        <CustomInput
          type="password"
          name="password"
          value={formData.password || ''}
          onChange={handleInputChange}
          placeholder="Enter your password"
          className={errors.password ? 'error' : ''}
        />

        <CustomButton type="submit">Submit</CustomButton>
      </form>
    </div>
  );
};

export default RegistrationForm;
