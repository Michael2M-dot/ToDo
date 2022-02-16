import React, {useState} from "react";
import "./ToDoList.css";
import Header from "../Header/Header";
import Input from "../Input/Input";
import Button from "../Button/Button";
import ToDoApi from "../../utils/api";
import ToDoItem from "../ToDoItem/ToDoItem";


const ToDoList = ({initialToDolist}) => {
	// const [renderToDoList, setRenderToDoList] = useState(initialToDolist);

	console.log(initialToDolist);

	return (
		<>
			<Header/>
			<section className="toDo">
				<form className="toDo__form">
					<Input
						type={'text'}
						name={'toDo'}
						placeholder={"input your plan"}
						minLength={'2'}
						maxLength={'40'}
						required={true}
					/>
					<Button button={"Add"}/>
				</form>
				<h2 className={'toDo__title'}>Список дел</h2>
				<ul className="toDo__list">
					{initialToDolist.map((item) => (
						<ToDoItem
							key={item.id}
							item={item}
						/>
					))}
				</ul>
			</section>
		</>
	);
};

export default ToDoList;

