import React, { useState } from "react";
import "./question_display.css";

function Flashcard() {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    /*stores the selected radio button value & updates the state when a user selects an answer*/

    function handleAnswerChange(event) {
        setSelectedAnswer(event.target.value);
    }
    /* Updates selectedAnswer when a user selects a different multiple choice option*/

    function handleSubmit(event) {
        event.preventDefault();
        alert(`You selected: ${selectedAnswer}`);
    }
    /*stops the default form submission (refresh) so we can handle submission ourselves and displays alert with the selected answer*/
    /* alert is temporary until we decide what to do with the selected answer */
return (
    <div className="flashcard-container">
      <div className="flashcard">
        <h2 className="question">Question goes here</h2>
        <form onSubmit={handleSubmit}>
          {['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'].map((answer, index) => (
            <label key={index} className="answer-box">
              <input 
                type="radio" 
                name="answer" 
                value={answer} 
                checked={selectedAnswer === answer} 
                onChange={handleAnswerChange} 
              />
              {answer}
            </label>
            /*creates form with multiple choice options that update selectedAnswer when clicked*/
          ))}
          <button type="submit" className="submit-btn">
            Check Answer
          </button>
        </form>
      </div>
      <div className="button-container">
        <button className="prev-btn">Previous</button>
        <button className="next-btn">Next</button>
      </div>
    </div>
  );
}

export default Flashcard;
/* exports component so it can be used in the app */
