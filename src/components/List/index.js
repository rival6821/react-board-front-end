import React from 'react'
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
    return (
        <Paper className={cx('lists')}>
            <Table className={cx('table')}>
                <TableHead>
                    <TableRow>
                        <TableCell align="center" className={cx('row1')}>번호</TableCell>
                        <TableCell align="center" className={cx('row2')}>제목</TableCell>
                        <TableCell className={cx('row3')}>작성자</TableCell>
                        <TableCell className={cx('row4')}>작성시간</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell align="center" className={cx('row1')}>1</TableCell>
                        <TableCell align="left" className={cx('row2')}>제목22</TableCell>
                        <TableCell className={cx('row3')}>작성자33</TableCell>
                        <TableCell className={cx('row4')}>2019-01-01</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Paper >
    );
}

export default List;