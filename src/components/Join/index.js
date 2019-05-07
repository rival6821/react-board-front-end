import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import classNames from 'classnames/bind';

import styles from 'styles/common.scss';
const cx = classNames.bind(styles);


const Join = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordChk, setPasswordChk] = useState('');

    const emailRule = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    const emailChk = (email) => {
        const emailInput = document.getElementById('emailInput').parentNode.classList;
        if(!email){
            emailInput.remove('error');
            return;
        }
        // 중복검사 추가해야함
        if(emailRule.test(email)){
            emailInput.remove('error');
            return;
        }
        if(!emailInput.contains('error')){
            emailInput.add('error');
        }
    }

    return (
        <Paper className={cx('joinWrap')} >
            <div className={cx('title')}>회원가입</div>
            <form autoComplete="off" className={cx('joinForm')}>
                <TextField id="emailInput" margin="normal" label="이메일" value={email} onChange={e => {emailChk(e.target.value);setEmail(e.target.value)}} className={cx('textField')} fullWidth type="email"/>
                <TextField id="passwordInput" margin="normal" label="비밀번호" value={password} onChange={e => {setPassword(e.target.value)}} className={cx('textField')} fullWidth type="password"/>
                <TextField id="rePasswordInput" margin="normal" label="비밀번호 재입력" value={passwordChk} onChange={e => {setPasswordChk(e.target.value)}} className={cx('textField')} fullWidth type="password"/>
                <Button fullWidth color="primary" className={cx('joinBtn')} variant="contained">회원가입</Button>
            </form>
        </Paper>
    );
}

export default Join;