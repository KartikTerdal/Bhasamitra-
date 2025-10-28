import React, { useState, forwardRef } from "react";
import "./ResourcesPage.css";

const faqs = [
  {
    q: "What exactly do you do?",
    a: "We design and build intelligent products — from AI agents to end-to-end MVPs — that help startups automate, optimize, and scale.",
  },
  {
    q: "Who do you work with?",
    a: "We collaborate with founders, small teams, and companies looking to integrate AI into their workflows efficiently.",
  },
  {
    q: "Do I need technical knowledge to work with you?",
    a: "Not at all. We handle the technical complexity — you bring your vision, we turn it into a working, smart system.",
  },
  {
    q: "How long does the process take?",
    a: "Most MVPs and agents are delivered within 3–4 weeks, including design, prototyping, and launch.",
  },
  {
    q: "Do you only build AI products?",
    a: "We specialize in AI systems, but also develop full-stack platforms, web apps, and automation tools.",
  },
];

const ResourcesPage = forwardRef(({ dataColor }, ref) => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section ref={ref} id="resources" className="faq-section" data-aos="fade-up">
      <div className="faq-bg"></div>

      <h1 className="faq-heading">
        <span className="magic-text">cinch ai </span>
        {/* <span className="badge">FAQs</span> */}
      </h1>

      <h2 className="faq-subtitle">Answers to Your Most Common Questions</h2>
      <p className="faq-desc">
        Everything you need to know about getting started, using the platform,
        and unlocking its full potential.
      </p>

      <div className="faq-list">
        {faqs.map((item, i) => (
          <div
            key={i}
            className={`faq-item ${openIndex === i ? "open" : ""}`}
            onClick={() => toggleFAQ(i)}
          >
            <div className="faq-question">
              <h3>{item.q}</h3>
              <span>{openIndex === i ? "−" : "+"}</span>
            </div>
            <div className="faq-answer">
              <p>{item.a}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="faq-stats">
        <div><h3>23+</h3><p>Projects</p></div>
        <div><h3>150+</h3><p>People consulted</p></div>
        <div><h3>14M+</h3><p>Impressions generated</p></div>
      </div>
    </section>
  );
});

ResourcesPage.displayName = "resources";
export default ResourcesPage;
