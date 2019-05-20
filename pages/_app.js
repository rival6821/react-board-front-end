import React from "react";
import Header from "../components/Head";
import PropTypes from "prop-types";

const Board = ({ Component }) => {
  return (
    <>
      <Header />
      <Component />
    </>
  );
};

Board.propTypes = {
  Component: PropTypes.elementType
};

export default Board;
