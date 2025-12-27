import React, { useState } from 'react';
//import { Send, RotateCcw, Globe } from 'lucide-react';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import {useRef } from 'react';
import './ChatApp.css';
 
const OPENROUTER_API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;

const ChatApp = () => {
  // retrieve user input for language, level, scenario
  const location = useLocation();
  const {language, level, scenario} = location.state || {};

  // State
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const INITIAL_PROMPT = 

    `You are a helpful language practice partner. The user is learning ${language} at a ${level} level.
    SCENARIO: ${scenario}
    YOUR ROLE: You are playing a character in this scenario.
    
    CRITICAL INSTRUCTIONS:
    - Respond in ${language} **only using vocabulary suitable for a ${level} learner**.
    - Always include an **English translation in parentheses after each sentence**.
    - Keep responses very short: 1 simple sentence max.
    - Do not introduce advanced or abstract vocabulary beyond beginner level.
    - Stay in character for the scenario.
    - Start the conversation by greeting them in character.
    - Respond with text only`;

  const startConversation = async () => {
    setLoading(true);

    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'tngtech/deepseek-r1t2-chimera:free',
          messages: [{ role: 'user', content: INITIAL_PROMPT }],
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

  const hasStarted = useRef(false);


  // run startConversation after window loads (no dependencies)
  useEffect(() => {
    if (hasStarted.current) return;

    if (language && level && scenario) {
      hasStarted.current = true;
      startConversation();
    }
  }, []);



  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    const NEXT_PROMPT = 

    `You are a helpful language practice partner. The user is learning ${language} at a ${level} level.
    SCENARIO: ${scenario}
    YOUR ROLE: You are playing a character in this scenario.
    
    CRITICAL INSTRUCTIONS:
    - Always include an **English translation in parentheses after each sentence**.
    - Keep responses very short: 1 simple sentence max.
    - Do not introduce advanced or abstract vocabulary beyond beginner level.
    - Respond with text only.`

    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'tngtech/deepseek-r1t2-chimera:free',
          messages: [
            { role: 'system', content: NEXT_PROMPT},
            ...newMessages
          ], 
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
  <div class="chatapp-container">
    <header >ChatApp</header>

      <div class="message-section">

        <div class="assistant-section">
        <div class="assistant-image-holder">
          <img src="/images/bear-image.jpg" alt="Assistant"/>
        </div>
       <strong>Guest</strong> {loading && <p>Typing...</p>}
      </div>


        <div class="messages">
          {messages.map((msg, idx) => (
            <div key={idx} className={`message ${msg.role}`}>
              {msg.content}
            </div>
          ))}
        </div>

        <div class="input">
          <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a response..." maxLength={30}/>
          <button onClick={sendMessage} disabled={loading}>
            Send
          </button>
        </div>

        
      </div>

  </div>
);
};

export default ChatApp;