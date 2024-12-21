import React, { useState } from 'react';
import './MyQuizzes.css';
import Header2 from '../Header2/Header2';
const MyQuizzes = () => {
  const [quizzes, setQuizzes] = useState([
    {
      id: 1,
      title: "Cognitive Skills",
      description: "Explore and improve your cognitive skills.",
      duration: "30 mins",
      participants: 120,
    },
    {
      id: 2,
      title: "History Quiz",
      description: "Learn about significant historical events.",
      duration: "20 mins",
      participants: 95,
    },
    {
      id: 3,
      title: "Math Challenge",
      description: "Solve complex mathematical problems.",
      duration: "25 mins",
      participants: 150,
    },
  ]);

  return (
    <>
    <Header2 />
    <section className="my-quizzes">
      <h2>My Quizzes</h2>
      <p>Here are the quizzes you have created:</p>
      <div className="quizzes-list">
        {quizzes.length === 0 ? (
          <p className="empty-message">You haven’t created any quizzes yet.</p>
        ) : (
          quizzes.map((quiz) => (
            <div key={quiz.id} className="quiz-card">
              <div className="quiz-info">
                <h3>{quiz.title}</h3>
                <p>{quiz.description}</p>
                <small>Duration: {quiz.duration} | Participants: {quiz.participants}</small>
              </div>
              <div className="quiz-actions">
                <button className="view-more-btn">View More</button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
    </>);
};

export default MyQuizzes;
