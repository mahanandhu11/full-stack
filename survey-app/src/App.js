import React, { useState } from "react";
import "./App.css";

function App() {
  const questions = [
    {
      question: "1. What is your favourite programming language?",
      options: ["Java", "Python", "C++", "JavaScript"],
    },
    {
      question: "2. Which operating system do you use?",
      options: ["Windows", "Linux", "Mac"],
    },
    {
      question: "3. How many hours do you use the internet daily?",
      options: ["1-2 Hours", "3-5 Hours", "More than 5 Hours"],
    },
    {
      question: "4. Which browser do you use?",
      options: ["Chrome", "Edge", "Firefox"],
    },
    {
      question: "5. Are you satisfied with online learning?",
      options: ["Yes", "No"],
    },
  ];

  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (qIndex, option) => {
    setAnswers({ ...answers, [qIndex]: option });
  };

  const submitSurvey = () => {
    setSubmitted(true);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Online Survey Application</h1>
        <h3>Answer Any 5 Questions</h3>

        {questions.map((q, index) => (
          <div className="question" key={index}>
            <p><b>{q.question}</b></p>

            {q.options.map((option, i) => (
              <label key={i}>
                <input
                  type="radio"
                  name={`question${index}`}
                  value={option}
                  onChange={() => handleChange(index, option)}
                />
                {option}
              </label>
            ))}
          </div>
        ))}

        <button onClick={submitSurvey}>Submit Survey</button>

        {submitted && (
          <h2 className="success">
            Thank You! Survey Submitted Successfully.
          </h2>
        )}
      </div>
    </div>
  );
}

export default App;