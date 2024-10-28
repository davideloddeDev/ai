import './css/header.css'

export default function Header() {
  const handleSearch = (e) => {
    e.preventDefault();
    // 
    alert('Logica di ricerca da implementare');
  }

  return (
    <header>
      <h1>AIXplorer - Esplora le AI più potenti</h1>
      <div className="search-container">
        <form onSubmit={handleSearch}>
          <input 
            type="text" 
            className="search-input" 
            placeholder="Cerca qui..."
          />
          <button type="submit" className="search-button">
            Cerca
          </button>
        </form>
      </div>
    </header>
  );
}