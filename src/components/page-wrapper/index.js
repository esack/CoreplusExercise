import styled from 'styled-components';

export const PageWrapper = styled.div`
  background-color: ${props => props.theme.bgColor};
  background-size: auto, cover;
  background-attachment: fixed, fixed;
  background-position: center, center;
  height: 100%;
`;

export default PageWrapper;
