import React from 'react';
import './Bulletin.css';

const getRandomDate = () => {
    const start = new Date(2024, 0, 1); // Starting date
    const end = new Date(); // Today's date
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();
};

const bulletins = [
    { key: 1, title: "Course Launch", content: "IIT-Roorkee, Jaro Education jointly launch Data Science and AI course", updateDate: getRandomDate(), link: "https://www.jaroeducation.com/post-graduate-certificate-programme-in-applied-data-science-ai-iit-roorkee/" },
    { key: 2, title: "Scholarship Alert", content: "UP Scholarship 2024 for Pre-Matric and Post-Matric Scheme", updateDate: getRandomDate(), link: "https://scholarship.up.gov.in/LoginStudentPost.aspx" },
    { key: 3, title: "JEE Main Update", content: "NTA is going to announce dates of JEE mains April Session soon!", updateDate: getRandomDate(), link: "https://jeemain.nta.ac.in/" },
    { key: 4, title: "Laptop distribution", content: "Uttar Pradesh government is distributing Laptops to the district toppers.", updateDate: getRandomDate(), link: "https://sarkariyojn.co.in/up-free-laptop-yojana-2024/" },
    { key: 5, title: "Reminder", content: "CBSE Class 10th results releasing soon!", updateDate: getRandomDate(), link: "https://cbseresults.nic.in/2024/CBSE10th/CBSE10thLogin?resultType=cbse10" },
    { key: 6, title: "Grab the Opportunity", content: "Edunext academy is conducting National Level Olympiad for Intermediate students. Apply now", updateDate: getRandomDate(), link: "https://school.careers360.com/articles/olympiad-exams" },
];

const Bulletin = () => {
    return (
        <div className='bulletin-board'>
            <h1 className="bulletin-heading">Opportunities in the Spotlight!</h1>
            <div className="bulletin-container">
                {bulletins.map((bulletin) => (
                    <div key={bulletin.key} className="bulletin-card">
                        <h2 className="bulletin-title">{bulletin.title}</h2>
                        <p className="bulletin-content">{bulletin.content}</p>
                        <p className="bulletin-date">Last updated: {bulletin.updateDate}</p>
                        <a href={bulletin.link} className="bulletin-link" target="_blank" rel="noopener noreferrer">Read more</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Bulletin;
