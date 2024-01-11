// File: src/App.js
import React, { useState } from 'react';
import RegistrationForm from './component/RegistrationForm';
import UserData from './component/UserData/UserData';

const App = () => {
  const [submittedFormData, setSubmittedFormData] = useState([]);

  const handleFormSubmit = (formData) => {
    setSubmittedFormData([...submittedFormData, formData]);
  };

  return (
    <div>
      <RegistrationForm onSubmit={handleFormSubmit} />
      {submittedFormData.length > 0 && <UserData users={submittedFormData} />}
    </div>
  );
};

export default App;
