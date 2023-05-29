import React, { useState } from 'react';
import styled from 'styled-components';

const colors = [
  '#FF0000', // Red
  '#00FF00', // Green
  '#0000FF', // Blue
  '#FFFF00', // Yellow
  '#FF00FF', // Magenta
  '#00FFFF', // Cyan
  '#FFA500', // Orange
  '#800080', // Purple
];

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
`;

const InputWrapper = styled.div`
  display: flex;
  padding:2px;
  height:40px;
  margin-bottom: 1rem;
  margin-top:2rem;

`;

const Card = styled.div`
  width: 200px;
  height: 200px;
  margin-top:2px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ bgColor }) => bgColor};
`;

const ColorButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 2px;
  margin-top:10px;
  margin-right: 0.5rem;
  background-color: ${({ color }) => color};
  border: none;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }
`;

const App = () => {
  const [name, setName] = useState('');
  const [bgColor, setBgColor] = useState('#FFFFFF');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleColorChange = (color) => {
    setBgColor(color);
  };

  return (
    <AppWrapper>
      <div>
        {colors.map((color, index) => (
          <ColorButton
            key={index}
            color={color}
            onClick={() => handleColorChange(color)}
          />
        ))}
      </div>
      <InputWrapper>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleNameChange}
        />
      </InputWrapper>
      <Card bgColor={bgColor}>
        <img src="your-photo.jpg" alt="Your Photo" />
        <p>{name}</p>
      </Card>
      
    </AppWrapper>
  );
};

export default App;
