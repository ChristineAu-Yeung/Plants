import React, { useState } from "react";
import './SignUpLogin.scss'
import { useDispatch } from "react-redux";
import { userActions } from '../../redux/actions/user.action';

interface signUpProps {
	userName: string,
	userEmail: string,
	userPassword: string
}

function SignUpPage(props: signUpProps) {

  const dispatch = useDispatch();
	const [ userName, setUserName ] = useState("")
	const [ userEmail, setUserEmail ] = useState("")
	const [ userPassword, setUserPassword ] = useState("")

	const signUp = () => {
		if (!validateSignUpInfo) { return null } 
		dispatch(userActions.signUp( {name: userName, email: userEmail, password: userPassword } ))
	}

	function validateSignUpInfo() {
		if (userName.length > 0 && userEmail.length > 0 && userPassword.length > 0) { 
			return true
		} else {
			return false
		}
	}

	return (
		<div className="signUp">
			<p>Sign Up :)</p>
			<p>Name</p>
			<input id="userName" onChange={(e) => setUserName(e.currentTarget.value)} placeholder="Enter your name"/>
			<p>Email</p>
			<input id="userEmail" onChange={(e) => setUserEmail(e.currentTarget.value)} placeholder="Enter your email"/>
			<p>Password</p>
			<input id="userPassword" onChange={(e) => setUserPassword(e.currentTarget.value)} placeholder="Enter your password"/>
			<button onClick={() => signUp()}>Sign Up!!!</button>
		</div>

	)
}

export default SignUpPage;