import React from "react";
import Logo from "./../../images/logo.svg"
import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<div className="header">
			<NavLink to="/">
				<img className="header__logo" src={Logo} alt="logo"/>
			</NavLink>
		</div>
	);
};

export default Header;
