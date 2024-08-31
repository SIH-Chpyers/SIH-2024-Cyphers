
import React from 'react';
import './OurJourney.css';

// import im1 from './im1.jpeg'; // Adjust the path according to your folder structure
// import im2 from './im2.jpeg';/**/
// import im3 from './im3.jpeg';

const OurJourney = () => {
    return (
        <div className="our-journey-container">
            <section className="journey-intro">
                <h1>Our Journey</h1>
                <p>
                    Our journey began with a shared passion for making education accessible and enjoyable for all children. Recognizing the unique challenges faced by special needs children, we set out to create a platform that could cater to their specific learning needs.
                </p>
            </section>

            <section className="journey-story">
                <h2>Understanding the Needs</h2>
                <p>
                    We conducted surveys with children, educators, and caregivers to understand the difficulties they encounter in educational settings. These surveys revealed that many children face challenges such as understanding complex concepts, staying focused, and engaging with traditional learning materials.
                </p>
                <p>
                    Armed with these insights, we dedicated ourselves to developing a solution that is inclusive, interactive, and effective. Our project is designed to support all children, with a special focus on those with unique learning needs.
                </p>
            </section>

            <section className="journey-gallery">
                <h2>Our Journey in Pictures</h2>
                <div className="gallery">
                    <img src="https://res.cloudinary.com/dnsjdvzdn/image/upload/v1724779077/class2_tqljlw.jpg" alt="Team working together" />
                    <img src="https://res.cloudinary.com/dnsjdvzdn/image/upload/v1724779076/class_idz9zn.jpg" alt="Conducting surveys with children" />
                    <img src="https://res.cloudinary.com/dnsjdvzdn/image/upload/v1724779076/team2_setele.jpg" alt="Developing the project" />
                </div>
            </section>
        </div>
    );
};

export default OurJourney;
