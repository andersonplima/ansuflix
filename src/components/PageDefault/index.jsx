import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 94px;
    padding-left: 5%;
    padding-right: 5%;

    @media (max-width: 800px) {
        padding-top: 44px;
    }
`;

function PageDefault({ children }) {
  return (
    <>
      <Menu />
      <Main>
        {children}
      </Main>
      <Footer />
    </>
  );
}

PageDefault.defaultProps = {
  children: [],
};

PageDefault.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default PageDefault;
