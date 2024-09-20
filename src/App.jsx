import React, { useState } from 'react';
import Learner from './Learner';
import './App.css';  // Ensure this import is present

const App = () => {
  const [learnerData, setLearnerData] = useState({
    learners: [
      {
        name: 'Leon Kennedy',
        bio: '',
        scores: [
          { date: '2018-02-08', score: 77 },
          { date: '2018-04-22', score: 92 },
          { date: '2018-09-15', score: 68 }
        ]
      },
      {
        name: 'Jill Valentine',
        bio: 'BSAA',
        scores: [
          { date: '2018-12-14', score: 88 },
          { date: '2019-01-09', score: 79 },
          { date: '2019-02-23', score: 91 },
          { date: '2019-03-01', score: 95 }
        ]
      },
      {
        name: 'Albert Wesker',
        bio: 'Umbrella',
        scores: [
          { date: '2018-10-11', score: 62 },
          { date: '2018-11-24', score: 74 },
          { date: '2018-12-19', score: 85 }
        ]
      }
    ]
  });

  return (
    <div className="App">
      <h1>Game Over</h1>

      {learnerData.learners.map((learner, index) => (
        <Learner key={index} learner={learner} />
      ))}
    </div>
  );
};

export default App;
