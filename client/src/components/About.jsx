import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import "./About.css";

const About = () => {
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
    <div className="about-us-container">
      <section className="about-us-intro">
        <h1>
          About <span className="Bright">Bright</span>
          <span className="Ways">Ways</span>
        </h1>
        <p>
          Welcome to BrightWays, an application dedicated to supporting children
          with special needs and their caregivers. Our mission is to provide
          valuable resources, tools, and a supportive community to help children
          learn, grow, and thrive.
        </p>
      </section>

      <section className="about-us-mission">
        <h2>Our Mission</h2>
        <p>
          At BrightWays, we believe every child deserves the opportunity to
          reach their full potential. Our goal is to create an inclusive
          environment where children with special needs can access educational
          tools, engage in interactive learning, and find joy in their daily
          activities.
        </p>
      </section>

      <section className="about-us-features">
        <h2>What We Offer</h2>
        <ul>
          <li>
            Interactive learning modules tailored for children with special
            needs
          </li>
          <li>Supportive community and resources for caregivers</li>
          <li>Customizable tools to enhance learning experiences</li>
          <li>Easy-to-use interface designed with accessibility in mind</li>
        </ul>
      </section>

      <section className="about-us-team">
        <h2>Meet the Team</h2>

        <div className="team-member">
          <img
            src="https://res.cloudinary.com/dlhktanwi/image/upload/v1725082694/WhatsApp_Image_2024-08-31_at_11.07.51_rhrxjq.jpg"
            alt="Priyanshu Yadav"
          />
          <h3>Priyanshu Yadav</h3>
          <p>Team Leader</p>
        </div>

        <div className="team-member">
          <img
            src="https://res.cloudinary.com/dnsjdvzdn/image/upload/v1721506373/kar01_c2gf57.png"
            alt="Kartikey Pandey"
          />
          <h3>Kartikey Pandey</h3>
          <p>Full-Stack Developer</p>
        </div>

        <div className="team-member">
          <img
            src="https://res.cloudinary.com/dlhktanwi/image/upload/v1725082766/WhatsApp_Image_2024-08-31_at_11.08.58_wwz6gu.jpg"
            alt="Priyanka Yadav"
          />
          <h3>Priyanka Yadav</h3>
          <p>Full-Stack Developer</p>
        </div>

        <div className="team-member">
          <img
            src="https://res.cloudinary.com/dlhktanwi/image/upload/v1725082635/WhatsApp_Image_2024-08-31_at_11.05.49_lptqsi.jpg"
            alt="Arman Ahmed"
          />
          <h3>Arman Ahmed</h3>
          <p>Frontend Developer</p>
        </div>

        <div className="team-member">
          <img
            src="https://res.cloudinary.com/dlhktanwi/image/upload/v1725082957/WhatsApp_Image_2024-08-31_at_11.12.08_l0hvvy.jpg"
            alt="Vaishali Yadav"
          />
          <h3>Vaishali Yadav</h3>
          <p>Frontend Developer</p>
        </div>

        <div className="team-member">
          <img
            src="https://res.cloudinary.com/dlhktanwi/image/upload/v1725082953/WhatsApp_Image_2024-08-31_at_11.12.20_vdta4v.jpg"
            alt="Riya"
          />
          <h3>Riya</h3>
          <p>Frontend Developer</p>
        </div>
      </section>

      <section className="about-us-contact">
        <h2>Contact Us</h2>
        <p>
          Have any questions or feedback? We would love to hear from you! Please
          contact us at{" "}
          <a href="mailto:brightwayscontact@gmail.com">
            brightwayscontact@gmail.com
          </a>
        </p>
      </section>
    </div>
  );
};

export default About;
