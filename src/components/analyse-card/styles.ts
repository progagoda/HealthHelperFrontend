import { Button } from 'antd';
import styled from 'styled-components';

export const StyledButtonAdd = styled(Button)`
  background-color: #52c41a;
  color: #ffffff;
  border-style: none;
  width: 90%;
  text-align: center;
  font-weight: bold;
  &:hover {
    background-color: #389e0d;
    color: black;
  }
`;
export const StyledButtonRemove = styled(Button)`
  background-color: #faad14;
  color: #ffffff;
  border-style: none;
  width: 90%;
  text-align: center;
  font-weight: bold;
  &:hover {
    background-color: #faad14;
    color: black;
  }
`;
