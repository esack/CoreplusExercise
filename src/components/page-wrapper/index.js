import styled from 'styled-components';
import image from '../../assets/images/background.png';

export const PageWrapper = styled.div`
  background-color: ${props => props.theme.darkBlue};
  background-image: linear-gradient(
      to top,
      rgba(46, 49, 65, 0.8),
      rgba(46, 49, 65, 0.8)
    ),
    url(${image});
  background-size: auto, cover;
  background-attachment: fixed, fixed;
  background-position: center, center;
  height: 100%;
`;

export default PageWrapper;
