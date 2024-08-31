import React from 'react';
import './Fifth.css';
import {Link} from "react-router-dom";

const Fifth = () => {
    return (
        <section style={styles.section}>
            <div style={styles.container}></div>

            <h2 className="whyus">Start <span className="text-teal-500">Your</span> <span
                className="text-indigo-950">Quiz</span> Now</h2>

            <p className="textOutline0"
               style={{...styles.textOutline, fontFamily: 'Segoe UI, sans-serif', fontWeight: 700}}>
                <br/>

                <ul className="start">
                    <li> AI-Powered Quiz Creation: Automatically generate quizzes from PDFs using advanced AI
                        technology.
                    </li>
                    <li> Multilingual Support: Quizzes can be created in the desired language, catering to diverse
                        language preferences.
                    </li>
                    <li> Customizable Content: Tailor quizzes to match the content and structure of the uploaded PDF.
                    </li>
                    <li> Interactive Learning: Enhance engagement with quizzes that align with the learner’s language
                        and comprehension level.
                    </li>
                    <li> Efficient and Accessible: Simplify quiz creation, making it quick and easy for educators and
                        learners.
                    </li>
                </ul>

                <br/><br/> <br/><br/>
                <div className="containers">
                    <div className="rectangle"><Link activeClassName="active" to="/quizz">
                        <button>
                            <label className="custom-file-upload">
                                <span className="button">Start Your Quiz</span>
                            </label>
                        </button>
                    </Link>

                    </div>
                </div>
                <br/><br/>
            </p>
        </section>
    );
};

const styles = {
    section: {
        padding: '50px 20px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        textAlign: 'center',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    text: {
        textAlign: 'left',
        listStyleType: 'none',
        padding: '0',
        margin: '0 auto',
        maxWidth: '600px',
        lineHeight: '1.8',
        fontSize: '18px',
    },

    container: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    imageHover: {
        transform: 'scale(1.04)',
    },
};

export default Fifth;