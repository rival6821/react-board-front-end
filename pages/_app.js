import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import PropTypes from "prop-types";

const Board = ({ Component }) => {
  return (
    <>
      <Head>
        <title>후니보드</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.18.2/antd.css"
        />
      </Head>
      <div>
        <Header />
        <Component />
      </div>
    </>
  );
};

Board.propTypes = {
  Component: PropTypes.elementType
};

export default Board;
