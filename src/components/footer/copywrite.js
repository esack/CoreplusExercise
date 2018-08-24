import styled from 'styled-components';
import PropTypes from 'prop-types';

export const CopyWrite = ({ className }) => (
  <div className={className}>
    <span>© 2018 Eli Sack · All rights reserved</span>
    <span>Powered By The Sack</span>
  </div>
);

CopyWrite.propTypes = {
  className: PropTypes.string
};

export default styled(CopyWrite)`
  padding: 20px 0;
  display: flex;
  font-size: 0.8rem;
  justify-content: space-between;
  .siteText {
    font-family: 'Burnstowndam';
    font-size: 3rem;
    padding-left: 15px;
    transition: all 0.5s ease;
    @media (max-width: 700px) {
      font-size: 2rem;
      padding-left: 5px;
    }
  }
`;
