import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Quizz.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Quizz() {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pdfFile, setPdfFile] = useState(null);
    const [numQuestions, setNumQuestions] = useState(10);
    const [score, setScore] = useState(null);
    const [stats, setStats] = useState(null);
    const [answersDetails, setAnswersDetails] = useState([]);
    const [language, setLanguage] = useState('english');

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    };

    const handleFileChange = (event) => {
        setPdfFile(event.target.files[0]);
    };

    const handleNumQuestionsChange = (event) => {
        setNumQuestions(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!pdfFile) return;

        setLoading(true);
        setQuestions([]);
        setSelectedAnswers([]);
        setScore(null);
        setStats(null);
        setAnswersDetails([]);

        const formData = new FormData();
        formData.append('pdf', pdfFile);
        formData.append('numQuestions', numQuestions);
        formData.append('language', language);

        try {
            const response = await fetch('http://localhost:3001/upload', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            if (result.error) {
                throw new Error(result.error);
            }

            setQuestions(result.questions || []);
            setSelectedAnswers(new Array(result.questions.length).fill(null));
            setAnswersDetails(result.questions || []);
        } catch (error) {
            alert(`Error: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    const handleOptionClick = (optionKey) => {
        setSelectedAnswers(prevAnswers => {
            const newAnswers = [...prevAnswers];
            newAnswers[currentQuestionIndex] = optionKey;
            return newAnswers;
        });
    };

    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const handleFinish = () => {
        const attempted = selectedAnswers.filter(answer => answer !== null).length;
        const correct = selectedAnswers.filter((answer, index) => answer === questions[index].correct).length;
        const incorrect = attempted - correct;
        const percentage = Math.round((correct / questions.length) * 100);

        setScore(percentage);
        setStats({
            attempted,
            correct,
            incorrect,
        });
    };

    return (
        <div className="App">
            <h1>Quiz Game</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="pdf">Upload PDF (PDF only):</label>
                <input type="file" id="pdf" name="pdf" accept="application/pdf" onChange={handleFileChange} />
                <br /><br />
                <label htmlFor="numQuestions">Number of Questions:</label>
                <input type="number" id="numQuestions" name="numQuestions" min="1" value={numQuestions} onChange={handleNumQuestionsChange} required />
                <br /><br />
                <label htmlFor="language">Preferred Language:</label>
                <input type="text" id="language" name="language" value={language} onChange={handleLanguageChange} placeholder="e.g., Hindi, Spanish" required />
                <br /><br />
                <button type="submit">Submit</button>
            </form>

            {loading && <div id="loading" className="spinner"></div>}

            {questions.length > 0 && (
                <div id="questionsContainer">
                    <div id="questionNumber" className="question-number">
                        Question {currentQuestionIndex + 1} out of {questions.length}
                    </div>

                    <div id="questionContainer" className="question-container">
                        <div className="question">{questions[currentQuestionIndex]?.ques}</div>
                        <ul id="optionsContainer" className="options">
                            {['o1', 'o2', 'o3', 'o4'].map(optionKey => {
                                const option = questions[currentQuestionIndex]?.[optionKey];
                                return option ? (
                                    <li
                                        key={optionKey}
                                        onClick={() => handleOptionClick(optionKey)}
                                        className={selectedAnswers[currentQuestionIndex] === optionKey ? 'selected' : ''}
                                    >
                                        {option}
                                    </li>
                                ) : null;
                            })}
                        </ul>
                    </div>

                    <div className="buttons">
                        <button onClick={handlePrev} disabled={currentQuestionIndex === 0}>Previous</button>
                        <button onClick={handleNext} disabled={currentQuestionIndex === questions.length - 1}>Next</button>
                        {currentQuestionIndex === questions.length - 1 && (
                            <button onClick={handleFinish}>Finish Quiz</button>
                        )}
                    </div>

                    {score !== null && (
                        <div id="scoreCard" className="score-card">
                            <div className="score-wheel" style={{ '--score': `${score}%` }}>
                                <div className="score-wheel-inner">
                                    <div className="score-text">{score}%</div>
                                </div>
                            </div>
                            <div className="score-stats">
                                <div>Attempted Questions: {stats.attempted}</div>
                                <div>Correct Answers: {stats.correct}</div>
                                <div>Incorrect Answers: {stats.incorrect}</div>
                            </div>
                            <div className="answers-details">
                                {questions.map((question, index) => {
                                    const isCorrect = selectedAnswers[index] === question.correct;
                                    return (
                                        <div key={index} className="answer-detail">
                                            <div className="question-text">
                                            {isCorrect ? (
                                                    <i className="fas fa-check-circle icon correct-icon"></i>
                                                ) : (
                                                    <i className="fas fa-times-circle icon incorrect-icon"></i>
                                                )}{question.ques}
                                            </div>
                                            <div className="options-list">
                                                {['o1', 'o2', 'o3', 'o4'].map(optionKey => (
                                                    <div key={optionKey} className={`option ${optionKey === question.correct ? 'correct' : ''}`}>
                                                        {question[optionKey]}
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="selected-answer">
                                                {/* {isCorrect ? (
                                                    <i className="fas fa-check-circle icon correct-icon"></i>
                                                ) : (
                                                    <i className="fas fa-times-circle icon incorrect-icon"></i>
                                                )} */}
                                                Your answer: {selectedAnswers[index] ? question[selectedAnswers[index]] : 'Not answered'}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default Quizz;
