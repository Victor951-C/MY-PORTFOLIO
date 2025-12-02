import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Education from './components/Education';
import Interests from './components/Interests';
import Languages from './components/Languages';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme + '-theme';

    const sections = document.querySelectorAll('.fade-in-section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          } else {
            entry.target.classList.remove('is-visible'); // Optional: remove class when out of view
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="App">
      <Header toggleTheme={toggleTheme} />
      <Navigation />
      <main>
        <section id="home" className="fade-in-section">
          <h2>Welcome to my Portfolio!</h2>
          <p>This is the home section.</p>
        </section>
        <About className="fade-in-section" />
        <WorkExperience className="fade-in-section" />
        <Projects className="fade-in-section" />
        <Skills className="fade-in-section" />
        <Education className="fade-in-section" />
        <Interests className="fade-in-section" />
        <Languages className="fade-in-section" />
        <Contact className="fade-in-section" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
