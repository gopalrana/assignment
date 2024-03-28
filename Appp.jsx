import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const Appp = () => {
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('/api/users');
      setUsers(response.data);
      setError(null);
    } catch (error) {
      setError("Error fetching users. Please try again later.");
    }
  };

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    // Perform search/filter logic if needed
  };

  return (
    <div>
      <header>
        <input 
          type="text" 
          value={search} 
          onChange={handleSearchChange} 
          placeholder="Search..." 
          aria-label="Search Input"
        />
      </header>
      <main>
        <section>
          <img src="./download.png" alt="Static Image from CDN" />
        </section>
        <section>
          <h2>User List</h2>
          <ul>
            {users.map((user) => (
              <li key={user.username} onClick={() => handleUserClick(user)}>
                {user.username}
                {user.password}
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2>Dynmo DB data</h2>
          {selectedUser ? (
            <div>
              <p>username: {selectedUser.username}</p>
              <p>password: {selectedUser.password}</p>
              {/* Add more user data fields as needed */}
            </div>
          ) : (
            <p>No user selected</p>
          )}
        </section>
        <section>
          <h2>API Searchable Data</h2>
          {/* Add searchable content here */}
        </section>
      </main>
    </div>
  );
};

export default Appp;
