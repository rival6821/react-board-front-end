import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';

import classNames from 'classnames/bind';

import styles from 'styles/common.scss';
const cx = classNames.bind(styles);

const Post = () => {
	return <Paper className={cx('postWrap')}>포스트</Paper>;
};

export default Post;
