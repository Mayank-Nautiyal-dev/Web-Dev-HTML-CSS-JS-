import React from 'react';
import QuestionCard from './QuestionCard';

// Dummy data for demonstration
const questions = [
  {
    id: 1,
    title: "How to use React Context for global state?",
    description: "I'm trying to manage state globally...",
    user: "alice",
    votes: 12,
    answers: 3,
    tags: ["React", "Context"],
    createdAt: "2 hours ago"
  },
  {
    id: 2,
    title: "Best way to secure JWT tokens in Node.js?",
    description: "What are the best practices for securing JWT tokens?",
    user: "bob",
    votes: 8,
    answers: 2,
    tags: ["Node.js", "JWT", "Security"],
    createdAt: "1 hour ago"
  }
];

const QuestionList = () => (
  <div>
    {questions.map(q => <QuestionCard key={q.id} question={q} />)}
  </div>
);

export default QuestionList;

