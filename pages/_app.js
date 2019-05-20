import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Layout from "../components/Layout";
import PropTypes from "prop-types";

const Board = ({ Component }) => {
  return (
    <>
      <Head>
        <title>후니보드</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <Header />
        <Component />
      </Layout>
    </>
  );
};

Board.propTypes = {
  Component: PropTypes.elementType
};

export default Board;
