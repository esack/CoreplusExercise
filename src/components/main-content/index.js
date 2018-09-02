import styled from 'styled-components';
import { Report } from '../report';

const StyledSection = styled.section`
  input {
    text-decoration: underline;
  }
`;

export const MainContent = () => (
  <StyledSection>
    <Report />
  </StyledSection>
);

export default MainContent;
