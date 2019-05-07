import React from 'react'
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from 'styles/common.scss';
const cx = classNames.bind(styles);

const Header = () => {
    return (
        <div className={cx('header')}>
            <div className={cx('logo','left')}>
                로고
            </div>
            <Link className={cx('login','right')} to="/login">
                로그인
            </Link>
        </div>
    );
}

export default Header;