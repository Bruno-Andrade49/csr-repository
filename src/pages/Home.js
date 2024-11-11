// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import ItemList from '../components/ItemList';

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className='container'>
      <h1>Lista de Usuários do GitHub</h1>
      <ItemList items={users} />
    </div>
  );
}

export default Home;
