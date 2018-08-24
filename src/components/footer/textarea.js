import styled from 'styled-components';

export const Textarea = styled.textarea`
  border: none;
  border-bottom: 1px solid ${props => props.theme.brown};
  padding: 5px 8px 0;
  resize: none;
  width: 100%;
  margin: 15px 0;
  box-sizing: border-box;
  outline: none;
  color: ${props => props.theme.white};
  background: transparent;
  &::placeholder {
    color: ${props => props.theme.brown};
  }
`;

export default Textarea;
