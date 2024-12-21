/*import React, { useState } from "react";
import "./QuizDesignPage.css";

function QuizDesignPage() {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      type: "Multiple Choice",
      text: "What is the capital of France?",
    },
    {
      id: 2,
      type: "True/False",
      text: "Is the Earth flat?",
    },
    {
      id: 3,
      type: "Open-ended",
      text: "Explain the theory of relativity.",
    },
  ]);

  const addQuestion = () => {
    // Ajouter une nouvelle question vide à la liste
    setQuestions([
      ...questions,
      {
        id: questions.length + 1,
        type: "Open-ended",
        text: "",
      },
    ]);
  };

  return (
    <div className="quiz-design-page">
      <h2>Quiz Design Interface</h2>
      
      
      <div class="container">
        <div class="input-group">
            <input type="text" id="input" autocomplete="off"/>
            <label for="input">Enter question text here...</label>
            <button className="add-question-btn" onClick={addQuestion}>
              + Add Question
            </button>
        </div>
      </div>

      <div className="question-list">
        {questions.map((question) => (
          <div key={question.id} className="question-card">
            <h4>Question {question.id}</h4>
            <p>{question.text}</p>
            <p>{question.type}</p>
            <button className="edit-btn">Edit</button>
          </div>
        ))}
      </div>

      <button className="save-quiz-btn">Save Quiz</button>
      <p>Click 'Save Quiz' to save your progress. Ensure all questions are finalized before submission.</p>
    </div>
  );
}

export default QuizDesignPage;
*/
import React, { useState } from "react";
import "./QuizDesignPage.css";
import Header2 from "../Header2/Header2";
import Footer from "../LandingPage/Components/Footer"


function QuizDesignPage() {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      type: "Multiple Choice",
      text: "What is the capital of France?",
    },
    {
      id: 2,
      type: "True/False",
      text: "Is the Earth flat?",
    },
    {
      id: 3,
      type: "Open-ended",
      text: "Explain the theory of relativity.",
    },
  ]);

  const [newQuestionText, setNewQuestionText] = useState("");
  const [newQuestionType, setNewQuestionType] = useState("Multiple Choice");

  const addQuestion = () => {
    if (newQuestionText.trim() !== "") {
      setQuestions([
        ...questions,
        {
          id: questions.length + 1,
          type: newQuestionType,
          text: newQuestionText,
        },
      ]);
      setNewQuestionText(""); // Réinitialiser le champ de texte
    }
  };

  return (
    <>
    <Header2 />
    <div className="quiz-design-page">
      <h2>Quiz Design Interface</h2>

      <div className="container">
        <div className="input-group">
          <input
            type="text"
            id="input"
            autoComplete="off"
            value={newQuestionText}
            onChange={(e) => setNewQuestionText(e.target.value)}
          />
          <label htmlFor="input">Enter question text here...</label>

          <select
            className="question-type-select"
            value={newQuestionType}
            onChange={(e) => setNewQuestionType(e.target.value)}
          >
            <option value="Multiple Choice">Multiple Choice</option>
            <option value="True/False">True/False</option>
            <option value="Open-ended">Open-ended</option>
          </select>

          <button className="add-question-btn" onClick={addQuestion}>
            + Add Question
          </button>
        </div>
      </div>

      <div className="question-list">
        {questions.map((question) => (
          <div key={question.id} className="question-card">
            <h4>Question {question.id}</h4>
            <p>{question.text}</p>
            <p>{question.type}</p>
            <button className="edit-btn">Edit</button>
          </div>
        ))}
      </div>

      <button className="save-quiz-btn">Save Quiz</button>
      <p>Click 'Save Quiz' to save your progress. Ensure all questions are finalized before submission.</p>
    </div>
    <Footer />

  </>);
}

export default QuizDesignPage;
