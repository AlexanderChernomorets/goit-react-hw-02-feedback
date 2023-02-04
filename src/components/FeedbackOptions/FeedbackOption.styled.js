import styled from 'styled-components';

export const Button = styled.button`
  background: rgb(59, 79, 87);
  background: linear-gradient(
    90deg,
    rgba(59, 79, 87, 1) 13%,
    rgba(86, 96, 147, 1) 79%
  );
  border: 1px solid #000;
  border-radius: 4px;
  box-shadow: #fff 4px 4px 0 0, #000 4px 4px 0 1px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;

  font-family: Arial, sans-serif;
  font-size: 14px;
  font-weight: 800;
  line-height: 20px;
  margin: 0 5px 10px 0;

  padding: 12px 25px;
  text-align: center;
  text-transform: uppercase;

  :hover {
    box-shadow: rgba(0, 0, 0, 0.125) 0 3px 5px inset;
    outline: 0;
    box-shadow: #fff 2px 2px 0 0, #000 2px 2px 0 1px;
    transform: translate(2px, 2px);
  }
  :focus {
    box-shadow: rgba(0, 0, 0, 0.125) 0 3px 5px inset;
    outline: 0;
    box-shadow: #fff 2px 2px 0 0, #000 2px 2px 0 1px;
    transform: translate(2px, 2px);
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  
`;
