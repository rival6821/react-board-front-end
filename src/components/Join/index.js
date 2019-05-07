import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import classNames from 'classnames/bind';

import styles from 'styles/common.scss';
const cx = classNames.bind(styles);

const Join = () => {
	const [email, setEmail] = useState('');
	const [emailChk, setEmailChk] = useState(true);
	const [password1, setPassword1] = useState('');
	const [passwordChk1, setPasswordChk1] = useState(true);
	const [password2, setPassword2] = useState('');
	const [passwordChk2, setPasswordChk2] = useState(true);

	// 이메일 정규식
	const emailRule = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
	// 비밀번호 정규식 8~20자 영문,숫자,특수문자
	const passwordRule = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;

	const emailTest = email => {
		if (!email) {
			setEmailChk(true);
			return;
		}
		// 중복검사 추가해야함
		if (emailRule.test(email)) {
			setEmailChk(true);
			return;
		}
		setEmailChk(false);
	};

	const passwordTest = (pass, type) => {
		if (!pass) {
			type === '1' ? setPasswordChk1(true) : setPasswordChk2(true);
			return;
		}
		if (passwordRule.test(pass)) {
			type === '1' ? setPasswordChk1(true) : setPasswordChk2(true);
			return;
		}
		type === '1' ? setPasswordChk1(false) : setPasswordChk2(false);
	};

	return (
		<Paper className={cx('joinWrap')}>
			<div className={cx('title')}>회원가입</div>
			<form autoComplete="off" className={cx('joinForm')}>
				<TextField
					id="emailInput"
					margin="normal"
					label="이메일"
					value={email}
					onChange={e => {
						emailTest(e.target.value);
						setEmail(e.target.value);
					}}
					className={cx('textField')}
					fullWidth
					type="email"
					helperText={
						emailChk ? '' : '이메일양식에 맞게 입력해주세요'
					}
					error={emailChk ? false : true}
				/>
				<TextField
					id="passwordInput"
					margin="normal"
					label="비밀번호"
					value={password1}
					onChange={e => {
						passwordTest(e.target.value, '1');
						setPassword1(e.target.value);
					}}
					className={cx('textField')}
					fullWidth
					type="password"
					helperText={
						'영문+숫자+특수문자를 혼합하여 8자~20자로 입력해주세요'
					}
					error={passwordChk1 ? false : true}
				/>
				<TextField
					id="rePasswordInput"
					margin="normal"
					label="비밀번호 재입력"
					value={password2}
					onChange={e => {
						passwordTest(e.target.value, '2');
						setPassword2(e.target.value);
					}}
					className={cx('textField')}
					fullWidth
					type="password"
					helperText={
						passwordChk2 ? '' : '비밀번호를 동일하게 입력해주세요'
					}
					error={passwordChk2 ? false : true}
				/>
				<Button
					fullWidth
					color="primary"
					className={cx('joinBtn')}
					variant="contained"
				>
					회원가입
				</Button>
			</form>
		</Paper>
	);
};

export default Join;
