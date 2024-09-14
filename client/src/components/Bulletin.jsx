import React from 'react';
import './Bulletin.css';

const getRandomDate = () => {
    const start = new Date(2024, 0, 1);
    const end = new Date();
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();
};

const bulletins = [
    { key: 1, title: "Course Launch", content: "IIT-Roorkee, Jaro Education jointly launch Data Science and AI course", updateDate: getRandomDate(), link: "https://www.jaroeducation.com/post-graduate-certificate-programme-in-applied-data-science-ai-iit-roorkee/", backgroundImage: "url('https://c.ndtvimg.com/2024-08/79n1g44g_iit-roorkee_625x300_29_August_24.jpeg')" },
    { key: 2, title: "Scholarship Alert", content: "UP Scholarship 2024 for Pre-Matric and Post-Matric Scheme", updateDate: getRandomDate(), link: "https://scholarship.up.gov.in/LoginStudentPost.aspx", backgroundImage: "url('https://kashmirstudentalerts.com/wp-content/uploads/2024/07/Pre-Matric-Post-Matric-Scholarship-2024_-Check-Application-process-Eligibility-Last-Date.jpg')" },
    { key: 3, title: "JEE Main Update", content: "NTA is going to announce dates of JEE mains April Session soon!", updateDate: getRandomDate(), link: "https://jeemain.nta.ac.in/", backgroundImage: "url('https://resize.indiatvnews.com/en/centered/newbucket/1200_675/2024/04/jee-mains-2024-session-2-result-soon-1713441392.jpg')" },
    { key: 4, title: "Laptop distribution", content: "Uttar Pradesh government is distributing Laptops to the district toppers.", updateDate: getRandomDate(), link: "https://sarkariyojn.co.in/up-free-laptop-yojana-2024/", backgroundImage: "url('https://th-i.thgim.com/public/migration_catalog/article11981504.ece/alternates/FREE_1200/28TH_LAPTOP')" },
    { key: 5, title: "Reminder", content: "CBSE Class 10th results releasing soon!", updateDate: getRandomDate(), link: "https://cbseresults.nic.in/2024/CBSE10th/CBSE10thLogin?resultType=cbse10", backgroundImage: "url('https://static.toiimg.com/thumb/msid-109813508,width-1280,height-720,resizemode-4/109813508.jpg')" },
    { key: 6, title: "Grab the Opportunity", content: "Edunext academy is conducting National Level Olympiad for Intermediate students. Apply now", updateDate: getRandomDate(), link: "https://school.careers360.com/articles/olympiad-exams", backgroundImage: "url('https://i0.wp.com/blog.schoolconnectonline.com/wp-content/uploads/2024/05/olympiad-4.png?fit=1000%2C1000&ssl=1')" },
];

const Bulletin = () => {
    return (
        <div className='bulletin-board'>
            <h1 className="bulletin-heading">Opportunities in the Spotlight!</h1>
            <div className="bulletin-container">
                {bulletins.map((bulletin) => (
                    <div key={bulletin.key} className="bulletin-card" style={{ backgroundImage: bulletin.backgroundImage }}>
                        <div className="bulletin-card-content">
                            <h2 className="bulletin-title">{bulletin.title}</h2>
                            <p className="bulletin-content">{bulletin.content}</p>
                            <p className="bulletin-date">Last updated: {bulletin.updateDate}</p>
                            <a href={bulletin.link} className="bulletin-link" target="_blank" rel="noopener noreferrer">Read more</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Bulletin;
