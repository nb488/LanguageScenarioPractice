
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Home.css'

export default function Home() {
  const [language, setLanguage] = useState("Spanish");
  const [level, setLevel] = useState("Beginner");
  const [scenario, setScenario] = useState("Ordering at a Café");
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/chat", { state: { language, level, scenario } });
  };

  return (
    <div className="home-container">
      <h1>plot twist</h1>
      <div className="home-card">
        {/* language section */}
        <div className="mb-4">
          <label>What language are you learning?</label>
          <div className="language-btns">
            {["Spanish", "French", "Japanese", "Portuguese"].map((lang) => (
              <button
                key={lang}
                className={`home-btn ${
                  language === lang ? "selected" : ""}`}
                onClick={() => setLanguage(lang)}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        {/* level section */}
        <div className="mb-4">
          <label>What's your level?</label>
          <div className="level-btns">
            {["Beginner", "Intermediate", "Advanced"].map((lvl) => (
              <button
                key={lvl}
                className={`home-btn ${
                  level === lvl ? "selected" : ""}`}
                onClick={() => setLevel(lvl)}
              >
                {lvl}
              </button>
            ))}
          </div>
        </div>

        {/* scenario section */}
        <div className="mb-6">
          <label>Choose a scenario</label>
          <div className="scenario-btns">
            {[
              "Ordering at a Café",
              "Buying Groceries",
              "Shopping for Clothes",
            ].map((sc) => (
              <button
                key={sc}
                className={`home-btn ${
                  scenario === sc ? "selected" : ""}`}
                onClick={() => setScenario(sc)}
              >
                {sc}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleStart}
          className="start-btn">
          Start Practicing →
        </button>
      </div>
    </div>
  );
}
