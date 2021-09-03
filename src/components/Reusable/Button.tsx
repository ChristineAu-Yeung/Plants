import './Reusable.scss'
import React from 'react'

interface buttonProps {
	className: string;
	content: string;
	disabled: boolean;
	buttonOnClick: (e: any) => null;
}

const Button = (props: buttonProps) => {

	const { className, content, disabled, buttonOnClick } = props;

	 return (
		 <button className={className ?? "Button"} disabled={disabled ?? false} onClick={(e) => {if (buttonOnClick) { buttonOnClick(e) }} } >{content}</button>
	 )
}

export default Button;