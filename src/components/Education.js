import React from 'react';

function Education({ className }) {
  const education = [
    {
      id: 1,
      degree: 'Bachelor of Engineering',
      institution: 'Vistula University',
      years: 'May 2023',
      location: 'Warsaw, Poland',
    },
    {
      id: 2,
      degree: 'College Diploma',
      institution: 'Kingsfield College',
      years: 'July 2017',
      location: 'Lagos, Nigeria',
    },
  ];

  return (
    <section id="education" className={className}>
      <h2>Education</h2>
      {education.map(item => (
        <div key={item.id} className="education-item">
          <h3>{item.degree}</h3>
          <p className="education-institution">{item.institution}</p>
          <p className="education-years">{item.years}, {item.location}</p>
        </div>
      ))}
    </section>
  );
}

export default Education;
