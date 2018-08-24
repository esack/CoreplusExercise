import PropTypes from 'prop-types';
import { Bounce } from 'react-reveal';

export const Letter = ({ char, delay, duration }) => (
  <Bounce top big cascade duration={duration} delay={delay}>
    {char}
  </Bounce>
);

Letter.propTypes = {
  char: PropTypes.string,
  delay: PropTypes.number,
  duration: PropTypes.number
};

export default Letter;
