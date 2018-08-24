import Styled from 'styled-components';
import PropTypes from 'prop-types';

export const Logo = ({ className }) => (
  <span className={className}>
    <span className="c">C</span>
    <span className="rest">ingulant</span>
  </span>
);

Logo.propTypes = {
  className: PropTypes.string
};

export default Styled(Logo)`
  .c {
    font-family: 'SegoeScript';
    font-size: 3.5rem;
    color: ${props => props.theme.blue}; // blue
    transition: all 0.5s ease;

    @media (max-width: 736px) {
      font-size: 2.2rem;
      padding-left: 5px;
    }
  }

  .rest {
    font-family: 'OpenSans';
    margin-left: -20px;
    font-size: 1rem;
    position: relative;
    top: -10px;
    letter-spacing: 0.4rem;
    text-transform: uppercase;
    transition: all 0.5s ease;

    @media (max-width: 736px) {
      margin-left: -11px;
      font-size: 0.8rem;
      top: -5px;
      letter-spacing: 0.2rem;
    }
  }
`;
