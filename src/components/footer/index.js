import PropTypes from 'prop-types';
import styled from 'styled-components';
import Logo from './logo';
import CopyWrite from './copywrite';

export const Footer = ({ className }) => (
  <div className={className}>
    <Logo />
    <CopyWrite />
  </div>
);

Footer.propTypes = {
  className: PropTypes.string
};

export default styled(Footer)`
  background: ${props => props.theme.blue};
  color: ${props => props.theme.white};
  padding: 80px 90px 0;
  left: 0;
  right: 0;
  bottom: 0;
  @media (max-width: 700px) {
    padding: 80px 30px 0;
  }
`;
