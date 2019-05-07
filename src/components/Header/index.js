import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from 'styles/common.scss';
const cx = classNames.bind(styles);

const Header = () => {
	return (
		<div className={cx('header')}>
			<Link className={cx('logo', 'left')} to="/">
				로고
			</Link>
			<div className={cx('right')}>
				<Link className={cx('login')} to="/login">
					로그인
				</Link>
				<Link className={cx('join')} to="/join">
					회원가입
				</Link>
			</div>
		</div>
	);
};

export default Header;
