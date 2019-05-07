import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import classNames from 'classnames/bind';

import styles from 'styles/common.scss';
const cx = classNames.bind(styles);

const Post = ({ history }) => {
	const title = '제목';
	const nickname = '닉네임';
	const CreatedAt = '2019-05-07';
	const contents =
		'대고, 것은 새가 그들에게 봄날의 용감하고 있음으로써 힘있다. 싹이 구하지 실현에 황금시대다. 가장 구하지 지혜는 못할 것이다.보라, 사랑의 같은 심장의 우리 것이다. 황금시대를 열락의 청춘의 귀는 밥을 청춘은 황금시대의 오아이스도 운다. 끓는 앞이 위하여 발휘하기 속에서 인간의 황금시대다. 내려온 그들의 이상은 그들은 쓸쓸하랴? 오직 할지니, 하는 소리다.이것은 트고, 뿐이다. 청춘의 우리는 풀이 살았으며, 가는 만천하의 청춘의 그러므로 같이 봄바람이다. 이 거선의 이상 석가는 미묘한 더운지라 능히 가진 돋고, 있으랴?';

	return (
		<Paper className={cx('postWrap')}>
			<Typography variant="h4" className={'title'}>
				{title}
			</Typography>
			<div className={'sub'}>
				<div className={'nickname'}>{nickname}</div>
				<div className={'CreatedAt'}>{CreatedAt}</div>
			</div>
			<div className={'contents'}>{contents}</div>
			<Button
				variant="contained"
				onClick={() => {
					history.goBack();
				}}
				className={'listBtn'}
			>
				목록
			</Button>
		</Paper>
	);
};

export default withRouter(Post);
