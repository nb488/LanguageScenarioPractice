import './Vocab.css'
import { useState } from "react";

export default function Vocab() {
    const [input, setInput] = useState("");
    const [language, setLanguage] = useState("es");
    const [loading, setLoading] = useState(false);
    const [translation, setTranslation] = useState("");
    const LANGUAGES = {Spanish: "es", French: "fr", Korean: "ko", Portuguese:"pt"};

    const sendLookup = async () => {
         if (!input) return;
        setLoading(true);

        try {
            const res = await fetch("https://libretranslate.com/translate", {
	            method: "POST",
	            body: JSON.stringify({
		            q: input,
		            source: "en",
		            target: language,
		            format: "text",
		            alternatives: 3,
		            api_key: ""
	        }),
	        headers: { "Content-Type": "application/json" }
        });

        const data = await res.json();
        console.log(data);
        setTranslation(data.translatedText || "")
        } catch (error) {
            console.error(error);
            setTranslation("Error translating");
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="vocab-container">
            <h1>Vocabulary & Phrases Library</h1>
            <p>Type a phrase or word you'd like to translate and choose the target language</p>


            <div className="vocab-input">
                <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Translate word or phrase..."/>
                <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                    {Object.entries(LANGUAGES).map(([name, code]) => (
                        <option key={code} value={code}>
                            {name}
                        </option>
                    ))}
                </select>
            

                <button onClick={sendLookup} disabled={loading}>
                    {loading ? "Translating..." : "Lookup"}
                </button>
            </div>
            <div className="vocab-result">
                {translation && <p>{translation}</p>}
            </div>

            <div className="vocab-card"></div>
        


        </div>

        
    )
}