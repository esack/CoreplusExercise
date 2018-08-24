import Styled from 'styled-components';
import PropTypes from 'prop-types';
import Logo from '../logo';

export const Hero = ({ className }) => (
  <div className={className}>
    <div className="inner">
      <div className="logo">
        <Logo />
        <h2 className="firstText">Coreplus exercise</h2>
        <p className="secondText">text</p>
      </div>
    </div>
  </div>
);

Hero.propTypes = {
  className: PropTypes.string
};

export default Styled(Hero)`
  color: white;
  padding: 10em 0 4.75em 0;

  @media screen and (max-width: 1280px) {
    padding: 7em 0 8.25em 0;
    margin-bottom: -6.5em;
  }

  @media screen and (max-width: 980px) {
    padding: 12em 3em 12.375em 3em;
    margin-bottom: -4.75em;
  }

  @media screen and (max-width: 736px) {
    padding: 5em 2em 4.25em 2em;
    margin-bottom: -2.5em;
  }

  .inner {
    margin: 0 auto;
    width: 55em;

    @media screen and (max-width: 980px) {
      width:100%;
    }
  }

  .logo {
    transition: opacity 2s ease, transform 1s ease;
    transform: translateY(0);
    opacity: 1; 
    margin: 0 0 1.3em 0;
    transition: all 0.5s ease;

    @media screen and (max-width: 736px) {
      margin: 0 0 1em 0;
    }
  }

  .firstText {
    transition: opacity 0.5s ease, transform 0.5s ease, filter 0.25s ease;
    transform: translateX(0);
    transition-delay: 0.65s;
    filter: blur(0);
    opacity: 1;
    border-bottom: solid 2px rgba(255, 255, 255, 0.125);
    font-size: 2.25em;
    margin-bottom: 0.6em;
    padding-bottom: 0.4em;
    letter-spacing: 0.1em;
    text-transform: uppercase;   

    @media screen and (max-width: 736px) {
      font-size: 1.5em;
    }
  }

  .secondText {
    transition: opacity 0.5s ease, transform 0.5s ease, filter 0.25s ease;
    transform: translateX(0);
    transition-delay: 0.8s;
    filter: blur(0);
    opacity: 1;
    font-size: 1em;
    letter-spacing: 0.1em;
    line-height: 2;
    text-transform: uppercase; 
    font-family: 'OpenSansLight'; 

    @media screen and (max-width: 736px){
    font-size: 0.8em;
    }
  }
`;
