import React, {useEffect, useState} from "react";
import {
    Route,
    Routes,
} from "react-router-dom";
import './App.css';
import Main from "../Main/Main";
import Page404 from "../404/404";
import ToDoList from "../ToDoList/ToDoList";
import * as todoApi from "../../utils/api";

const App = () => {
    const [toDoList, setToDoList] = useState([]);

    const getToDoListFromApi = () => {
        todoApi
            .ToDoApi()
            .then((initialToDoList) => {
                setToDoList(initialToDoList);
            })
            .catch((err) => {
                console.log(`Непредвиденная ошибка при загрузке 
                списка дел: ${err}:`)
            })
    };

    useEffect(() => {
        getToDoListFromApi();
    }, []);

  return (
    <div className="page">
      <div className="page__container">
          <Routes>
              <Route exact path="/" element={<Main/>} />
              <Route path="/toDo" element={
                  <ToDoList
                      initialToDolist={toDoList}
                  />
              } />
              <Route path="*" element={<Page404/>} />
          </Routes>
      </div>
    </div>
  );
};

export default App;
