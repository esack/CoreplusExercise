import styled from 'styled-components';
import PropTypes from 'prop-types';
import Wrapper from './wrapper';

export const MainContent = ({ className }) => (
  <section className={className}>
    <Wrapper />
  </section>
);

MainContent.propTypes = {
  className: PropTypes.string
};

export default styled(MainContent)`
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
`;
