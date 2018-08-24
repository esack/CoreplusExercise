import styled from 'styled-components';

const Div = styled.div`
  padding: 100px 0;
  width: 55%;
  margin: auto;
  text-align: center;
  font-size: 2.5vw;
  background: transparent;
  font-family: 'SourceSansPro';
  letter-spacing: 6.075px;
  line-height: 4.5vw;
  text-transform: capitalize;
  mix-blend-mode: difference;
  color: ${props => props.theme.brown};
  @media (max-width: 700px) {
    font-size: 3.5vw;
  }
`;

export const TransparentContent = () => (
  <Div>Combining passion and art to bring you the finest of woodworking</Div>
);

export default TransparentContent;
