import React, { useState } from 'react';
import { Send, RotateCcw, Globe } from 'lucide-react';

const OPENROUTER_API_KEY = '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';

const ChatApp = () => {
  // State
  const [stage, setStage] = useState('setup');
  const [language, setLanguage] = useState('');
  const [level, setLevel] = useState('');
  const [scenario, setScenario] = useState('');
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  // Functions must be **inside the component**
  const startConversation = async () => {
    setStage('chatting');
    setLoading(true);

    const systemPrompt = `You are a helpful language practice partner. The user is learning ${language} at a ${level.toLowerCase()} level.

SCENARIO: ${scenario}
YOUR ROLE: You are playing a character in this scenario (e.g., if café, you're the barista).

CRITICAL INSTRUCTIONS:
- Respond in ${language} **only using vocabulary suitable for a ${level.toLowerCase()} learner**.
- Always include an **English translation in parentheses after each sentence**.
- Keep responses very short: 1 simple sentence max.
- Do not introduce advanced or abstract vocabulary beyond beginner level.
- Always stay in character for the scenario.
- Stay in character for the scenario
- Start the conversation by greeting them in character`;

    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'tngtech/deepseek-r1t2-chimera:free',
          messages: [{ role: 'user', content: systemPrompt }],
          max_tokens: 500,
        }),
      });

      const data = await response.json();
      const aiMessage = data.choices[0].message.content;

      setMessages([{ role: 'assistant', content: aiMessage }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages([
        {
          role: 'assistant',
          content:
            'Sorry, there was an error starting the conversation. Please check your API key.',
        },
      ]);
    }

    setLoading(false);
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    const conversationHistory = newMessages;

    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'tngtech/deepseek-r1t2-chimera:free',
          messages: conversationHistory,
          max_tokens: 500,
        }),
      });

      const data = await response.json();
      const aiMessage = data.choices[0].message.content;

      setMessages([...newMessages, { role: 'assistant', content: aiMessage }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages([...newMessages, { role: 'assistant', content: 'Sorry, there was an error. Please try again.' }]);
    }

    setLoading(false);
  };

  // JSX return goes here
  return (
  <div>
    <header>Chat App</header>

    {stage === 'setup' && (
      <div>
        <input
          placeholder="Language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        />
        <input
          placeholder="Level"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        />
        <input
          placeholder="Scenario"
          value={scenario}
          onChange={(e) => setScenario(e.target.value)}
        />
        <button onClick={startConversation}>Start</button>
      </div>
    )}

    {stage === 'chatting' && (
      <div>
        <div>
          {messages.map((msg, idx) => (
            <div key={idx} className={msg.role}>
              {msg.content}
            </div>
          ))}
        </div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage} disabled={loading}>
          Send
        </button>
        {loading && <p>Loading...</p>}
      </div>
    )}

    <footer>Footer content</footer>
  </div>
);
};

export default ChatApp;