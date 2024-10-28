import { useLocation } from 'react-router-dom';

export default function Cerca() {
    const location = useLocation();
    const { title, description, icon, company } = location.state;

    return (
        <div className="search-container">
          <h1 className="main-title">Motore di IA Suggerito</h1>
          <div className="tiles-grid">
            <div className="tile">
              <div className="tile-icon">{icon}</div>
              <h2 className="tile-title">{title}</h2>
              <span className="tile-company">{company}</span>
              <p className="tile-description">{description}</p>
            </div>
          </div>
        </div>
    );
}