// src/components/ItemList.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

function ItemList({ items }) {
  return (
    <div className="card-grid">
          {Array.isArray(items) && items.map(item => (
      <div key={item.id} className="card">
        <Link to={`/item/${item.login}`}>
          <img src={item.avatar_url} alt={item.login} className="avatar" />
          <h3>{item.login}</h3>
        </Link>
      </div>
    ))}
    </div>
  );
}

export default ItemList;
