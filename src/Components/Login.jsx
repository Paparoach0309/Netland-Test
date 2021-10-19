import { useEffect, useState } from 'react';
import React from 'react';
import '../styles/Login.css';

const Login = () => {
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [userNameDirty, setUserNameDirty] = useState(false);
	const [passwordDirty, setPasswordDirty] = useState(false);
	const [userNameError, setUserNameError] = useState('Введите Логин');
	const [passwordError, setPasswordError] = useState('Введите Пароль');
	const [formValid, setFormValid] = useState(false);

	useEffect( () => {
		if (userNameError || passwordError) {
			setFormValid(false);
		} else {
			setFormValid(true);
		}
	}, [userNameError, passwordError]);

	const saveData = () => {
		fetch('http://151.115.37.31:3001/api/v1/intercom/login', {
		  method: 'POST',
		  headers: {
			'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({
			name: userName, 
		  }),
		})
		  .then((res) => res.json())
		  .catch((err) => console.log('error'))
	  };

	const userNameHandler = (e) => {
		setUserName(e.target.value);
		if (e.target.value.length < 2 || e.target.value.length >30) {
			setUserNameError('Некорректное значение');
		} else {
			setUserNameError('');
		}
	}

	const passwordHandler = (e) => {
		setPassword(e.target.value);
		if (e.target.value.length < 2 || e.target.value.length >30) {
			setPasswordError('Некорректное значение');
		} else {
			setPasswordError('');
		}
	}

	const handlerBlur = (e) => {
		switch (e.target.name) {
			case 'userName':
				setUserNameDirty(true);
				break;
			case 'password':
				setPasswordDirty(true);
				break;
				default: ;
		}
	};

	return (
		<div className="Login">
			<form onSubmit={saveData()}>
				{(userNameDirty && userNameError) && <div style={{color:'red'}}>{userNameError}</div>}
				<input onChange={e => userNameHandler(e)} value={userName} onBlur={e =>handlerBlur(e)} name='userName' type='text' placeholder='Login'/>
				{(passwordDirty && passwordError) && <div style={{color:'red'}}>{passwordError}</div>}
				<input onChange={e => passwordHandler(e)} value={password} onBlur={e =>handlerBlur(e)} name='password' type='text' placeholder='Password'/>
				<button type='submit' disabled={!formValid}>Submit</button>
			</form>
		</div>
	);
}

export default Login;