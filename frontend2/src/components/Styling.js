import styled from 'styled-components';
import { Link } from 'react-router-dom';
const greens = ['#C6F28B', '#AFEB60', '#96DB3C', '#7AC815', '#5B9B09']
const blues = ['77B3C9', '#4A8FAA', '#2E7A96', '#14698A', '#0A506B']
const darker = ['#7CD79E', '#4FC079', '#30AE5F', '#119F46', '#077B32']

export const Big = styled.h1`
color:${greens[4]};
background-color:${greens[2]};
margin:0;
`;
export const Listed = styled.li`
margin:15px;
color:${blues[4]};
`
export const Back = styled.div`
background-color:${blues[1]};
`
export const Regi = styled.h1`
background-color:${blues[1]};
color:${greens[2]};
`
export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;
export const StyledLink =
  styled(Link)`
    color: ${darker[4]};
    margin: 15px;;
    text-decoration:none;
    &:hover {
      font-size:150%;
      color:${darker[0]};
    }
  `;
export const Rap = styled.label`
  margin:10px;
  color:${blues[3]};
  `
export const Imps = styled.input`
margin: 10px;
  background-color:${greens[4]};
  border: 0;
  &:hover{
    border:3px solid ${darker[4]};
  }
  &:focus{
    border:3px solid ${darker[4]};
    background-color:${greens[2]};
    color:${blues[4]}
  }
  `;
export const Log = styled.input`
margin:10px;
  background-color:${greens[0]};
  border: 0;
  &:hover{
    border:3px solid ${darker[4]};
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
  }
  &:focus{
    border:3px solid ${darker[4]};
    background-color:${greens[2]};
  }
  `
export const Sell = styled.select`
  margin:10px;
  background-color:${greens[0]};
  border: 0;
  &:hover{
    border:3px solid ${darker[4]};
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
  }
  &:focus{
    border:3px solid ${darker[4]};
    background-color:${greens[2]};
  }
  `
export const Opt = styled.option`

  `