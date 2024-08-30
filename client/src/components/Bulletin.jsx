import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import './Bulletin.css';

const bulletins = [
  {
    key: 1,
    title: "Course Launch",
    content: "IIT-Roorkee, Jaro Education jointly launch Data Science and AI course",
  },
  {
    key: 2,
    title: "Scholarship Alert",
    content: "UP Scholarship 2024 for Pre-Matric and Post-Matric Scheme",
  },
  {
    key: 3,
    title: "Results",
    content: "NEET PG Scorecard 2024: When is NBE releasing scorecard today at natboard.edu.in",
  },
  {
    key: 4,
    title: "JEE Main Update",
    content: "NTA is going to announce dates of JEE mains April Session soon!",
  },
  {
    key: 5,
    title: "Laptop distribution",
    content: "Uttar Pradesh government is distributing Laptops to the district toppers.",
  },
  {
    key: 6,
    title: "Reminder",
    content: "CBSE Class 10th results releasing soon!",
  },
  {
    key: 7,
    title: "Grab the Opportunity",
    content: "Edunext academy is conducting National Level Olympiad for Intermediate students. Apply now",
  },
];


const Bulletin = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <section className="about-section"><br /><br />
        <h2>Latest Bulletins</h2>
        <p>We are a team CW of passionate technologists and HR professionals dedicated to making the job application process smoother and more successful for everyone. Our mission is to leverage the power of AI to help you achieve your career goals.</p><br /><br />
        <div className="members">

        </div>
      </section>

      <section className="bulletin-section">
        <h2>Latest Bulletins</h2>
        <div className="scroll-container">
          <div className="scroll-content">
            {bulletins.map((bulletin) => (
              <div key={bulletin.key} className="note">
                <h3>{bulletin.title}</h3>
                <p>{bulletin.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bulletin;
