import React, { useEffect, useRef } from 'react';        
import {useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


// import CountUp from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './ExplorePage.css';
import InfoPage from '../../pages/InfoPage/InfoPage';
import HowItWorks from '../../pages/HowItWorks/HowItWorks';
import StartupsPage from '../../pages/StartupsPage/StartupsPage';
import HniInvestorsPage from '../../pages/HniInvestorsPage/HniInvestorsPage';
import ResourcesPage from '../../pages/ResourcesPage/ResourcesPage';
import ContactPage from '../../pages/ContactPage/ContactPage';
import { useNavigate } from 'react-router-dom';

const lines = [
  "my name is bond .",
  "hi bobo how is this .",
  "4kt gang 5 ."
];

const ExplorePage = () => {

  // Separate refs for each section
  const heroRef = useRef();
  const valueRef = useRef();
  const infoRef = useRef();
  const howRef = useRef();
  const startupsRef = useRef();
  const hniRef = useRef();
  const resourcesRef = useRef();
  const contactRef = useRef();
  const videoRef = useRef();
  const boxRef = useRef();
  const navigate = useNavigate();
  const refs = [
    boxRef,
    heroRef,
    videoRef,
    valueRef,
    infoRef,
    howRef,
    startupsRef,
    hniRef,
    resourcesRef,
    contactRef,
  ];

  const fullText = "We create MVP sites that build AI agents innovatively.";

  // Typing animation



  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Background color scroll logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 2;

      for (let ref of refs) {
        if (ref.current) {
          const top = ref.current.offsetTop;
          const height = ref.current.offsetHeight;
          const color = ref.current.dataset.color;
          if (scrollY >= top && scrollY < top + height) {
            document.body.style.backgroundColor = color;
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  useEffect(() => {
      const sections = [
          { ref: howRef, color: '#000000' },
          { ref: infoRef, color: '#000000' },
          { ref: startupsRef, color: '#000000' },
          { ref: startupsRef, color: '#000000' },
        ];

    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const el = section.ref.current;
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            document.body.style.backgroundColor = section.color;
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const currentLine = lines[lineIndex];

    if (charIndex < currentLine.length) {
      const typingTimeout = setTimeout(() => {
        setDisplayText((prev) => prev + currentLine[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 50); // Typing speed
      return () => clearTimeout(typingTimeout);
    } else {
      const pauseTimeout = setTimeout(() => {
        // Move to next line
        setDisplayText('');
        setCharIndex(0);
        setLineIndex((prev) => (prev + 1) % lines.length);
      }, 2000); // Pause after full line
      return () => clearTimeout(pauseTimeout);
    }
  }, [charIndex, lineIndex]);
  return (
    <div id="home" className="home">
      {/* Hero Section */}
    <section ref={heroRef} data-color="#000000" className="hero-section" data-aos="fade-up">
      <div className="hero-bg"></div>

      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            We help to solve language barrier of the rural communities in India 
          </h1>

 

          <div className="hero-cta">
<button onClick={() => navigate('/booking')} className="hero-btn primary">Continue</button>                     
          </div>                                                                                                                                                                                                                                                                                                                               
        </div>              
      </div>
    </section>






      {/* Sections with scroll-based background */}
      <section ref={infoRef} id="info" >
        <InfoPage />
      </section>



    </div>
  );
};

export default ExplorePage;
