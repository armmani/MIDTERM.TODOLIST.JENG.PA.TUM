import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import TodoListPage from '../pages/TodoListPage';
import MainLayout from '../layout/MainLayout';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<LoginPage />}/>
          <Route path="todo" element={<TodoListPage />}/>
          <Route path="register" element={<RegisterPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter