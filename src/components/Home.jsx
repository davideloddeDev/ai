import { useState } from 'react';
import './css/home.css';
import aiSuggestions from '../data/aiSuggestions.json';

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const aiEnginesArray = Object.values(aiSuggestions);
  const totalPages = Math.ceil(aiEnginesArray.length / itemsPerPage);

  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return aiEnginesArray.slice(startIndex, startIndex + itemsPerPage);
  };

  return (
    <div className="home-container">
      <h1 className="main-title">Motore di Intelligenza Artificiale</h1>
      <div className="tiles-grid">
        {getCurrentPageItems().map((ai, index) => (
          <div key={index} className="tile" style={{"--order": index}}>
            <div className="tile-icon">{ai.icon}</div>
            <h2 className="tile-title">{ai.title}</h2>
            <span className="tile-company">{ai.company}</span>
            <p className="tile-description">{ai.description}</p>
          </div>
        ))}
      </div>
      
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            className={`page-button ${currentPage === i + 1 ? 'active' : ''}`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}