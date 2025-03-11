import React from "react";
import "./question_display.css";

function Flashcard() {
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    function handleAnswerChange(event) {
        setSelectedAnswer(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        alert(`You selected: ${selectedAnswer}`);
    }

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
