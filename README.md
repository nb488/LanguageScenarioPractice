# PlotTwist — AI Language Scenario Practice

<p align="center">
  <img
    width="124"
    height="636"
    alt="PlotTwist logo"
    src="https://github.com/user-attachments/assets/45f68903-4211-40a2-8e0a-e2c034ff999f"
  />
</p>

**PlotTwist** is a full-stack language learning web application that helps users practice real-world conversations by interacting with an AI assistant in scenario-based roleplay.

Users choose a target language, proficiency level, and situation (e.g., ordering food, buying groceries, asking for directions), and the app generates adaptive, contextual dialogue to simulate realistic conversations.

<table>
  <tr>
    <td>
      <img
        src="https://github.com/user-attachments/assets/e8ac30b5-3b7b-40a7-9619-8c0c1245940e"
        alt="PlotTwist chat interface"
        width="100%"
      />
    </td>
    <td>
      <img
        src="https://github.com/user-attachments/assets/0c1170a1-fb9d-4997-a0c2-f0cf411c3519"
        alt="PlotTwist scenario selection"
        width="100%"
      />
    </td>
  </tr>
</table>

---

## Features

-  Practice conversations in multiple languages  
-  Scenario-based roleplay (restaurants, shopping, travel, etc.)
-  AI-generated responses tailored to user input and proficiency level
-  Interactive chat interface
-  Built with modern React and Vite

---

## Tech Stack

- **Frontend:** React 19, React Router
- **Build Tooling:** Vite
- **AI Integration:** OpenRouter API

---

## Requirements

- **Node.js** 18+
- **npm**

---

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/nb488/LanguageScenarioPractice.git
```
### 2. Set up environment variables
Edit the .env file in the project root:
```bash
VITE_OPENROUTER_API_KEY=your_api_key_here
```
### 3. Install dependencies
```bash
npm install
```
### 4. Run the development server
```bash
npm run dev
```
The app will be available at http://localhost:5173

---

## Future Improvements
- Speech-to-text and text-to-speech support
- User accounts and saved progress
- Improved conversation feedback and corrections

---

## Acknowledgements

This project was developed during the BU1DL 4-month program, with support and feedback from mentors throughout its development..

---

## Disclaimer

This project is intended for educational and portfolio purposes. API usage may incur costs depending on the OpenRouter model selected.
