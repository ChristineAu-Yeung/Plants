import './Button.scss'
import React from 'react'

interface buttonProps {
	name: string;
}

const Button = (props: buttonProps) => {
	 return (
		 <button className="Button">{props.name}</button>
	 )
}

export default Button;