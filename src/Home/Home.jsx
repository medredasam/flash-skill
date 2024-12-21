import React from 'react';
import Header from '../Header2/Header2';
import Footer from "../LandingPage/Components/Footer"
import { useNavigate } from 'react-router-dom';
import './Home.css';
import { FaFlask, FaGlobe, FaBrain, FaHistory } from 'react-icons/fa'; // Importez les icônes nécessaires
const Home = () => {
  const navigate = useNavigate();

  const quizzes = [
    { id: 1, title: 'Chemistry Basics', description: 'Explore chemistry.', duration: '15 mins', participants: 120 },
    { id: 2, title: 'World History', description: 'Historical events.', duration: '20 mins', participants: 95 },
    { id: 3, title: 'Math Challenge', description: 'Complex math.', duration: '25 mins', participants: 150 },
  ];

  const categories = [
    { title: 'Cognitive Skills', questions: 20, duration: 30, icon: <FaBrain size={40} color="#3f51b5" /> },
    { title: 'Geography', questions: 15, duration: 20, icon: <FaGlobe size={40} color="#4caf50" /> },
    { title: 'History', questions: 25, duration: 40, icon: <FaHistory size={40} color="#ff9800" /> },
    { title: 'Chemistry', questions: 18, duration: 35, icon: <FaFlask size={40} color="#e91e63" /> },
  ];
  

  return (
    <>
      <Header />
      <main className='main22'>
      <section className="categories">
  <h2>Categories</h2>
  <div className="category-grid">
    {categories.map((cat, index) => (
      <div key={index} className="category-card">
        <div className="icon">{cat.icon}</div> {/* Affiche l'icône */}
        <h3>{cat.title}</h3>
        <p>{cat.questions} Questions</p>
        <p>Duration: {cat.duration} mins</p>
        <button onClick={() => navigate(`/quiz/${index + 1}`)}>Take Quiz</button>
      </div>
    ))}
  </div>
</section>

        <section className="quizzes">
          <h2>Your Quizzes</h2>
          <div className="quiz-grid">
            {quizzes.map((quiz) => (
              <div key={quiz.id} className="quiz-card">
                <h4>{quiz.title}</h4>
                <p>{quiz.description}</p>
                <p>Duration: {quiz.duration} | Participants: {quiz.participants}</p>
                <button onClick={() => navigate(`/quiz/${quiz.id}`)}>View More</button>
              </div>
            ))}
          </div>
        </section>
        
      </main>
      <Footer />

      

    </>
    
  );
};

export default Home;
