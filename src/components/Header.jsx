import { useNavigate, useLocation } from 'react-router-dom';
import "./css/header.css";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = e => {
    e.preventDefault();
    const searchInput = e.target
      .querySelector(".search-input")
      .value.toLowerCase();

    const aiSuggestions = {
      testo: {
        title: "ChatGPT",
        description: "Ottimo per elaborazione e generazione di testo",
        icon: "🤖",
        company: "OpenAI"
      },
      immagini: {
        title: "DALL-E",
        description: "Specializzato nella creazione di immagini",
        icon: "🎨",
        company: "OpenAI"
      }
    };

    let result = aiSuggestions[searchInput] || {
      title: "AI Generica",
      description: "Nessuna corrispondenza specifica trovata",
      icon: "❓",
      company: "Vari"
    };

    navigate("/cerca", { state: result });
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