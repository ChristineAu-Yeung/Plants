import React from 'react'
import './Button.scss'

interface inputProps {
	placeholder: string;
}

const Input = ( props: inputProps ) => {
	return (
		<input className="Input" placeholder={props.placeholder}></input>
	)
}

export default Input;