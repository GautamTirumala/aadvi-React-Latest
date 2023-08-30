import React, { useState, useRef } from 'react';
import './chatbot.css';
import axios from 'axios';

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const userInputRef = useRef(null);
  

  const handleSendMessage = async () => {
    const message = userInputRef.current.value.trim();
    if (message !== '') {
      addUserMessage(message);
      userInputRef.current.value = '';

      try {
        console.log(message);
        const botReply = await fetchBotReply(message);
        // console.log(botReply);
        if (botReply) addBotMessage(botReply);
        else addBotMessage("Sorry, I am not capable of answering this. Feel free to Contact Us! ");
      } catch (error) {
        console.error('Error fetching bot reply:', error);
      }
    }
  };

  const addUserMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, { text: message, sender: 'user' }]);
  };

  const addBotMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, { text: message, sender: 'bot' }]);
  };

  const fetchBotReply = async (userMessage) => {
    console.log("sai")
    const apiUrl = 'http://localhost:5001/chat';
    const requestBody = {
      message: {userMessage},
    };
  
    try {
      console.log('dfasdfasdgas',apiUrl,requestBody);
      const response = await axios.post('http://localhost:5001/chat', {message: userMessage});
      console.log('dhfsahf')
      console.log(response);
      return response.data.answer; // Assuming your API response contains an 'answer' field
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>Chatbot</h2>
      </div>
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input type="text" ref={userInputRef} placeholder="Type your message..." />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}
