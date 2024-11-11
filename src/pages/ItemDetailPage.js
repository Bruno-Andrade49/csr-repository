// src/pages/ItemDetailPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/styles.css';

function ItemDetailPage() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
      .then(response => response.json())
      .then(data => setUser(data));
  }, [id]);

  if (!user) {
    return <p>Usuário não encontrado</p>;
  }

  return (
    <div className="user-detail-card">
      <div className="user-header">
        <img
          src={user.avatar_url}
          alt={`${user.login} avatar`}
          className="user-avatar"
        />
        <div>
          <h1 className="user-name">{user.name || user.login}</h1>
          <p className="user-username">@{user.login}</p>
        </div>
      </div>
      
      <p className="user-bio">{user.bio || "Sem descrição disponível"}</p>
      
      <div className="user-stats">
        <span>🌟 {user.followers} Seguidores</span>
        <span>📁 {user.public_repos} Repositórios</span>
      </div>
      
      <a
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="user-profile-link"
      >
        Visite o Perfil no GitHub
      </a>
    </div>
  );
}

export default ItemDetailPage;
