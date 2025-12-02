import React from 'react';

function WorkExperience({ className }) {
  const experiences = [
    {
      id: 1,
      title: 'Advanced Support Specialist (III)',
      company: 'Worldline',
      years: 'September 2023 – November 2025',
      description: [
        'Providing advanced software support for payment solutions (front to back) offer by Worldline.',
        'Troubleshooting software issues reported by customers and partners through our Regional Support, related to terminal payment software and platform.',
        'Analyzing communication traces, application logs, reviewing source code/specifications and providing solutions in a timely manner.',
        'Ensuring the quality of requests escalated (defect, enhancement, configuration…) with a deep analysis and conclusion to the appropriate stakeholders.',
        'Working closely with Operations team to migrate impact on production issues.',
        'Developing/updating tools for troubleshooting or internal use.',
        'Reviewing, creating and distributing guidelines and best practices where appropriate.',
        'Identifying opportunities to improve service efficiencies.',
        'Providing ad-hoc training when necessary.',
      ],
    },
    {
      id: 2,
      title: 'Application Support Specialist',
      company: 'Flairs tech',
      years: 'May 2022 – September 2023',
      description: [
        'Provided technical support for enterprise applications used by global clients, ensuring stable operations and timely incident resolution.',
        'Troubleshot software incidents, analyzed root causes, and delivered effective solutions within SLA targets.',
        'Analyzed log files, developed automated scripts, and introduced error detection measures, reducing application downtime by 15%.',
        'Maintained high customer satisfaction ratings and received recognition for exceptional customer service skills.',
        'Documented issues, solutions, and workflows to improve team knowledge and reduce recurring incidents.',
        'Monitored application performance, logs, and system health using internal dashboards and tools.',
      ],
    },
    {
      id: 3,
      title: 'Junior Software Engineer (Cloud-React)',
      company: 'Collabera',
      years: 'April 2022 – June 2022',
      description: [
        'Collaborated with senior developers in pair programming activities, contributing to the successful delivery of high-quality software applications.',
        'Enhanced software functionality through code enhancements and bug fixes, resulting in improved user experience and positive feedback from clients.',
        'Actively participated in code reviews and training sessions, demonstrating a commitment to continuous learning and professional growth.',
        'Received commendations from senior team members for consistently meeting deadlines and delivering high-quality code.',
        'Proactively sought opportunities to expand technical knowledge, successfully mastering new technologies and frameworks.',
        'Led a project to optimize application performance, resulting in a 25% improvement in response time and enhanced user satisfaction.',
      ],
    },
    {
      id: 4,
      title: 'Technical Support Specialist',
      company: 'SITEL POLSKA',
      years: 'September 2021 – March 2023',
      description: [
        'Delivered technical and application support for customers using Oura Ring devices, mobile apps, and analytics platforms by providing step-by-step guidance, troubleshooting procedures, and product usage best practices.',
        'Diagnosed and resolved issues related to device connectivity, firmware updates, data syncing, account access, and mobile compatibility.',
        'Handled complex cases requiring deeper investigation, working with higher-tier support and engineering teams when necessary.',
        'Documented all interactions in internal CRM/ticketing tools, maintaining accurate records and ensuring compliance with service SLAs.',
        'Identified recurring technical issues, contributing feedback to improve internal processes, knowledge bases, and customer-facing documentation.',
        'Ensured a high standard of customer experience by using empathetic communication, active listening, and problem-solving skills.',
        'Collaborated with cross-functional teams to support product updates, new feature rollouts, and system changes.',
      ],
    },
    {
      id: 5,
      title: 'Customer Support Specialist',
      company: 'SITEL POLSKA',
      years: 'February 2021 – September 2021',
      description: [
        'Maintained a customer satisfaction rating of 95% by providing comprehensive and accurate responses to customer inquiries.',
        'Exceeded customer service metrics by 20%, showcasing a strong commitment to achieving and surpassing performance targets.',
        'Developed and implemented a customer feedback system that improved customer satisfaction scores by 25%.',
        'Proactively identified opportunities to improve customer service processes, resulting in streamlined operations and enhanced efficiency.',
        'Received recognition for exceptional teamwork, effective communication, and exemplary customer service.',
      ],
    },
    {
      id: 6,
      title: 'Customer Support Representative',
      company: 'New vision Autocare',
      years: 'September 2017 – December 2019',
      description: [
        'Achieved and maintained a customer satisfaction rating of 95% through exceptional service and prompt issue resolution.',
        'Exceeded performance targets by 20%, consistently delivering outstanding customer service and surpassing set metrics.',
        'Implemented innovative solutions that streamlined processes, resulting in a 15% reduction in customer service errors and improved efficiency.',
        'Recognized for exceptional teamwork skills, collaborating effectively with colleagues to solve complex customer issues and ensure high levels of satisfaction.',
        'Received positive feedback from customers for going above and beyond, resulting in increased repeat business.',
      ],
    },
  ];

  return (
    <section id="experience" className={className}>
      <h2>Work Experience</h2>
      {experiences.map(experience => (
        <div key={experience.id} className="experience-item">
          <h3>{experience.title} at {experience.company}</h3>
          <p className="experience-years">{experience.years}</p>
          <ul>
            {experience.description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default WorkExperience;
