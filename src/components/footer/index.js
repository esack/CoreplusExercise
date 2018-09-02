import styled from 'styled-components';
import CopyWrite from './copywrite';

const DivContainer = styled.div`
  padding: 20px 45px 0;
  left: 0;
  right: 0;
  bottom: 0;
  @media (max-width: 700px) {
    padding: 40px 15px 0;
  }
`;

export const Footer = () => (
  <DivContainer>
    <CopyWrite />
  </DivContainer>
);

export default Footer;
