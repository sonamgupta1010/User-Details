// File: useFormValidation.js
import { useState } from 'react';

const useFormValidation = (validationRules) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate each field based on the provided rules
    Object.keys(validationRules).forEach((fieldName) => {
      const rule = validationRules[fieldName];

      if (rule.required && !formData[fieldName]) {
        newErrors[fieldName] = `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`;
      }

      if (rule.pattern && !rule.pattern.test(formData[fieldName])) {
        newErrors[fieldName] = rule.errorMessage || 'Invalid value';
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const resetForm = () => {
    // Clear form data
    setFormData({});
  };

  return { formData, errors, handleInputChange, validateForm, resetForm };
};

export default useFormValidation;
