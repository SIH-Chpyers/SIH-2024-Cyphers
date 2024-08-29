import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Loading from './Loading';


const Navbar = () => {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      setLastScrollY(currentScrollY);
    };
    

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);
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
    <header className={`header ${scrollDirection === 'down' ? 'hidden' : ''}`}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <a href="/" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src="https://res.cloudinary.com/dnsjdvzdn/image/upload/v1724927077/photo-removebg-preview_mnt1n3.png" alt="SC logo" style={{ width: 65, height: 78, marginRight: 10 }} />
          <h4 style={{ ...styles.textOutline, fontFamily: "'Comic Sans MS', 'Comic Sans', cursive", margin: 0, color: '#DCE0DF' }}>Special Child</h4>
        </a>
      </div>
      <nav className="navbar">
        <Link exact activeClassName="active" to="/home">Home</Link>
        <div className="dropdown">
          <Link activeClassName="active" to="/">Notes Enhancer</Link>
          <div className="dropdown-content">
            <Link activeClassName="active" to="/score">Something</Link>
            <Link activeClassName="active" to="/score">Something</Link>
            <Link activeClassName="active" to="/score">Something</Link>
          </div>
        </div>
        <div className="dropdown">
          <Link activeClassName="active" to="/quizz">Quizz</Link>
          <div className="dropdown-content">
            <Link activeClassName="active" to="/score">Bulletin</Link>
          </div>
        </div>
        <Link activeClassName="active" to="/score">Bulletin</Link>
        <Link activeClassName="active" to="/tts">About Us</Link>
        <div className="dropdown">
          <Link activeClassName="active" to="/score">Something</Link>
        </div>
      </nav>
    </header>
  );
};

const styles = {

  textOutline: {
    fontFamily: "'Comic Sans MS', 'Comic Sans', cursive",
    textShadow: '1px 1px 3px #1790E3;, -1px -1px 3px #1790E3;, 1px -1px 3px #1790E3;, -1px 1px 3px #1790E3;',
  },

};


export default Navbar;
