import React from "react";
import "./ToDoItem.css";

const ToDoItem = ({item}) => {

	const checkBoxState = (`${item.completed}`)
		? `disabled`
		: `checked`

	const toDoItemTextStyle = `toDo__item-text 
		${item.completed ? 'toDo__item-text_done' : ''}`;

	const toDoItemCheckboxStyle = `toDo__item-checkbox
		${item.completed ? 'toDo__item-checkbox_done' : ''}`;

	const toDoCheckBoxIcon = `toDo__checkbox-icon
		${item.completed ? 'toDo__checkbox-icon_done' : ''}`

	console.log(toDoItemTextStyle)
	return(
		<li className="toDo__item">
			<p className={'toDo__item-number'}>{item.id}</p>
			<p className={toDoItemTextStyle}>{item.title}</p>
			<div className={toDoItemCheckboxStyle}>
				<svg className={toDoCheckBoxIcon} href="../../../src/images/icon_success.svg"/>
				{/*<svg className={toDoCheckBoxIcon}>*/}
				{/*	<use xlinkHref="../../../src/images/icon_sprite#icon_success"/>*/}
				{/*</svg>*/}
			</div>
		</li>
	)
}

export default ToDoItem;
