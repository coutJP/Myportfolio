import "./portfolio.css";

import IMG1 from "../../assets/Educational Website.jpg";
import IMG2 from "../../assets/RubyCode Blog Project.jpg";
import IMG3 from "../../assets/Startup Agency Project.jpg";
import IMG4 from "../../assets/Covid-19 Project.jpg";
import IMG5 from "../../assets/Jokes Project.jpg";
import IMG6 from "../../assets/Project4.jpg";
import React from "react";

// Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Online Market Place",
      img: IMG1,
      description:"A marketplace designed for buying, selling, and bidding on products and services, complete with live tracking capabilities using Google Maps and an integrated direct messaging system.",
      technologies: "Html | CSS | Javascript | React Js | Redux | Sockets | Maps Api | FireBase",
      link: "https://la7i27alak.com",
    },
    {
      id: 2,
      title: "Food Recommendation",
      img: IMG4,
      description:"A website that gave you food ideas based on what you like, taking care of your allergies",
      technologies: "React | Redux | Scss | MongoDb",
    
    },
    {
      id: 3,
      title: "Chat Application",
      img: IMG2,
      description: "A fun chat app, let you connect people registred in the app",
      technologies: "React | FireBase | Scss",

    },
    {
      id: 4,
      title: "Unbeatable Tic-Tac-Toe",
      img: IMG3,
      description:
        "Ubeatable tic-tac-toe using artificial intelligence.",
      technologies: "Python",
 
    },
    {
      id: 5,
      title: "Pc Performance Tracker",
      img: IMG5,
      description:
        "Track PC performance using data collected from the pc, and analyze it using data science",
      technologies: "React | Python",

    },
    {
      id: 6,
      title: "LinkedIn Scraper",
      img: IMG6,
      description:
        "Scrape data from linkedIn, to track university graduates and their work, location .",
      technologies: "React | Puppeteer",
     
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro, index) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div>
              {index === 0 && (
                <a
                  href={pro.link}
                  target="_blank"
                  className="mybtn"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
