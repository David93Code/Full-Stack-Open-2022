import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];

  const [selected, setSelected] = useState(0);
  // make an array to set the points of the votes...in the useState we give an empty array where its length is the same as the
  // anecdotes length; and as its values we set it to 0 (fill(0))
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));
  const [highestIndex, setHighestIndex] = useState(0);

  const randomAnecdote = () => {
    // Randomly chooses an anecdote among the array anecdotes
    const chooseAnecdote = Math.floor(Math.random() * anecdotes.length);
    // Sets the index number
    setSelected(chooseAnecdote);
  };

  const storeVote = () => {
    // creates an array copy of the array points
    const copy = [...points];
    // Adds one value (vote) to the selected index
    copy[selected] += 1;
    // Set which index of the copy array has the highest value (highest amount of votes)
    setHighestIndex(copy.indexOf(Math.max.apply(null, copy)));

    setPoints(copy);
  };
  console.log(highestIndex);
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p> {anecdotes[selected]}</p>
      <p> has {points[selected]} votes</p>

      <button onClick={randomAnecdote}>next anecdotes</button>
      <button onClick={storeVote}>vote</button>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[highestIndex]}</p>
      <p> has {points[highestIndex]} votes</p>
    </div>
  );
};

export default App;
