import React from 'react'
import './Button.scss'

interface inputProps {
	placeholder: string;
}

const Input = ( {placeholder} : inputProps )  => {
	return (
		<input className="Input" placeholder={placeholder}></input>
	)
}

export default Input;