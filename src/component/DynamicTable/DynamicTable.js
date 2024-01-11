import React from 'react';
import './DynamicTable.css';
import { capitalizeFirstLetter } from '../../util';

const DynamicTable = ({ users }) => {
  const renderTableHeader = () => {
    return (
      <thead>
        <tr>
          {Object.keys(users[0]).map((key) => (
            
            <th key={key}>{capitalizeFirstLetter(key)}</th>
          ))}
        </tr>
      </thead>
    );
  };

  const renderTableBody = () => {
    return (
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            {Object.values(user).map((value, i) => (
              <td key={i}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  };

  return (
    <div>
      <h2>User Table</h2>
      <table>
        {renderTableHeader()}
        {renderTableBody()}
      </table>
    </div>
  );
};

export default DynamicTable;
