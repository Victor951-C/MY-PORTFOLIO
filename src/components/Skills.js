import React from 'react';

function Skills({ className }) {
  const technicalSkills = [
    'SQL Proficiency and Database Expertise (SQL, NoSQL, Oracle, PostgreSQL)',
    'Agile IT Project Management (Atlassian Cloud, JIRA, Confluence, Trello)',
    'Exceptional Troubleshooting and Technical Support Skills',
    'High understanding of CRM tools and Ticket systems (Zendesk, Salesforce, Slack)',
    'Network Troubleshooting and Understanding of API, REST API, DNS, DHCP, NAT, VLANs, Subnet, Routing, Firewalls, VPN, PaaS and IaaS Technologies',
    'Scripting and Automation (Python, PowerShell)',
    'Exceptional knowledge of Programming languages (Python, C#, Java, C++, C, HTML, CSS, JavaScript, Scala)',
    'Knowledge of Operating Systems and Software (Windows, macOS, Linux)',
    'Good Knowledge with Storage technologies (configuring or managing servers’ storage)',
    'Object Oriented programming (OOP) & Responsive web design',
    'Good Knowledge of Cloud services (AWS, Azure, GoogleCloud)',
    'Understanding of Systems (Active Directory, VMWare, Hyper-V)',
    'Microsoft Office, Office360',
  ];

  const softSkills = [
    'Customer-Centric Approach',
    'Innovative Problem-Solving Skills and Analytical Skills',
    'Strong Communication and Collaboration Skills',
    'Exceptional Mathematics Knowledge',
    'Remote Support',
    'Time Management',
    'Teamwork',
    'Creativity',
    'Leadership',
    'Interpersonal Skills',
    'Empathy',
  ];

  return (
    <section id="skills" className={className}>
      <h2>Skills</h2>
      <h3>Technical Skills</h3>
      <ul className="skills-list">
        {technicalSkills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <h3>Soft Skills</h3>
      <ul className="skills-list">
        {softSkills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
