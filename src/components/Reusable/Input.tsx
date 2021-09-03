import React from 'react'
import './Reusable.scss'

interface inputProps {
	className: string;
	placeholder: string;
}

const Input = ( {placeholder, className } : inputProps )  => {

	return (
		<input className={ className ?? "Input"} placeholder={placeholder}></input>
	)
}

export default Input;