import React from 'react';
import Header from '../Header2/Header2';
import './QuizPage.css';

const QuizPage = () => {
  return (
    <>
      <Header />
      <div className="quiz-container">
        <h2 className="quiz-title">Question Title</h2>
        <p className="quiz-question">Angular is a framework for creating _____ applications?</p>
        <form className="quiz-options">
          <div>
            <input type="checkbox" id="web" />
            <label htmlFor="web">Web</label>
          </div>
          <div>
            <input type="checkbox" id="desktop" />
            <label htmlFor="desktop">Desktop</label>
          </div>
          <div>
            <input type="checkbox" id="mobile" />
            <label htmlFor="mobile">Mobile</label>
          </div>
          <div>
            <input type="checkbox" id="console" />
            <label htmlFor="console">Console</label>
          </div>
        </form>
        <div className="quiz-buttons">
          <button className="btn prev">Previous</button>
          <button className="btn next">Next</button>
          <button className="btn submit">Submit</button>
        </div>
      </div>
    </>
  );
};

export default QuizPage;
