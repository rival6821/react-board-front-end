import React, { useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import classNames from 'classnames/bind';

import styles from 'styles/common.scss';
const cx = classNames.bind(styles);

const List = () => {
	const [lists, setLists] = useState([]);

	useEffect(() => {
		setLists([
			{
				title: '제목Test',
				nickname: '작성자Test',
				CreatedAt: '2019-05-07',
			},
			{
				title: '제목Test22',
				nickname: '작성자Test22',
				CreatedAt: '2019-05-08',
			},
		]);
	}, []);

	let tableCnt = lists.length;

	const listTable = lists.map((list, index) => {
		return (
			<TableRow hover key={index}>
				<TableCell align="center" className={cx('row1')}>
					{tableCnt--}
				</TableCell>
				<TableCell align="left" className={cx('row2')}>
					{list.title}
				</TableCell>
				<TableCell align="center" className={cx('row3')}>
					{list.nickname}
				</TableCell>
				<TableCell align="center" className={cx('row4')}>
					{list.CreatedAt}
				</TableCell>
			</TableRow>
		);
	});

	return (
		<Paper className={cx('lists')}>
			<Table className={cx('table')}>
				<TableHead>
					<TableRow>
						<TableCell align="center" className={cx('row1')}>
							번호
						</TableCell>
						<TableCell align="center" className={cx('row2')}>
							제목
						</TableCell>
						<TableCell align="center" className={cx('row3')}>
							작성자
						</TableCell>
						<TableCell align="center" className={cx('row4')}>
							작성시간
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>{listTable}</TableBody>
			</Table>
		</Paper>
	);
};

export default List;
