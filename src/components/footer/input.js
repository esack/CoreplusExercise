import styled from 'styled-components';

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${props => props.theme.brown};
  padding: 0.3rem 0.5rem;
  width: 42%;
  margin: 15px 0;
  height: 30px;
  outline: none;
  color: ${props => props.theme.white};
  background: transparent;
  &::placeholder {
    color: ${props => props.theme.brown};
  }
`;

export default Input;
