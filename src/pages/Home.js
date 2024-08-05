import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Container with a clean, modern look and a subtle background image
const HomeContainer = styled.div`
  text-align: center;
  padding: 40px;
  background: url('../assets/background.jpg') no-repeat center center fixed;
  background-size: cover;
  color: #fff;
  min-height: 100vh;
`;

// Title with a contemporary font and a new color
const Title = styled.h1`
  font-size: 3.2em;
  margin-bottom: 20px;
  font-family: 'Poppins', sans-serif;
  color: #ffcccb; /* Soft pink color */
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5); /* Enhanced text shadow */
`;

// Description with a new color and font style
const Description = styled.p`
  font-size: 1.5em;
  margin-bottom: 40px;
  font-weight: 400;
  line-height: 1.6;
  color: #00bfff; /* Light blue color */
`;

// Button with a sleek design, subtle shadow, and a smooth hover effect
const Button = styled(Link)`
  display: inline-block;
  padding: 12px 24px;
  margin: 15px;
  font-size: 1.2em;
  color: #fff;
  background-color: #3498db; /* Blue color */
  text-decoration: none;
  border-radius: 25px; /* Rounded corners */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Subtle shadow */
  transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
  
  &:hover {
    background-color: #2980b9; /* Darker blue on hover */
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.3); /* Darker shadow on hover */
    transform: translateY(-3px); /* Lift effect on hover */
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <Title>Welcome to Online Story Bookstore</Title>
      <Description>Discover a captivating world of interactive storybooks that inspire and educate children.</Description>
      <Button to="/storybooks">Explore Storybooks</Button>
      <Button to="/login">Login</Button>
      <Button to="/register">Register</Button>
    </HomeContainer>
  );
};

export default Home;
