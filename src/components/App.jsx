import React from "react";
import Feedback from "./Feedback/Feedback";
import FeedbackButton from "components/FeedbackButton/FeedbackButton";
import Statistics from "components/Statistics/Statistics";
import { useState, useEffect } from "react";

export const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const LeaveFeedback = typeBtn => {
    switch (typeBtn) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  }

  useEffect(() => {
    setTotal(good + neutral + bad);
    setPercentage(Math.round(good / (good + neutral + bad) * 100))
  }, [percentage, total, good, neutral, bad])

  return (
          <Feedback
            title={'Please leave feedback'}
          >
            <FeedbackButton
              onLeaveFeedback={LeaveFeedback}
              options={['good', 'neutral', 'bad']} 
            />
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              percentage={percentage}
              message={'There is no feedback.'}
            />
          </Feedback>
        )
}

