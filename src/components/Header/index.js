import React from 'react'
import classNames from 'classnames/bind';
import styles from 'styles/common.scss';
const cx = classNames.bind(styles);

const Header = () => {
    return (
        <div className={cx('header')}>
            <div className={cx('logo')}>
                로고
            </div>
            <div className={cx('login')}>
                로그인
            </div>
        </div>
    );
}

export default Header;