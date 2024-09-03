import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Resultpage.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Resultpage() {
  const location = useLocation();
  const { questions, responses } = location.state || { questions: [], responses: {} };
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [score, setScore] = useState(null);
  const [stats, setStats] = useState(null);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    if (questions.length > 0 && Object.keys(responses).length > 0) {
      const processedAnswers = questions.map((question, index) => ({
        question: question.ques,
        correct: question.correct,
        selected: responses[index] || null,
        options: ['o1', 'o2', 'o3', 'o4'].map((key) => ({
          option: question[key],
          key,
        })),
      }));

      const correctCount = processedAnswers.filter(
          (answer) => answer.selected === answer.correct
      ).length;

      const calculatedScore = Math.round((correctCount / questions.length) * 100);

      setSelectedAnswers(processedAnswers);
      setScore(calculatedScore);
      setStats({
        attempted: Object.keys(responses).length,
        correct: correctCount,
        incorrect: Object.keys(responses).length - correctCount,
      });

      // Set feedback based on score
      if (calculatedScore >= 95) {
        setFeedback('Superb! You nailed it!');
      } else if (calculatedScore >= 70) {
        setFeedback('Good job! Just a bit of improvement needed.');
      } else if (calculatedScore >= 60) {
        setFeedback('Keep going! You can improve further.');
      } else {
        setFeedback('Needs more practice. Keep trying!');
      }
    }
  }, [questions, responses]);

  return (
      <div className="result-page">
        <h1 className="main-Heading">
          <span className='Quiz'>Quiz</span> <span className='Analysis'>Analysis</span>
        </h1>
        {score !== null && (
            <div className="score-card">
              <div className="circular-bar">
                <svg viewBox="0 0 36 36" className="circular-chart">
                  <path
                      className="circle-bg"
                      d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                      className="circle"
                      strokeDasharray={`${score}, 100`}
                      d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <text x="18" y="20.35" className="percentage">
                    {score}%
                  </text>
                </svg>
              </div>
              <div className="feedback">{feedback}</div>
              <div className="score-stats">
                <div className="stat-item">
                  <span className="stat-label">Attempted:</span> {stats.attempted}
                </div>
                <div className="stat-item">
                  <span className="stat-label">Correct:</span> {stats.correct}
                </div>
                <div className="stat-item">
                  <span className="stat-label">Incorrect:</span> {stats.incorrect}
                </div>
              </div>
              <div className="answers-details">
                {selectedAnswers.map((answer, index) => (
                    <div
                        key={index}
                        className={`answer-detail ${answer.selected === answer.correct ? 'correct' : 'incorrect'}`}
                    >
                      <div className="question-text">
                        {answer.selected === answer.correct ? (
                            <i className="fas fa-check-circle icon correct-icon"></i>
                        ) : (
                            <i className="fas fa-times-circle icon incorrect-icon"></i>
                        )}
                        {answer.question}
                      </div>
                      <div className="options-list">
                        {answer.options.map(({ option, key }) => (
                            <div
                                key={key}
                                className={`option ${key === answer.correct ? 'correct' : ''} ${key === answer.selected ? 'selected' : ''}`}
                            >
                              {option}
                            </div>
                        ))}
                      </div>
                      <div className="selected-answer">
                        <span className="answer-label">Your answer:</span>
                        {answer.selected ? answer.options.find((opt) => opt.key === answer.selected)?.option : 'Not answered'}
                      </div>
                    </div>
                ))}
              </div>
            </div>
        )}
      </div>
  );
}

export default Resultpage;
