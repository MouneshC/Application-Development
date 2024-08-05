import React from 'react';
import styled from 'styled-components';

// Simplified container with a solid background color
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f2f5; /* Light gray background */
  padding: 20px;
`;

// Simplified form with a clean design
const Form = styled.form`
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 350px;

  h2 {
    margin-bottom: 20px;
    font-size: 1.8em;
    color: #333;
  }

  label {
    display: block;
    margin-bottom: 15px;
    font-size: 1em;
    color: #555;
  }

  input {
    width: 100%;
    padding: 10px;
    font-size: 1em;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-top: 5px;
    box-sizing: border-box;
  }

  input:focus {
    border-color: #007bff;
    outline: none;
  }
`;

// Simplified button with basic styling
const Button = styled.button`
  display: inline-block;
  padding: 12px 20px;
  font-size: 1em;
  color: #fff;
  background-color: #007bff; /* Blue color */
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #0056b3; /* Darker blue on hover */
    transform: scale(1.02); /* Slight scale effect on hover */
  }
`;

const Login = () => {
  return (
    <Container>
      <Form>
        <h2>Login</h2>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Password:
          <input type="password" name="password" required />
        </label>
        <Button type="submit">Login</Button>
      </Form>
    </Container>
  );
};

export default Login;
