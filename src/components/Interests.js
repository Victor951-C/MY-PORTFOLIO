import React from 'react';

function Interests({ className }) {
  const interests = [
    'Literature',
    'Environmental conservation',
    'Art',
    'Yoga',
    'Skiing',
    'Travel',
  ];

  return (
    <section id="interests" className={className}>
      <h2>Interests</h2>
      <ul className="interests-list">
        {interests.map((interest, index) => (
          <li key={index}>{interest}</li>
        ))}
      </ul>
    </section>
  );
}

export default Interests;
