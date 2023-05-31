import React, { useState } from 'react';
import { Typography, Container, Radio, RadioGroup, FormControl, FormControlLabel, Button } from '@material-ui/core';

const TestSection = () => {
  const questions = [
    {
      id: 1,
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Rome'],
      correctAnswer: 'Paris',
    },
    {
        id: 2,
        question: 'What is the capital of France?',
        options: ['Paris', 'London', 'Berlin', 'Rome'],
        correctAnswer: 'Paris',
      },
      {
        id: 3,
        question: 'What is the capital of France?',
        options: ['Paris', 'London', 'Berlin', 'Rome'],
        correctAnswer: 'Paris',
      },
      {
        id: 4,
        question: 'What is the capital of France?',
        options: ['Paris', 'London', 'Berlin', 'Rome'],
        correctAnswer: 'Paris',
      },
      {
        id: 5,
        question: 'What is the capital of France?',
        options: ['Paris', 'London', 'Berlin', 'Rome'],
        correctAnswer: 'Paris',
      },
    // Другие вопросы...
    // {
    //   id: 2,
    //   question: 'Question 2',
    //   options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    //   correctAnswer: 'Option 3',
    // },
    // ...
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleAnswerChange = (event) => {
    const questionId = questions[currentQuestionIndex].id;
    const selectedAnswer = event.target.value;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedAnswer,
    }));
  };

  const handleNextQuestion = () => {
    const question = questions[currentQuestionIndex];
    const selectedAnswer = answers[question.id];
    if (selectedAnswer === question.correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleSubmit = () => {

    console.log(answers);
    console.log('Score:', score);
  };

  const renderQuestion = () => {
    const question = questions[currentQuestionIndex];

    return (
      <div>
        <Typography variant="h6" gutterBottom>
          {question.question}
        </Typography>
        <FormControl component="fieldset">
          <RadioGroup
            name={`question_${question.id}`}
            value={answers[question.id] || ''}
            onChange={handleAnswerChange}
          >
            {question.options.map((option, index) => (
              <FormControlLabel
                key={index}
                value={option}
                control={<Radio />}
                label={option}
                style={{ marginBottom: '10px' }}
              />
            ))}
          </RadioGroup>
        </FormControl>
        <Button variant="contained" color="primary" onClick={handleNextQuestion} style={{ marginTop: '20px' }}>
          Next
        </Button>
      </div>
    );
  };

  const renderResults = () => {
    return (
      <div>
        <Typography variant="h6" gutterBottom>
          Results:
        </Typography>
        {questions.map((question) => (
          <Typography key={question.id} gutterBottom>
            Question {question.id}: {answers[question.id] || '-'}
          </Typography>
        ))}
        <Typography variant="h6" gutterBottom>
          Score: {score} / {questions.length}
        </Typography>
        <Button variant="contained" color="primary" onClick={handleSubmit} style={{ marginTop: '20px' }}>
          Submit
        </Button>
      </div>
    );
  };

  return (
    <section style={{ backgroundColor: '#f5f5f5', padding: '50px' }}>
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" gutterBottom>
          English Test
        </Typography>
        {showResults ? renderResults() : renderQuestion()}
      </Container>
    </section>
  );
};

export default TestSection;
