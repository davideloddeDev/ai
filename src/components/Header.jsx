import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './css/header.css'
export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchText, setSearchText] = useState('');
  
  const handleSearch = (e) => {
    e.preventDefault();
    const searchInput = e.target.querySelector('.search-input').value.toLowerCase();
    
    const aiSuggestions = {
        'testo': {
            title: 'ChatGPT',
            description: 'Ottimo per elaborazione e generazione di testo',
            icon: '🤖',
            company: 'OpenAI',
            searchTerm: searchInput
        },
        'immagini': {
            title: 'DALL-E',
            description: 'Specializzato nella creazione di immagini',
            icon: '🎨',
            company: 'OpenAI',
            searchTerm: searchInput
        }
    };

    let result = aiSuggestions[searchInput] || {
        title: 'AI Generica',
        description: 'Nessuna corrispondenza specifica trovata',
        icon: '❓',
        company: 'Vari',
        searchTerm: searchInput
    };

    navigate('/cerca', { state: result });
    setSearchText(''); // Reset del campo input
  }

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