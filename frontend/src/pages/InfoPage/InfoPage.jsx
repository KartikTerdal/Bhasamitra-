import React, { forwardRef } from 'react';
import './InfoPage.css';

const InfoPage = forwardRef(({ dataColor }, ref) => {
  return (
    <section className="info-section" id="info">
      {/* Background glow behind title */}
      <div className="info-bg"></div>

      <div className="info-header" data-aos="fade-up">
        <h1 className="info-magic">
          <span className="magic-text">Bhasa</span>
          {/* <span className="magic-badge">Services</span> */}
        </h1>
        <h2 className="info-title">How we work</h2>

      </div>

      <div className="info-grid" data-aos="fade-up">
        <div className="info-card">
          <img src="/hiwis.png" alt="MVP Building" />
          <h3>ASR</h3>
          <p>
            CNN frontend converts the raw audio waveform to spectogram. Transformer Encoder does seld attention and finally decodes. 
          </p>
        </div>

        <div className="info-card">
          <img src="/ss.png" alt="Marketing Funnels" />
          <h3>LLM</h3>
          <p>
            Takes the english text as input and procceses into the LLaMA model which generates the output text in the desired language.
          </p>
        </div>

        <div className="info-card">
          <img src="/itg.png" alt="AI Automations" />         
          <h3>TTS</h3>
          <p>
            SeqwSeq + Attention based model which takes the text in desired language and generates the audio output. 
          </p>
        </div>
      </div>

      <div className="info-cta" data-aos="fade-up">
        <button onClick={() => (window.location.href = "/works")}>See our work →</button>
      </div>
    </section>
  );
});
InfoPage.displayName = "info";

export default InfoPage;
