import React, { useState } from "react";
import "./WelcomePopup.css";
import { BiFontSize } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const WelcomePopup = ({ onClose }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [showPopup, setShowPopup] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    if (option === "new") {
      setStep(1);
    } else {
      navigate("/");
      setShowPopup(false);
    }
  };

  const handleNext = () => {
    if (step < 5) {
      setStep((prevStep) => prevStep + 1);
    } else {
      setShowPopup(false);
    }
  };

  const handlePrevious = () => {
    setStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
  };

  const handleSkip = () => {
    setShowPopup(false);
  };
  const handleNavigateToTeachingMethod = () => {
    navigate("/resources/teaching-method");
    setShowPopup(false);
  };

  const handleNavigateToMethodPage = () => {
    navigate("/watch-videos");
    setShowPopup(false);
  };

  return (
    showPopup && (
      <>
        <div className="overlay" onClick={handleSkip}></div>
        <div className="welcome-popup">
          {step === 0 && (
            <>
              <h1 className="heading-head">Ahlan, Habibi! 👋</h1>
              <h2 className="heading-head">
                "How Familiar Are You with Comprehensible Input?"
              </h2>
              <h3 className="heading-head">
                "Welcome to Arabic All The Time! Experience the Easiest and Most
                Effective Way to Learn Arabic."
              </h3>
              <p>
                Just a quick question before you dive in—let us know your
                familiarity with the Comprehensible Input method.
              </p>
            
            </>
          )}

          {step === 0 && (
            <div className="options">
              <div className="radio-option new-option">
                <input
                  type="radio"
                  id="new"
                  name="learningOption"
                  checked={selectedOption === "new"}
                  onChange={() => handleOptionSelect("new")}
                />
                <label htmlFor="new">
                  <strong>I’m New to This</strong>
                  <p>
                    Let us show you how this approach makes learning Arabic feel
                    effortless.
                  </p>
                </label>
              </div>
              <div className="radio-option familiar-option">
                <input
                  type="radio"
                  id="familiar"
                  name="learningOption"
                  checked={selectedOption === "familiar"}
                  onChange={() => handleOptionSelect("familiar")}
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
              <div className="progress-indicator">
                <div
                  style={{ width: `${(step / 5) * 100}%` }}
                  className="progress-bar"
                ></div>
              </div>
              <h1 className="heading-head" style={{ fontWeight: "700" }}>
                How Comprehensible Input Works
              </h1>

              <div className="slide">
                {step === 1 && (
                  <div style={{ height: "100px" }}>
                    <h2 className="heading-head">Just Watch and Learn</h2>
                    <p style={{ fontStyle: "italic" }}>
                      You will acquire everything you need to become fluent in
                      Arabic—vocabulary, grammar, and pronunciation{" "}
                      <span style={{ fontWeight: "bold" }}>
                        —just by watching 📽️videos
                      </span>
                      . No memorization, dictionaries, or exercises needed!
                    </p>
                  </div>
                )}
                {step === 2 && (
                  <div style={{ height: "100px" }}>
                    <h2 className="heading-head">
                      You Won’t Understand Every Word
                    </h2>
                    <p style={{ fontStyle: "italic" }}>
                      Focus on the context and don’t worry if you miss some
                      words or phrases. Understanding the overall story is
                      enough for you to acquire Arabic naturally.
                    </p>
                  </div>
                )}
                {step === 3 && (
                  <div style={{ height: "100px" }}>
                    <h2 className="heading-head">Don’t Overthink It</h2>
                    <p style={{ fontStyle: "italic" }}>
                      Avoid trying to memorize words or analyze grammar
                      patterns. Just like you learned your native language, your
                      brain will naturally absorb and pick up the language bit
                      by bit, effortlessly!
                    </p>
                  </div>
                )}
                {step === 4 && (
                  <div style={{ height: "100px" }}>
                    <h2 className="heading-head">Be Lazy and Have Fun</h2>
                    <p style={{ fontStyle: "italic" }}>
                      Watch videos you truly enjoy. The easier the content
                      feels, the faster you’ll progress. Don’t take notes or
                      repeat after the speaker. Focus on the overall idea, and
                      the results will take care of themselves.
                    </p>
                  </div>
                )}
                {step === 5 && (
                  <div style={{ height: "100px" }}>
                    <h2 className="heading-head">This Method Really Works!</h2>
                    <p style={{ fontStyle: "italic" }}>
                      Want to know why? Read about the science behind
                      Comprehensible Input and its success. Or jump straight
                      into learning Arabic by watching your first video right
                      now!
                    </p>
                  </div>
                )}
              </div>

              <div
                className="navigation-buttons"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                {step !== 5 && (
                  <button
                    onClick={handlePrevious}
                    disabled={step === 1}
                    className="nav-button previous-button"
                  >
                    Previous
                  </button>
                )}

                {step === 5 ? (
                  <>
                 
                    <button
                      className="learn-more-button"
                      onClick={handleNavigateToTeachingMethod}
                      style={{ width: "34%", padding: "0px", height: "40px" }}
                    >
                      Learn More About Method
                    </button>

                       <button
                      className="start-button"
                      onClick={handleNavigateToMethodPage}
                      style={{ width: "34%", padding: "0px", height: "40px" }}
                    >
                      Start Watching Now 
                    </button>
                  </>
                ) : (
                  <button
                    onClick={handleNext}
                    className="nav-button next-button"
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          )}

          <div
            style={{ margin: "5px", display: "flex", justifyContent: "end" }}
          >
            <button className="skip-button" onClick={handleSkip}>
              Skip for Now
            </button>
          </div>
        </div>
      </>
    )
  );
};

export default WelcomePopup;
