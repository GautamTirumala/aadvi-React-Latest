import React, {useState , useRef} from 'react'
import './chatbot.css'

export default function Chatbot() {
    const [messages, setMessages] = useState([]);
  const userInputRef = useRef(null);

  const handleSendMessage = () => {
    const message = userInputRef.current.value.trim();
    if (message !== '') {
      addUserMessage(message);
      userInputRef.current.value = '';

      // Simulate a bot response (replace with your actual chatbot logic)
      setTimeout(() => {
        addBotMessage("Hello! How can I assist you?");
      }, 500);
    }
  };

  const addUserMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, { text: message, sender: 'user' }]);
  };

  const addBotMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, { text: message, sender: 'bot' }]);
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
  )
}
