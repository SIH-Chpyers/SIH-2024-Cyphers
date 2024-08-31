import React from 'react';
import './Second.css';

const Second = () => {
  return (
      <section style={styles.section}>
          <div style={styles.container}>
              <img
                  src="https://res.cloudinary.com/dnsjdvzdn/image/upload/v1721506358/Analyzing_sk48dh.gif"
                  alt="Left Image"
                  style={styles.image}
                  onMouseOver={(e) => e.currentTarget.style.transform = styles.imageHover.transform}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'none'}
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <img
                  src="https://res.cloudinary.com/dlhktanwi/image/upload/v1725046115/c681dea2d63af62a11baee19065bdc03-removebg-preview_ghfgxe.png"
                  alt="Right Image"
                  style={styles.image}
                  onMouseOver={(e) => e.currentTarget.style.transform = styles.imageHover.transform}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'none'}
              />
          </div>

          <h2 className="whyus">Why<span className="text-teal-500">Bright</span><span
              className="text-indigo-950">Ways</span> ?</h2>

          <p className="textOutline0"
             style={{...styles.textOutline, fontFamily: 'Segoe UI, sans-serif', fontWeight: 700}}>
              <br></br>


              Unlike other platforms, our website is uniquely designed for students with learning disorders.<br/> We
              focus on
              making information digestible, interactive, and engaging.

              Personalization: <br/>The adaptability of our content means students are not forced into a
              one-size-fits-all
              approach.<br/>
              Motivational Reward System: Our instant rewards encourage students to engage more actively<br/> in their
              learning.
              Accessibility: With multilingual support and a voice assistant, we make sure <br/>learning is inclusive
              and
              accessible to all.
              We believe our website doesn’t just teach—it inspires,<br/> motivates, and adapts to the needs of each
              student.<br/><br/>

              {/*<div className="ladki">*/}
              {/*    <img src="https://res.cloudinary.com/dlhktanwi/image/upload/v1725045373/College_Graduation_Hd_Transparent__Teenage_College_Graduation_Season__College_Student__Graduation_Season__Professional_PNG_Image_For_Free_Download-removebg-preview_wud9eg.png"/>*/}
              {/*    <p></p>*/}
              {/*</div>*/}


              <br></br><br></br>

              <br></br><br></br>

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
    content: {
        maxWidth: '80px',
        margin: '0 auto',
        textAlign: 'justify',
        lineHeight: '1.6',
    },
    image: {
        width: '500px',
        height: 'auto',
        margin: '100px',
        transition: 'transform 0.8s ease-in-out',
    },
    textOutline: {

        textShadow: '1px 1px 3px #1790E3;, -1px -1px 3px #1790E3;, 1px -1px 3px #1790E3;, -1px 1px 3px #1790E3;',
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    imageHover: {
        transform: 'scale(1.04)',
    },
};


export default Second;


