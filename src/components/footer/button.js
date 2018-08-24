import styled from 'styled-components';

export const Button = styled.input`
  border-radius: 4px;
  border: none;
  padding: 0.8rem 2rem;
  margin: 10px auto;
  outline: none;
  color: ${props => props.theme.white};
  background: ${props => props.theme.brown};
`;

export default Button;
