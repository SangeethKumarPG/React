import React, { useCallback, useRef } from 'react'
import { useState } from "react";
import QUESTIONS from "../questions";
import quizCompleteImg from '../assets/quiz-complete.png';
import Questions from './Questions';
import Summary from './Summary';
function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
  const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {

    setUserAnswers((prevAnswers) => {
      return [...prevAnswers, selectedAnswer]
    });

  }, []);
  const skipAnswer = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);
  if (quizIsComplete) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <div id="quiz">
      <Questions
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSkipAnswer={skipAnswer}
        onSelectAnswer={handleSelectAnswer}
      />
    </div>
  );
}

export default Quiz;