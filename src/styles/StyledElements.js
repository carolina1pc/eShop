import styled from "styled-components";
import './../components/Colors.css'

export const PrimaryTitle = styled.h1`
  font-size: 30pxrem;
  margin-bottom: 10px;
  color: var(--text-color);
`;

export const SecondaryTitle = styled.h2`
  font-size: 18px;
  color: var(--text-color);
`;

export const Button = styled.button`
  color: #fff;
  background-color: #202020;
  border: 2px solid var(--primary-color);
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  margin-top: 15px;
  &:hover {
  background-color: #00e9fe;
  color: #000;
  }
  `;