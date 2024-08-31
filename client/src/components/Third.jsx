import React from 'react';

const Third = () => {
    return (
        <section style={styles.section}>
            <h2>How it Works?</h2><br></br>
            <p></p>
            <ol style={styles.ol}>
                <li style={styles.li}>
                    Learn and Play: Dive into fun, multilingual quizzes based on the notes, earn points, and track
                    progress.
                </li>
                <br></br>
                <li style={styles.li}>
                    Upload Your Content: Simply upload a PDF or image of any document.
                </li>
                <br></br>
                <li style={styles.li}>
                    Earn Rewards: Redeem points for badges, certificates, and other exciting rewards!
                </li>
                <br></br>
                <li style={styles.li}>
                    Enhance and Engage: Watch as our AI-powered enhancer converts the text into interactive, illustrated
                    notes in your preferred language.
                </li>
            </ol>
            <br/><br/>
            <div style={styles.container}>
                <img
                    src="https://res.cloudinary.com/dlhktanwi/image/upload/v1725049038/a7d473f8-a507-42b3-a855-ff63f3b59198_r5i2lb.jpg"
                    alt="Left Image"
                    style={styles.image}
                    onMouseOver={(e) => e.currentTarget.style.transform = styles.imageHover.transform}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'none'}
                />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img
                    src="https://res.cloudinary.com/dlhktanwi/image/upload/v1725049974/How_to_build_a_3D_website_with_no-code_using_AI_qist9l.jpg"
                    alt="Right Image"
                    style={styles.image}
                    onMouseOver={(e) => e.currentTarget.style.transform = styles.imageHover.transform}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'none'}
                />
            </div>
        </section>
    );
};

const styles = {
    section: {
        padding: '50px 20px',
        textAlign: 'left',
        color: '#fff',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
    },
    ol: {
        listStyleType: 'lower-roman', // This sets the list style to Roman numerals
        paddingLeft: '20px',
        marginTop: '20px',
    },
    li: {
        fontSize: '18px',
        fontWeight: '500',
        padding: '10px 20px',
        marginBottom: '10px',
        borderRadius: '10px',
        backgroundColor: 'rgba(23, 144, 227, 0.1)',
        transition: 'background-color 0.3s ease-in-out, transform 0.3s ease-in-out',
        cursor: 'pointer',
    },
    liHover: {
        backgroundColor: 'rgba(23, 144, 227, 0.2)',
        transform: 'translateY(-5px)',
    },
    image: {
        borderRadius: '15px',
        border: '1px solid #000',
        width: '35%',
        marginLeft : '50px',
        height: '50%',
        marginTop: '20px',
        transition: 'transform 0.8s ease-in-out',
    },
    imageHover: {
        transform: 'scale(1.03)',
    },
    video: {
        width: '37%',

        height: 'auto',
        margin: '50px',
        transition: 'transform 0.8s ease-in-out',
        borderRadius: '15px',
        border: '1px solid #000',
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Third;