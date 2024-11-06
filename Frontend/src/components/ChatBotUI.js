import React, { useState, useEffect, useRef } from 'react';
import '../css/ChatBotUI.css';

const ChatBotUI = ({ isVisible, onClose }) => {
  const [messages, setMessages] = useState([
    {
      "type": "ai",
      "text": "Hi, welcome to Job-Hunter👨‍💻<br>How can I help you..?"
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const responses = {
    "How do I create an account?": "To create an account, click on the 'Sign Up' button on the homepage and fill in your details. You will receive a confirmation email to activate your account.",
    "How can I search for jobs?": "To search for jobs, use the search bar on the homepage. You can filter jobs by location, industry, and job type to find the best match.",
    "What is the status of my application?": "To check your application status, go to the 'My Applications' section in your account dashboard. Each application will show its current status.",
    "How can I update my resume?": "To update your resume, log in to your account and go to the 'My Profile' section. You can upload a new resume or edit your existing one.",
    "How do I contact support?": "You can contact support by emailing us at DesignITBazzinga@jobportal.com or by calling our helpline at (123) 456-7890. We're here to assist you with any issues.",
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      const newMessage = { type: 'user', text: inputValue };
      setMessages([...messages, newMessage]);
      setInputValue('');

      const aiResponseText = responses[inputValue.trim()] || "I'm not sure how to answer that. Could you please provide more details?";
      setTimeout(() => {
        const aiResponse = { type: 'ai', text: aiResponseText };
        setMessages(prevMessages => [...prevMessages, aiResponse]);
      }, 1000);
    }
  };

  return (
    <div className={`chatbot-container ${isVisible ? 'visible' : ''}`}>
      <button className="chatbot-close" onClick={onClose}>&times;</button>
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chatbot-message ${message.type === 'user' ? 'user-message' : 'ai-message'}`}
            dangerouslySetInnerHTML={{ __html: message.text }}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="chatbot-input-container">
        <input
          type="text"
          placeholder="Type a message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBotUI;
