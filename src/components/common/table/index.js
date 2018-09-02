import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Header from './components/header';

export const MaterialTable = ({
  headers,
  children,
  xs,
  md,
  title,
  localTheme
}) => {
  const StyledGrid = styled(Grid)`
    background-color: ${localTheme ? localTheme.tableBg : null};
    @media (min-width: 960px) {
      margin-top: 20px !important;
    }
  `;

  const StyledGridTitle = styled(Grid)`
    padding-bottom: 10px;

    @media (min-width: 960px) {
      padding-bottom: 20px;
      font-size: 1.8rem;
    }
  `;

  return (
    <StyledGrid item xs={xs} md={md}>
      <StyledGridTitle item md={12}>
        {title}:
      </StyledGridTitle>
      <Hidden smDown>
        <Header headers={headers} />
      </Hidden>
      {children}
    </StyledGrid>
  );
};

MaterialTable.propTypes = {
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      xs: PropTypes.number
    })
  ),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  xs: PropTypes.number,
  md: PropTypes.number,
  title: PropTypes.string,
  localTheme: PropTypes.shape({ tableBg: PropTypes.func })
};

export default MaterialTable;
