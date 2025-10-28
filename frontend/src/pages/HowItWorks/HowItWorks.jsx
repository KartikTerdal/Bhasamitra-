import React, { forwardRef,useEffect, useRef } from "react"; 
import { useNavigate } from 'react-router-dom'; 
 
import "./HowItWorks.css";
import {   useState } from "react";
import "./HowItWorks.css";

const steps = [
  { number: "01", tag: "Diagnose", title: "Problem Discovery", text: "We dive deep into your goals and challenges, identifying what’s holding your AI vision back and how to bridge it with automation.", button: "Book discovery call ↗" },
  { number: "02", tag: "Educate", title: "Consulting", text: "Over 2–3 weeks we explore AI tools, design your roadmap, and train your team to leverage automation for real outcomes.", button: "" },             
  { number: "03", tag: "Design", title: "Prototype Creation", text: "We rapidly design and validate your AI agent or MVP through iterative, data-driven prototypes.", button: "" },
  { number: "04", tag: "Build", title: "Implementation", text: "Our engineers integrate your AI solution into your workflow, ensuring smooth operation and measurable results.", button: "Explore builds →" },
  { number: "05", tag: "Evolve", title: "Continuous Optimization", text: "We monitor, retrain, and scale your AI systems — ensuring your product stays intelligent and adaptive over time.", button: "" },
];
const HowItWorks = forwardRef(({ dataColor }, ref) => {  
  const sectionRef = useRef();
  const [scrollPercent, setScrollPercent] = useState(0);

  const navigate = useNavigate();
  useEffect(() => {
    
    const section = sectionRef.current;
    const handleScroll = () => {
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalHeight = section.scrollHeight - windowHeight;
      const scrolled = Math.min(
        Math.max((windowHeight - rect.top) / (section.offsetHeight + windowHeight), 0),
        1
      );
      setScrollPercent(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
          else entry.target.classList.remove("visible");
        });
      },
      { threshold: 0.3 }
    );

    const elements = sectionRef.current.querySelectorAll(".how-step");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  return (
    <section ref={sectionRef} id="howitworks" className="howitworks-section">
      <h2 className="howitworks-title">How It Works</h2>
      <p className="howitworks-subtext">
        A transparent 5-step journey from idea to intelligent automation.
      </p>

        {/* <div
          className="timeline-line"
          style={{ height: `${scrollPercent * 100}%` }}
        ></div> */}

        <div className="timeline">
                  <div
          className="timeline-line"
          style={{ height: `${scrollPercent * 100}%` }}
        ></div>
          {steps.map((s, index) => (
            <div key={index} className="how-step">
              <div className="step-left">
                <span className="step-number">{s.number}</span>
              </div>
              
              <div className="step-right">
                <div className="tag">{s.tag}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
{s.button !== "" && <button onClick={() => navigate('/booking')} className="step-btn">{s.button}</button>}
              </div>
            </div>
          ))}
        </div>
   
    </section>
  );
});

HowItWorks.displayName = "HowItWorks";

export default HowItWorks;
