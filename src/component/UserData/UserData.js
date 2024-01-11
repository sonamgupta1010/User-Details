// File: src/components/UserData/UserData.js
import React from 'react';
import DynamicTable from '../DynamicTable/DynamicTable';
import './UserData.css';

const UserData = ({ users }) => {
  return (
    <div>
      <DynamicTable users={users} />
    </div>
  );
};

export default UserData;
