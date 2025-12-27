import './About.css';

export default function About() {
    return (
        <div className ="about-container">
            <h1><strong>plot twist</strong> provides language-learning conversation</h1>
            <p>PlotTwist is a personalized language-learning app that generates conversation scenarios based on user-specified situations (e.g., ordering at a restaurant, buying groceries). The user selects a language, proficiency level, and scenario, and the app creates dynamic prompts and responses tailored to their inputs. It’s designed to help learners practice new and realistic interactions and build confidence with practical phrases and situations.</p>
        <div className ="demonstrate-app">
            <img src="/images/home-image.png" alt="Home Image"/>
            <p>Choose a language, level, and scenario, or create your own</p>
            <img src="/images/chatapp-image.png" alt="Home Image"/>
            <p>Practice chatting with an AI assistant and recieve instant reponses</p>
            <img src="/images/vocab-library-image.png" alt="Home Image"/>
            <p>Create a library of phrases and vocabulary to practice</p>
            <p>Track your daily progress (Coming soon)</p>
            
        </div>
        </div>

        
    )
}

