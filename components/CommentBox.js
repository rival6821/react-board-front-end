import React, { useState } from "react";
import { Comment, Icon, Tooltip, Avatar } from "antd";
import moment from "moment";

const CommentBox = ({ comment }) => {
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);

  const actions = [
    <span>
      <Tooltip title="Like">
        <Icon
          type="like"
          theme={like ? "filled" : "outlined"}
          onClick={() => setLike(true)}
        />
      </Tooltip>
      <span style={{ paddingLeft: 8, cursor: "auto" }}>{comment.likes}</span>
    </span>,
    <span>
      <Tooltip title="Dislike">
        <Icon
          type="dislike"
          theme={dislike ? "filled" : "outlined"}
          onClick={() => setDislike(true)}
        />
      </Tooltip>
      <span style={{ paddingLeft: 8, cursor: "auto" }}>{comment.dislikes}</span>
    </span>,
    <span>Reply to</span>
  ];

  return (
    <Comment
      actions={actions}
      author={<a>{comment.name}</a>}
      avatar={
        <Avatar
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          alt={comment.name}
        />
      }
      content={<p>{comment.content}</p>}
      datetime={
        <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
          <span>{moment().fromNow()}</span>
        </Tooltip>
      }
    />
  );
};

export default CommentBox;
