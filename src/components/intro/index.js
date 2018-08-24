import PropTypes from 'prop-types';
import styled from 'styled-components';
import Letter from './letter';

export const Intro = ({ className }) => (
  <div className={className}>
    <Letter char="P" duration={400} delay={300} />
    <Letter char="I" duration={400} delay={700} />
    <Letter char="N" duration={400} delay={1100} />
    <Letter char="S" duration={400} delay={1500} />
    <Letter char="K" duration={400} delay={1900} />
    <Letter char="Y" duration={400} delay={2300} />
    <Letter char="S" duration={400} delay={2700} />
    <Letter char=" P" duration={400} delay={3100} />
    <Letter char="A" duration={400} delay={3500} />
    <Letter char="L" duration={400} delay={3900} />
    <Letter char="L" duration={400} delay={4300} />
    <Letter char="E" duration={400} delay={4700} />
    <Letter char="T" duration={400} delay={5100} />
    <Letter char="S" duration={400} delay={5500} />
  </div>
);

Intro.propTypes = {
  className: PropTypes.string
};

export default styled(Intro)`
  position: fixed;
  background: ${props => props.theme.blue};
  color: ${props => props.theme.white};
  font-size: 5vw;
  font-family: 'Burnstowndam';
  width: 100vw;
  height: 100vh;
  z-index: 999999999999999999999;
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeOutLeft 4s;
  animation-delay: 5.9s;
  animation-fill-mode: both;

  @keyframes fadeOutLeft {
    0% {
      opacity: 1;
      transform: translateX(0);
    }
    10% {
      color: ${props => props.theme.brown};
    }
    50% {
      opacity: 1;
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      transform: translateX(-100vw);
      color: ${props => props.theme.brown};
    }
  }
`;
