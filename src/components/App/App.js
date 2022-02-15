import React from "react";
import {
    Route,
    Routes,
} from "react-router-dom";
import './App.css';
import Main from "../Main/Main";
import Page404 from "../404/404";
import ToDoList from "../ToDoList/ToDoList";

const App = () => {
  return (
    <div className="page">
      <div className="page__container">
          <Routes>
              <Route exact path="/" element={<Main/>} />
              <Route path="/toDo" element={<ToDoList/>} />
              <Route path="*" element={<Page404/>} />
          </Routes>
      </div>
    </div>
  );
};

export default App;
