import { Button } from 'antd';
import styled from 'styled-components';

export const StyledButton = styled(Button)`
  background-color: #52c41a;
  color: #ffffff;
  border-style: none;
  width: 100%;
  height: 100%;
  padding: 1vh;
  font-weight: bold;
  &:hover {
    background-color: #389e0d;
    color: black;
  }
`;
