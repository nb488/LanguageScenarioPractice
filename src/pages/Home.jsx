
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Home.css'



export default function Home() {
  const [language, setLanguage] = useState("Spanish");
  const [level, setLevel] = useState("Beginner");
  const [scenario, setScenario] = useState("Ordering at a Café");
  const navigate = useNavigate();
  
  const LANGUAGES = ["Spanish", "French", "Japanese", "Portuguese"];
  const LEVELS = ["Beginner", "Intermediate", "Advanced"];
  const SCENARIOS = ["Ordering at a Café", "Buying Groceries", "Shopping for Clothes"]

  // allow user to go to /chat
  const handleStart = () => {
    navigate("/chat", { state: { language, level, scenario } });
  };



  return (
    <div className="home-container">
      <h1>plot twist</h1>
      <div className="home-card">

        {/*CHOOSE LANGUAGE*/}
        <div>
          <label>What language are you learning?</label>
          <div className="language-btns">
            {/* for each language create a button, and mark as selected if it is equal to the langauge const*/}
            {LANGUAGES.map((lang) => ( 
              <button key={lang} className={`home-btn ${language === lang ? "selected" : ""}`} onClick={() => setLanguage(lang)}>
                {lang}
              </button>
            ))}
          </div>
        </div>


        {/*CHOOSE LEVEL*/}
        <div>
          <label>What's your level?</label>
          <div className="level-btns">
            {LEVELS.map((lvl) => (
              <button key={lvl}
                className={`home-btn ${level === lvl ? "selected" : ""}`} onClick={() => setLevel(lvl)}>
                {lvl}
              </button>
            ))}
          </div>
        </div>


        {/*CHOOSE SCENARIO*/}
        <div>
          <label>Choose a scenario</label>
          <div className="scenario-btns">
            {SCENARIOS.map((sc) => (
              <button key={sc} className={`home-btn ${scenario === sc ? "selected" : ""}`} onClick={() => setScenario(sc)}>
                {sc}
              </button>
            ))}
          </div>
        </div>

        {/*USER START*/}
        <button onClick={handleStart} className="start-btn">
          Start Practicing →
        </button>
        
      </div>
    </div>
  );
}
