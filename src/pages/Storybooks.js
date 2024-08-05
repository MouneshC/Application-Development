import React from 'react';
import styled from 'styled-components';
import Storybook from '../components/Storybook';

const StorybooksContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
  background-color: #f4f4f9; /* Light gray background */
`;

const Header = styled.h1`
  text-align: center;
  margin-bottom: 40px;
  font-size: 3em;
  color: #444; /* Darker gray color */
  font-family: 'Arial', sans-serif; /* Different font family */
`;

const StorybookGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px; /* Increased gap between items */
`;

const StorybookCard = styled.div`
  background-color: white;
  border-radius: 10px; /* Rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  padding: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px); /* Slight lift on hover */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Darker shadow on hover */
  }
`;

const StorybookTitle = styled.h2`
  font-size: 1.8em;
  margin-bottom: 10px;
  color: #333; /* Dark gray color */
`;

const StorybookDescription = styled.p`
  font-size: 1em;
  color: #666; /* Lighter gray color */
`;

const storybooksData = [
  { title: 'Press Here', description: 'An interactive book with fun activities.' },
  { title: 'Mix It Up!', description: 'A colorful and engaging interactive story.' },
  { title: 'Let\'s Play', description: 'A playful interactive book for kids.' },
  { title: 'Tap the Magic Tree', description: 'A magical interactive book.' },
  { title: '8000 Things You Should Know',description: 'General Knowledge.'}
  // Add more storybooks data as needed
];

const Storybooks = () => {
  return (
    <StorybooksContainer>
      <Header>Interactive Storybooks</Header>
      <StorybookGrid>
        {storybooksData.map((storybook, index) => (
          <StorybookCard key={index}>
            <StorybookTitle>{storybook.title}</StorybookTitle>
            <StorybookDescription>{storybook.description}</StorybookDescription>
          </StorybookCard>
        ))}
      </StorybookGrid>
    </StorybooksContainer>
  );
};

export default Storybooks;
