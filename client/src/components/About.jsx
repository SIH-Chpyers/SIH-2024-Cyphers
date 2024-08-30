import React from 'react';
import './About.css';

// import priyanshu from '../images/priyanshu.png';
// import kartikey from '../images/kartikey.png';
// import priyanka from '../images/priyanka.png';
// import arman from '../images/arman.png';
// import vaishali from '../images/vaishali.png';
// import riya from '../images/riya.png';

const About = () => {
    return (
        <div className="about-us-container">
            <section className="about-us-intro">
                <h1>About BrightWays</h1>
                <p>
                    Welcome to BrightWays, an application dedicated to supporting children with special needs and their caregivers. Our mission is to provide valuable resources, tools, and a supportive community to help children learn, grow, and thrive.
                </p>
            </section>

            <section className="about-us-mission">
                <h2>Our Mission</h2>
                <p>
                    At BrightWays, we believe every child deserves the opportunity to reach their full potential. Our goal is to create an inclusive environment where children with special needs can access educational tools, engage in interactive learning, and find joy in their daily activities.
                </p>
            </section>

            <section className="about-us-features">
                <h2>What We Offer</h2>
                <ul>
                    <li>Interactive learning modules tailored for children with special needs</li>
                    <li>Supportive community and resources for caregivers</li>
                    <li>Customizable tools to enhance learning experiences</li>
                    <li>Easy-to-use interface designed with accessibility in mind</li>
                </ul>
            </section>

            <section className="about-us-team">
                <h2>Meet the Team</h2>
                <div className="team-member">
    <img src="https://res.cloudinary.com/dnsjdvzdn/image/upload/v1725003949/logo_rhifri.png" alt="Priyanshu Yadav" />
    <h3>Priyanshu Yadav</h3>
    <p>Team Leader</p>
</div>

<div className="team-member">
                    <img src="https://res.cloudinary.com/dnsjdvzdn/image/upload/v1725003949/logo_rhifri.png" alt="Team Member" />
                    <h3>Kartikey Pandey</h3>
                    <p>Lead Developer</p>
                </div>
                <div className="team-member">
                    <img src="https://res.cloudinary.com/dnsjdvzdn/image/upload/v1725003949/logo_rhifri.png" alt="Team Member" />
                    <h3>Priyanka Yadav</h3>
                    <p>Lead Developer</p>
                </div>
                <div className="team-member">
                    <img src="https://res.cloudinary.com/dnsjdvzdn/image/upload/v1725003949/logo_rhifri.png" alt="Team Member" />
                    <h3>Arman Ahmed</h3>
                    <p>Frontend Developer</p>
                </div>
                <div className="team-member">
                    <img src="https://res.cloudinary.com/dnsjdvzdn/image/upload/v1725003949/logo_rhifri.png" alt="Team Member" />
                    <h3>Vaishali Yadav</h3>
                    <p>Backend Developer</p>
                </div>
                <div className="team-member">
                    <img src="https://res.cloudinary.com/dnsjdvzdn/image/upload/v1725003949/logo_rhifri.png" alt="Team Member" />
                    <h3>Riya</h3>
                    <p>Frontend Developer</p>
                </div>
            </section>

            <section className="about-us-contact">
                <h2>Contact Us</h2>
                <p>
                    Have any questions or feedback? We would love to hear from you! Please contact us at <a href="mailto:brightwayscontact@gmail.com">brightwayscontact@gmail.com</a>.
                </p>
            </section>
        </div>
    );
}

export default About;
