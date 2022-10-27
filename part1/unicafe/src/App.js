import { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  // const [allClicks, setAllClicks] = useState(0);

  const handleGoodClick = () => {
    // setAllClicks(allClicks +1)
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    // setAllClicks(allClicks +1)
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    // setAllClicks(allClicks +1)
    setBad(bad + 1);
  };

  return (
    <div>
      <h2>give feedback</h2>

      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad;
  const average = (props.good - props.bad) / total;
  const positivePercentage = (props.good / total) * 100;

  if (total === 0) {
    return <div>no feedback given</div>;
  }
  return (
    <div>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {total}</p>
      <p>average {average}</p>
      <p>positive {positivePercentage} %</p>
    </div>
  );
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

export default App;
