import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const Layout = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

const Board = ({ Component }) => {
  return (
    <>
      <Head>
        <title>후니보드</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"
        />
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
