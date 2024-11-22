import React from 'react';
import './explore.css';

function Explore() {
  return (
    <div className="explore-container">
      <header className="explore-header">
        <h1>Explore the World of HerbScan</h1>
        <p>Discover insights, information, and opportunities to learn more about herbs and plants.</p>
      </header>

      <section className="explore-content">
        <div className="explore-card">
          <h2>Herb Categories</h2>
          <p>Browse through various herb categories to learn about their uses, benefits, and more.</p>
        </div>
        <div className="explore-card">
          <h2>Identify Plants</h2>
          <p>Upload images of plants to identify them and gain deeper insights.</p>
        </div>
        <div className="explore-card">
          <h2>Learn About Herbs</h2>
          <p>Access detailed articles, research papers, and expert insights on herbs and plants.</p>
        </div>
      </section>

      <footer className="explore-footer">
        <p>&copy; 2024 HerbScan. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Explore;
