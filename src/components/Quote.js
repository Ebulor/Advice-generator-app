import React from "react";

export default function Quote() {
  const [newQuote, setNewQuote] = React.useState(false);
  const [quote, setQuote] = React.useState({
    id: "",
    advice: ""
  });

  React.useEffect(
    function () {
      fetch("https://api.adviceslip.com/advice")
        .then((res) => res.json())
        .then((data) =>
          setQuote({
            id: data.slip.id,
            advice: data.slip.advice
          })
        );
    },
    [newQuote]
  );

  function changeAdvice() {
    setNewQuote((prevQuote) => !prevQuote);
  }

  return (
    <div className="container">
      <p className="quote-num">ADVICE #{quote.id}</p>
      <p className="quote-text">“{quote.advice}”</p>
      <div className="divider">
        <img
          className="mobile-divider divider"
          src="images/pattern-divider-mobile.svg"
          alt="divider"
        />
        <img
          className="desktop-divider divider"
          src="images/pattern-divider-desktop.svg"
          alt="divider"
        />
      </div>
      <div className="dice-icon" onClick={changeAdvice}>
        <img src="images/icon-dice.svg" alt="dice icon" />
      </div>
    </div>
  );
}
