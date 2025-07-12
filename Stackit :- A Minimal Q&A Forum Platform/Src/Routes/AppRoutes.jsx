import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AskQuestion from '../pages/AskQuestion';
import QuestionDetail from '../pages/QuestionDetail';
import Tags from '../pages/Tags';
import UserProfile from '../pages/UserProfile';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/ask" element={<AskQuestion />} />
    <Route path="/questions/:id" element={<QuestionDetail />} />
    <Route path="/tags" element={<Tags />} />
    <Route path="/users/:id" element={<UserProfile />} />
  </Routes>
);

export default AppRoutes;
