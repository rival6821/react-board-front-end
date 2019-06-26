import React, { useState } from "react";
import CommentBox from "../components/CommentBox";
import styled from "styled-components";

const dummy = [
  {
    id: 1,
    name: "ilhoon",
    content: "test",
    likes: 0,
    dislikes: 0
  },
  {
    id: 2,
    name: "ilhoon222",
    content: "test222",
    likes: 0,
    dislikes: 0
  }
];

const Wrap = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const List = () => {
  return (
    <Wrap>
      {dummy.map(c => {
        return <CommentBox key={c.id} comment={c} />;
      })}
    </Wrap>
  );
};

export default List;
