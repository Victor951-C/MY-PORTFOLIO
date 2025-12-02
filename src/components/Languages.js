import React from 'react';

function Languages({ className }) {
  const languages = [
    { name: 'English', proficiency: 'Native Speaker' },
    { name: 'German', proficiency: 'B2 level/Very good command' },
    { name: 'Yoruba', proficiency: 'Native Speaker' },
    { name: 'Pidgin', proficiency: 'Native Speaker' },
  ];

  return (
    <section id="languages" className={className}>
      <h2>Languages</h2>
      <ul className="languages-list">
        {languages.map((language, index) => (
          <li key={index}>{language.name}: {language.proficiency}</li>
        ))}
      </ul>
    </section>
  );
}

export default Languages;
