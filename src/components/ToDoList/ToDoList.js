import React from "react";
import "./ToDoList.css";
import Header from "../Header/Header";
import Input from "../Input/Input";
import Button from "../Button/Button";

const ToDoList = () => {
	return (
		<>
			<Header/>
			<form className="toDo__form">
				<Input
					type={'text'}
					name={'toDo'}
					placeholder={"input your plan"}
					minLength={'2'}
					maxLength={'40'}
					required={'true'}
				/>
				<Button button={"Add"}/>
			</form>

			<section className="toDo">
				<ul className="toDo__list">

				</ul>
			</section>
		</>
	);
};

export default ToDoList;

