import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Slide = ({ className, quoter, text }) => (
  <div className={className}>
    <div className="quote-container">
      <div>
        <blockquote className="blockquote">
          <p className="quoteText">{`${text}"`}</p>
        </blockquote>
        <cite className="cite">
          <span className="quoter">{quoter}</span>
        </cite>
      </div>
    </div>
  </div>
);

Slide.propTypes = {
  className: PropTypes.string,
  quoter: PropTypes.string,
  text: PropTypes.string
};

export default styled(Slide)`
  font-size: 1.6rem;
  position: relative;
  padding: 50px 0;
  @media (max-width: 700px) {
    padding-bottom: 0;
  }

  .blockquote {
    font-family: Georgia, serif;
    font-size: 2vw;
    font-style: italic;
    line-height: 1.4 !important;
    margin: 0;
    position: relative;
    z-index: 600;
    box-sizing: border-box;
    @media (max-width: 700px) {
      font-size: 4vw;
    }
  }
  .quote-container {
    width: 75%;
    margin: auto;
  }

  .quoteText {
    color: ${props => props.theme.brown};
    line-height: 1.4 !important;
    &:first-child:before {
      content: '\\201C';
      color: ${props => props.theme.quoteBlue};
      font-size: 7.5em;
      font-weight: 700;
      opacity: 0.3;
      position: absolute;
      top: -0.4em;
      left: -10px;
      z-index: -300;
    }
  }

  .cite {
    color: gray;
    display: block;
    font-size: 0.8em;
    text-align: right;
  }

  .quoter {
    color: ${props => props.theme.grey};
    font-size: 0.8rem;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
`;
