import React, { useState } from "react";
import { Comment, Icon, Tooltip, Avatar } from "antd";
import moment from "moment";

const dummy = {
  likes: 0,
  dislikes: 0
};

const List = () => {
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
      <span style={{ paddingLeft: 8, cursor: "auto" }}>{dummy.likes}</span>
    </span>,
    <span>
      <Tooltip title="Dislike">
        <Icon
          type="dislike"
          theme={dislike ? "filled" : "outlined"}
          onClick={() => setDislike(true)}
        />
      </Tooltip>
      <span style={{ paddingLeft: 8, cursor: "auto" }}>{dummy.dislikes}</span>
    </span>,
    <span>Reply to</span>
  ];

  return (
    <Comment
      actions={actions}
      author={<a>Han Solo</a>}
      avatar={
        <Avatar
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          alt="Han Solo"
        />
      }
      content={
        <p>
          We supply a series of design principles, practical patterns and high
          quality design resources (Sketch and Axure), to help people create
          their product prototypes beautifully and efficiently.
        </p>
      }
      datetime={
        <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
          <span>{moment().fromNow()}</span>
        </Tooltip>
      }
    />
  );
};

export default List;
