import React from "react";
import './Input.css';

const Input = (props) => {

	return (
		<input
			className="input"
			type={props.type}
			name={`${props.name}-input`}
			id={`${props.name}-input`}
			placeholder={props.placeholder}
			required={props.required}
			minLength={props.minLength}
			maxLength={props.maxLength}

		/>
		// <label className="input">
		// 	<form
		// 		className="toDo-form"
		// 		name="to-do-form"
		// 		id="to-do-form"
		// 		onSubmit={handleSubmit}
		// 	>
		// 		<input
		// 			name="toDo"
		// 			type="text"
		// 			id="toDo-input"
		// 			className="input__textfield"
		// 			placeholder="Какой у Вам план?"
		// 			title="Введите дело которое вы планируете сделать"
		// 			required
		// 			minLength="2"
		// 			pattern='^[A-Za-zА-Яа-яЁё\s]+$'
		// 			onChange={handleChange}
		// 			value={toDo || ''}
		// 		/>
		// 		<button
		// 			type='submit'
		// 			className='search-form__button'
		// 			disabled={!isValid}
		// 		>Найти
		// 		</button>
		// 	</form>

	);
};

export default Input;
