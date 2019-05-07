import React, { useState } from 'react';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import classNames from 'classnames/bind';

import styles from 'styles/common.scss';
const cx = classNames.bind(styles);

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<Paper className={cx('loginWrap')}>
			<div className={cx('title')}>로그인</div>
			<form autoComplete="off" className={cx('loginForm')}>
				<TextField
					id="emailInput"
					margin="normal"
					label="이메일"
					value={email}
					onChange={e => {
						setEmail(e.target.value);
					}}
					className={cx('textField')}
					fullWidth
					type="email"
				/>
				<TextField
					id="ipasswordInput"
					margin="normal"
					label="비밀번호"
					value={password}
					onChange={e => {
						setPassword(e.target.value);
					}}
					className={cx('textField')}
					fullWidth
					type="password"
				/>
				<Button
					fullWidth
					color="primary"
					className={cx('loginBtn')}
					variant="contained"
				>
					로그인
				</Button>
			</form>
			<div className={cx('joinBtn')}>
				<Link href={'./join'}>회원가입</Link>
			</div>
		</Paper>
	);
};

export default Login;
