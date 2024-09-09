import React from 'react';
import portfolioImage from '../assets/images/daniela-e-tLTCY-rknG8-unsplash.jpg';

function Home() {
  return (
    <div className="home">
      <header className="hero">
        <img src={portfolioImage} alt="Portfolio showcase" className="hero-image" />
        <div className="hero-content">
          <h1>Welcome to My Portfolio</h1>
          <p>Hello! I'm [Your Name]. I'm a [Your Profession] passionate about [Your Interests].</p>
        </div>
      </header>
      <main>
        <section>
          <h2>About Me</h2>
          <p>Add more details about your background, experience, and goals here.</p>
        </section>
        {/* Add more sections as needed */}
      </main>
    </div>
  );
}

export default Home;