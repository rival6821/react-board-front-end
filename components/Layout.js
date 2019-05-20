import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const Body = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

const Layout = ({ children }) => {
  return <Body>{children}</Body>;
};

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
