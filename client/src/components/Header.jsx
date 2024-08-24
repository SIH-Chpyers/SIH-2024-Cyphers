import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header style={styles.header}>
      <br></br>
      <br></br>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ flex: 1 }}>
        <h1 className="text-white font-bold lg:text-7xl md:text-[36px] text-[35px] md:leading-[42px] leading-[36px] max-w-lg">
                        Elevate Young Minds with <span className="text-teal-500">Bright</span><span
                        className="text-indigo-950">Ways</span>
                    </h1>

          <p style={{ ...styles.textOutline, fontFamily: 'Segoe UI, sans-serif', fontWeight: 700, fontSize: '1.3rem', marginBottom: '10px' }}>
            Unlock the Secrets to Job Application Success with Cutting-Edge Technology!
          </p>
          <p style={{ ...styles.textOutline, fontFamily: 'Segoe UI, sans-serif', fontWeight: 700, fontSize: '1.3rem', marginBottom: '10px' }}>
        
                        Enrichment program for students who want to learn how to build their future.
 
          </p>
        </div>
        <img src="https://eduguruacademy.com/dist/assets/images/svg/hero-banner-img.svg" alt="Tech Background" style={{ ...styles.image, transition: 'transform 0.8s ease-in-out' }} className="zoom-image"  />
      </div>
    </header>
  );
};

const styles = {
  header: {
    textAlign: 'LEFT',
    padding: '50px 20px',
    backgroundColor: 'transparent',
    color: '#fff',
  },

  textOutline: {
    fontFamily: "'Comic Sans MS', 'Comic Sans', cursive",
    textShadow: '1px 1px 3px #1790E3;, -1px -1px 3px #1790E3;, 1px -1px 3px #1790E3;, -1px 1px 3px #1790E3;',
  },

  image: {
    width: '30%',
    height: 'auto',
    marginTop: '20px',
    border: '1px solid #2A4F55',
    borderRadius: '5px',
    
  },

};

export default Header;