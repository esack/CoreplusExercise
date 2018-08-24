import styled from 'styled-components';
import PropTypes from 'prop-types';
import $ from 'jquery';

export const Header = ({ className }) => {
  let lastScrollTop = 0;

  $(window).scroll(() => {
    const st = $(window).scrollTop();
    if (Math.abs(lastScrollTop - st) <= 5) {
      return false;
    }
    if (st > lastScrollTop && st > 80) {
      // Scroll Down
      $('header')
        .removeClass('nav-down')
        .addClass('nav-up');
    } else if (st + $(window).height() < $(document).height()) {
      $('header')
        .removeClass('nav-up')
        .addClass('nav-down');
    }
    lastScrollTop = st;
  });

  return (
    <header className={className}>
      <span className="headerText">
        <span className="c">C</span>
        <span className="rest">ingulant</span>
      </span>
    </header>
  );
};
Header.propTypes = {
  className: PropTypes.string
};

export default styled(Header)`
  width: 100%;
  position: fixed;
  top: 0;
  height: 80px;
  background: ${props => props.theme.darkBlue};
  z-index: 2;
  color: ${props => props.theme.white};
  transition: top 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 700px) {
    height: 40px;
  }

  .headerText {
    padding-left: 15px;
    transition: all 0.5s ease;
    @media (max-width: 700px) {
      padding-left: 5px;
    }
  }

  .c {
    font-family: 'SegoeScript';
    font-size: 4.4rem;
    color: ${props => props.theme.blue};
    transition: all 0.5s ease;
    @media (max-width: 700px) {
      font-size: 2.2rem;
      padding-left: 5px;
    }
  }
  .rest {
    margin-left: -20px;
    font-size: 1.5rem;
    position: relative;
    top: -10px;
    letter-spacing: 0.4rem;
    text-transform: uppercase;
    transition: all 0.5s ease;
    @media (max-width: 700px) {
      margin-left: -11px;
      font-size: 0.8rem;
      top: -5px;
      letter-spacing: 0.2rem;
    }
  }

  &.nav-up {
    top: -80px;
    @media (max-width: 700px) {
      top: -40px;
    }
  }
`;
