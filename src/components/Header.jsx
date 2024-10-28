import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './css/header.css'
import aiSuggestions from '../data/aiSuggestions.json';

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const [searchText, setSearchText] = useState('');
  
    const handleSearch = (e) => {
        e.preventDefault();
        const searchInput = e.target.querySelector('.search-input').value.toLowerCase();
        
        let result = Object.entries(aiSuggestions).find(([_, value]) => 
            value.keywords.some(keyword => searchInput.includes(keyword))
        );

        let finalResult = result ? result[1] : {
            title: 'AI Generica',
            description: 'Nessuna corrispondenza specifica trovata',
            icon: '❓',
            company: 'Vari'
        };

        finalResult.searchTerm = searchInput;
        navigate('/cerca', { state: finalResult });
        setSearchText('');
    };
  return (
    <header>
      <h1>AIXplorer</h1>
      <div className="search-container">
        <form onSubmit={handleSearch}>
          <input 
            type="text" 
            className="search-input" 
            placeholder="Esplora i motori AI..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button type="submit" className="search-button">
            Cerca
          </button>
          {location.pathname === '/cerca' && (
            <button 
              type="button" 
              className="home-button"
              onClick={() => navigate('/')}
            >
              Home
            </button>
          )}
        </form>
      </div>
    </header>
  );
}