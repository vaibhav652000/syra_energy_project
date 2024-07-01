// frontend/src/components/FeedbackForm.js
import React, { useState } from 'react';

const FeedbackForm = () => {
  const [experience, setExperience] = useState('');
  const [suggestions, setSuggestions] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setExperience('');
    setSuggestions('');
    alert('Feedback submitted!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={experience} onChange={(e) => setExperience(e.target.value)} placeholder="Travel Experience" required />
      <textarea value={suggestions} onChange={(e) => setSuggestions(e.target.value)} placeholder="Suggestions" required />
      <button type="submit">Submit</button>
      <button type="button" onClick={() => { setExperience(''); setSuggestions(''); }}>Cancel</button>
    </form>
  );
};

export default FeedbackForm;
