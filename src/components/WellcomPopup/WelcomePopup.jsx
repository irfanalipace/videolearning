import React, { useState } from 'react';
import './WelcomePopup.css'; 
import { BiFontSize } from 'react-icons/bi';

const WelcomePopup = () => {
  const [step, setStep] = useState(0);
  const [showPopup, setShowPopup] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    if (option === 'new') {
      setStep(1); 
    } else {
      setShowPopup(false);
    }
  };

  const handleNext = () => {
    setStep((prevStep) => (prevStep < 5 ? prevStep + 1 : prevStep));
  };

  const handlePrevious = () => {
    setStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
  };

  const handleSkip = () => {
    setShowPopup(false);
  };

  return (
    showPopup && (
      <>
        <div className="overlay" onClick={handleSkip}></div> 
        <div className="welcome-popup">
          <h1 className='heading-head'>Ahlan, Habibi! 👋</h1>
          <h2 className='heading-head'>"How Familiar Are You with Comprehensible Input?"</h2>
          <h3 className='heading-head'>Experience the Easiest and Most Effective Way to Learn Arabic.</h3>
          <p>Just a quick question before you dive in—let us know your familiarity with the Comprehensible Input method.</p>
          
          {step === 0 && (
            <div className="options">
              <div className="radio-option">
                <input
                  type="radio"
                  id="new"
                  name="learningOption"
                  checked={selectedOption === 'new'}
                  onChange={() => handleOptionSelect('new')}
                />
                <label htmlFor="new">
                  <strong>I’m New to This</strong>
                  <p>Let us show you how this approach makes learning Arabic feel effortless.</p>
                </label>
              </div>
              <div className="radio-option">
                <input
                  type="radio"
                  id="familiar"
                  name="learningOption"
                  checked={selectedOption === 'familiar'}
                  onChange={() => handleOptionSelect('familiar')}
                />
                <label htmlFor="familiar">
                  <strong>I Know It Well</strong>
                  <p>Let’s jump right in and start learning!</p>
                </label>
              </div>
            </div>
          )}

          {step > 0 && (
            <div className="slide-sequence">
              <div className="slide">
                {step === 1 && (
                  <>
                    <h1>Just Watch and Learn</h1>
                    <p>You will acquire everything you need to become fluent in Arabic—vocabulary, grammar, and pronunciation—just by watching videos. No memorization, dictionaries, or exercises needed!</p>
                  </>
                )}
                {step === 2 && (
                  <>
                    <h1>You Won’t Understand Every Word</h1>
                    <p>Focus on the context and don’t worry if you miss some words or phrases. Understanding the overall story is enough for you to acquire Arabic naturally.</p>
                  </>
                )}
                {step === 3 && (
                  <>
                    <h1>Don’t Overthink It</h1>
                    <p>Avoid trying to memorize words or analyze grammar patterns. Just like you learned your native language, your brain will naturally absorb and pick up the language bit by bit, effortlessly!</p>
                  </>
                )}
                {step === 4 && (
                  <>
                    <h1>Be Lazy and Have Fun</h1>
                    <p>Watch videos you truly enjoy. The easier the content feels, the faster you’ll progress. Don’t take notes or repeat after the speaker. Focus on the overall idea, and the results will take care of themselves.</p>
                  </>
                )}
                {step === 5 && (
                  <>
                    <h1>This Method Really Works!</h1>
                    <p>Want to know why? Read about the science behind Comprehensible Input and its success. Or jump straight into learning Arabic by watching your first video right now!</p>
                    <div className="call-to-action">
                      <button onClick={() => window.location.href='/video-library'}>Start Watching Now</button>
                      <button onClick={() => window.location.href='/our-method'}>Learn More About the Method</button>
                    </div>
                  </>
                )}
              </div>
              <div className="navigation-buttons">
                <button onClick={handlePrevious} disabled={step === 1}>Previous</button>
                <button onClick={handleNext} disabled={step === 5}>Next</button>
              </div>
              <div className="progress-indicator">
                <div style={{ width: `${(step / 5) * 100}%` }} className="progress-bar"></div>
              </div>
            </div>
          )}
          
         <div style={{marginTop:"32px"}}>
          <button className="skip-button" onClick={handleSkip}>Skip for Now</button>
         </div>
        </div>
      </>
    )
  );
};

export default WelcomePopup;
