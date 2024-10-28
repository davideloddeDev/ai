import './css/home.css'

export default function Home() {
  const aiEngines = [
    {
      title: "ChatGPT",
      description: "Il modello linguistico di OpenAI, specializzato in conversazioni naturali e generazione di testo",
      icon: "🤖",
      company: "OpenAI"
    },
    {
      title: "Claude",
      description: "Assistente AI di Anthropic, focalizzato su risposte accurate e ragionamento etico",
      icon: "🎯",
      company: "Anthropic"
    },
    {
      title: "Gemini",
      description: "Il modello multimodale di Google, capace di elaborare testo, immagini e codice",
      icon: "💫",
      company: "Google"
    },
    {
      title: "DALL-E",
      description: "Generatore di immagini AI di OpenAI, crea arte da descrizioni testuali",
      icon: "🎨",
      company: "OpenAI"
    },
    {
      title: "Midjourney",
      description: "Strumento di generazione immagini AI, specializzato in arte digitale di alta qualità",
      icon: "🖼️",
      company: "Midjourney Inc."
    },
    {
      title: "Copilot",
      description: "Assistente di programmazione AI, aiuta gli sviluppatori nella scrittura del codice",
      icon: "👨‍💻",
      company: "GitHub/Microsoft"
    }
  ];

  return (
    <div className="home-container">
      <h1 className="main-title">Motori di Intelligenza Artificiale</h1>
      <div className="tiles-grid">
        {aiEngines.map((ai, index) => (
          <div key={index} className="tile">
            <div className="tile-icon">{ai.icon}</div>
            <h2 className="tile-title">{ai.title}</h2>
            <span className="tile-company">{ai.company}</span>
            <p className="tile-description">{ai.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}