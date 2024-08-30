import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Quizpage.css';

const Quizpage = () => {
    const [questions, setQuestions] = useState([]);
    const [responses, setResponses] = useState({});
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const storedQuestions = JSON.parse(localStorage.getItem('questions'));
        if (storedQuestions) {
          setQuestions(storedQuestions);
        } else {
          navigate('/'); // Navigate back if no questions found
        }
      }, [navigate]);

    const handleOptionChange = (questionIndex, option) => {
        setResponses((prevResponses) => ({
            ...prevResponses,
            [questionIndex]: option,
        }));
    };

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const handleSubmit = () => {
        navigate('/score', { state: { questions, responses } });
    };

    const renderQuestionNumbers = () => (
        <div className="question-numbers">
            {questions.map((_, index) => (
                <button
                    key={index}
                    className={`question-number ${responses[index] ? 'answered' : ''}`}
                    onClick={() => setCurrentQuestion(index)}
                >
                    {index + 1}
                </button>
            ))}
        </div>
    );

    const getAttemptedCount = () => {
        return Object.keys(responses).length;
    };

    return (
        <div className="quiz-page">
            <h1>Quiz</h1>
            <div className="quiz-container">
                <div className="question-section">
                    {questions.length > 0 && (
                        <div className="question-container">
                            <p>Question {currentQuestion + 1}: {questions[currentQuestion].ques}</p>
                            <div className="options">
                                {['o1', 'o2', 'o3', 'o4'].map((opt) => (
                                    <label key={opt}>
                                        <input className='option-div'
                                            type="radio"
                                            name={`question-${currentQuestion}`}
                                            value={opt}
                                            checked={responses[currentQuestion] === opt}
                                            onChange={() => handleOptionChange(currentQuestion, opt)}
                                        />
                                        <span className="option-text">{questions[currentQuestion][opt]}</span>
                                    </label>
                                ))}
                            </div>
                            <div className="navigation-buttons">
                                <button
                                    type="button"
                                    onClick={handlePrevious}
                                    disabled={currentQuestion === 0}
                                >
                                    Previous
                                </button>
                                {currentQuestion < questions.length - 1 ? (
                                    <button type="button" onClick={handleNext}>
                                        Next
                                    </button>
                                ) : (
                                    <button type="button" onClick={handleSubmit}>
                                        Submit
                                    </button>
                                )}
                            </div>
                        </div>
                    )}
                </div>
                <div className="sidebar">
                    <h2>Questions</h2>
                    {renderQuestionNumbers()}
                    <div className="instruction">
                        <div className="status-item">
                            <span className="status-indicator not-answered"></span> Not Answered
                        </div>
                        <div className="status-item">
                            <span className="status-indicator answered"></span> Answered
                        </div>
                    </div>
                    <div className="attempted-info">
                        <p>
                            <span className="info-label">Attempted:</span> {getAttemptedCount()} / {questions.length}
                        </p>
                        <p>
                            <span className="info-label">Not Attempted:</span> {questions.length - getAttemptedCount()}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quizpage;
