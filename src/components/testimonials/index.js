import Slider from 'react-slick';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Zoom } from 'react-reveal';
import Slide from './slide';

export const Testimonials = ({ className }) => (
  <div className={className}>
    <Zoom>
      <Slider
        dots
        infinite
        autoplay
        autoplaySpeed={4500}
        speed={700}
        slidesToShow={1}
        slidesToScroll={1}
        arrows={false}
      >
        <Slide
          quoter="R' Frankenthal"
          text="I have had the pleasure of working with Mr. Pinsky.  He fixed my dining room table, working professionally, and with utmost integrity and dedication, as a true artist.  I highly recommend his superb work, and his exceptional work ethic."
        />
        <Slide
          quoter="A. Weinraub"
          text="It was definitely the right decission to have Avi build my pergola. He puts a tremendous amount of skill and passion into every detail of his work. A great and honest guy to work with."
        />
      </Slider>
    </Zoom>
  </div>
);

Testimonials.propTypes = {
  className: PropTypes.string
};

export default styled(Testimonials)`
  width: 100%;
  padding-bottom: 50px;
  background-color: ${props => props.theme.blue};
  .slick-dots li button:before {
    color: white;
  }
`;
