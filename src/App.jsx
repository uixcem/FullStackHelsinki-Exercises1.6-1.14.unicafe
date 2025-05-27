/*
 __ 
/_ |
 | |
 | |    UNICAFE
 | |
 |_|
*/
//==========================/* Unicafe feedback app starts here*/=========================//
import { useState } from "react";

function App() {
  // Counters for each vote
  const [good, setGood] = useState(0);
  const [okay, setOkay] = useState(0);
  const [bad, setBad] = useState(0);

  // Calculate totals
  const total = good + okay + bad;
  const average = total ? (good - bad) / total : 0;
  const goodPercent = total ? (good / total) * 100 : 0;

  // Show this if no votes yet
  if (total === 0) {
    return (
      <div>
        <h2>Give feedback!</h2>
        <button onClick={() => setGood(good + 1)}>Good</button>
        <button onClick={() => setOkay(okay + 1)}>Okay</button>
        <button onClick={() => setBad(bad + 1)}>Bad</button>
        <h2>No feedbacks given!</h2>
        <p>No votes yet</p>
      </div>
    );
  }

  // Show results if we have votes
  return (
    <div>
      <h2>Rate Us!</h2>
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setOkay(okay + 1)}>Okay</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>

      <h2>Results:</h2>
      <p>Good votes: {good}</p>
      <p>Okay votes: {okay}</p>
      <p>Bad votes: {bad}</p>
      <p>Total votes: {total}</p>
      <p>Average rating: {average.toFixed(1)}</p>
      <p>Good ratings: {goodPercent.toFixed(1)}%</p>
    </div>
  );
}

export default App;

//==========================/* Unicafe feedback app ends here*/=========================//


