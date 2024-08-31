import React from 'react';

const Forth = () => {
    return (
        <section style={styles.section}>

            <div style={styles.leftSide}><br /><br />
                <img src="https://res.cloudinary.com/dlhktanwi/image/upload/v1725051747/42cfa1232394b3ac8fb5e7e26b7f2b61_mikfox.jpg" alt="How It Works" style={styles.image} /><br /><br /><br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <h2 style={styles.text}>Join Our Community</h2><br />
                <ol style={styles.text}>
                    <li>Community-Driven Learning: Connect with other learners.</li>
                    <li>Share Achievements: Celebrate your milestones together.</li>
                    <li>Explore New Ways: Make learning enjoyable and productive.</li>

                </ol>
            </div>
            <div style={styles.rightSide}><br /><br />
                <h2 style={styles.text}>Start Your Journey Today!</h2><br />

                <ul style={styles.text}><br />
                    <li>Sign Up Now: Discover a world where learning is fun and engaging.</li>
                    <li>BrightWays: A new way to learn with personalized and engaging content.</li>
                   <br /><br /><br />
                </ul>
                <img src="https://res.cloudinary.com/dlhktanwi/image/upload/v1725017657/WhatsApp_Image_2024-08-30_at_17.02.18_ybqlil.jpg" alt="Resume Score" style={styles.rightImage} /><br /><br />

            </div>

        </section>
    );
};

const styles = {
    section: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
    },
    leftSide: {
        width: '48%',
        marginRight: '2%',

        padding: '10px',
        borderRadius: '10px',
    },
    rightSide: {
        width: '48%',

        padding: '10px',
        borderRadius: '10px',
    },
    image: {
        width: '65%',
        borderRadius: '15px',
    },
    rightImage: {
        width: '65%',
        borderRadius: '15px',
        marginTop: '20px',
    },
    text: {
        color: 'white',
        textAlign: 'left',
    },
};

export default Forth;