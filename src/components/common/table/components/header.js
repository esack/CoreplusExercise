import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledGrid = styled(Grid)`
  border-bottom: 1px solid ${props => props.theme.black};
  padding: 3px 2px;
  font-size: 1.3rem;
`;

export const Header = ({ headers }) => (
  <StyledGrid
    container
    direction="row"
    justify="space-evenly"
    alignItems="flex-start"
  >
    {headers.map(header => (
      <Grid item xs={header.xs} key={header.title}>
        {header.title}
      </Grid>
    ))}
  </StyledGrid>
);

Header.propTypes = {
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      xs: PropTypes.number
    })
  )
};

export default Header;
