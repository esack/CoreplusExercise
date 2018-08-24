import styled from 'styled-components';
import PropTypes from 'prop-types';
import EmailForm from './email-form';

export const Logo = ({ className }) => (
  <div className={className}>
    <span className="siteText">Coreplus</span>
    <EmailForm />
  </div>
);

Logo.propTypes = {
  className: PropTypes.string
};

export default styled(Logo)`
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  flex-wrap: wrap;
  .siteText {
    font-family: 'Burnstowndam';
    font-size: 2.9rem;
    transition: all 0.5s ease;
    @media (max-width: 700px) {
      font-size: 2rem;
      flex-basis: 100%;
      width: 100%;
      text-align: center;
    }
  }
`;
