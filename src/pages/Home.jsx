import React from 'react';
import portfolioImage from '../assets/images/daniela-e-tLTCY-rknG8-unsplash.jpg';

function Home() {
  return (
    <div className="home">
      <header className="hero">
        <img src={portfolioImage} alt="Portfolio showcase" className="hero-image" />
        <div className="hero-content">
          <h1>Welcome to My Portfolio</h1>
          <p>Hello! I'm Ashley D Von, a dedicated full stack developer specializing in creating efficient, scalable, and user-friendly web applications. My focus is on solving complex problems with creative technical solutions.</p>
        </div>
      </header>
      <main>
        <section>
          <h2>About Me</h2>
          <p>
            I have a steadfast belief that the pursuit of knowledge and the persistence to grow are key elements 
            to success in the tech industry. I combine and build upon my skills and versatility to create innovative, 
            user-focused solutions. As a passionate full stack developer, I strive to be the best I can be, 
            continuously expanding my expertise and pushing the boundaries of what's possible. 
            My commitment to connecting with others and embracing new ideas drives my commitment to the 
            success of every project I work on, ensuring that I deliver high-quality, impactful results.
          </p>
        </section>
        {/* Add more sections as needed */}
      </main>
      <footer>
        <p>Connect with me:</p>
        <ul>
          <li><a href="https://github.com/AshleydVon" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/ashley-von-0600a9239/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="mailto:AshleydVon630@gmail.com">Email: AshleydVon630@gmail.com</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default Home;
