import React from "react";
import Logo from "./../../images/logo.svg"
import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<div className="header">
			<NavLink to="/">
				<img className="header__logo" src={Logo} alt="logo"/>
			</NavLink>
			<nav className="header__nav">
				<NavLink className='header__nav-link' to="/">Главная</NavLink>
				<NavLink className='header__nav-link' to="/todo">Список дел</NavLink>
			</nav>
		</div>
	);
};

export default Header;
