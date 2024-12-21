import React from 'react';
import { FaFlask, FaGlobe, FaBrain, FaHistory } from 'react-icons/fa'; // Importation des icônes

const icons = {
  Chemistry: <FaFlask size={40} color="#e91e63" />, // Icône de chimie
  Geography: <FaGlobe size={40} color="#4caf50" />, // Icône de géographie
  "Cognitive Skills": <FaBrain size={40} color="#3f51b5" />, // Icône de cerveau
  History: <FaHistory size={40} color="#ff9800" />, // Icône d'histoire
};

const CategoryCard = ({ title, questions, duration }) => {
  return (
    <div className="category-card">
      <div className="icon">{icons[title]}</div>
      <h3>{title}</h3>
      <p>{questions} Questions</p>
      <p>Duration: {duration} mins</p>
      <button>Take Quiz</button>
    </div>
  );
};

export default CategoryCard;
