import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #87CEFA; /* Light blue color */
  color: white;
  text-align: center;
  padding: 10px;
  position: fixed;
  width: 100%;
  bottom: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 Interactive Storybooks</p>
    </FooterContainer>
  );
};

export default Footer;
