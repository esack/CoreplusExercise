import { connect } from 'react-redux';
import windowSize from 'react-window-size';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FaHandHoldingUsd, FaDollarSign } from 'react-icons/fa';
import {
  onPractitionerClicked as onPractitionerClickedAction,
  loadAppointments as loadAppointmentsAction
} from '../actions';

const StyledGrid = styled(Grid)`
  border-bottom: 1px solid ${props => props.theme.gray};
  padding: 8px 4px;
  cursor: pointer;
  &.selected {
    background-color: ${props => props.theme.lightGray};
  }
`;

const StyledEmpty = styled.div`
  height: 10px;
  background-color: ${props => props.theme.lightGray};
  margin-right: 40px;
`;

export const PractitionerRow = ({
  row,
  children,
  onPractitionerClicked,
  loadAppointments,
  selectedPractitionerId,
  windowWidth
}) => {
  const practitionerClicked = practitione => {
    onPractitionerClicked(practitione);
    loadAppointments(practitione.id);
    if (windowWidth >= 960) {
      window.scrollTo(0, 0);
    }
  };

  const StyledCellGrid = styled(Grid)`
    padding: 5px 5px;
    @media (min-width: 960px) {
      font-size: ${selectedPractitionerId ? '0.8rem' : null};
    }
  `;

  return (
    <StyledGrid
      container
      direction="row"
      justify="flex-start"
      alignItems="center"
      className={row && selectedPractitionerId === row.id ? 'selected' : null}
    >
      <StyledCellGrid
        item
        xs={12}
        md={4}
        onClick={() => (row ? practitionerClicked(row) : null)}
      >
        {row ? row.practitioner : <StyledEmpty />}
      </StyledCellGrid>
      <StyledCellGrid
        item
        xs={4}
        onClick={() => (row ? practitionerClicked(row) : null)}
      >
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <Grid item xs={1}>
            <FaHandHoldingUsd />
          </Grid>
          <Grid item xs={11}>
            {row ? row.cost : <StyledEmpty />}
          </Grid>
        </Grid>
      </StyledCellGrid>
      <StyledCellGrid
        item
        xs={4}
        onClick={() => (row ? practitionerClicked(row) : null)}
      >
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <Grid item xs={1}>
            <FaDollarSign />
          </Grid>
          <Grid item xs={11}>
            {row ? row.revenu : <StyledEmpty />}
          </Grid>
        </Grid>
      </StyledCellGrid>
      {children}
    </StyledGrid>
  );
};

PractitionerRow.propTypes = {
  row: PropTypes.shape({
    practitioner: PropTypes.string,
    cost: PropTypes.number,
    revenu: PropTypes.number,
    id: PropTypes.string
  }),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  onPractitionerClicked: PropTypes.func,
  loadAppointments: PropTypes.func,
  selectedPractitionerId: PropTypes.string,
  windowWidth: PropTypes.number
};

const mapStateToProps = ({ report }) => ({
  selectedPractitionerId: report.selected_practitioner_id
});

export default windowSize(
  connect(
    mapStateToProps,
    {
      onPractitionerClicked: onPractitionerClickedAction,
      loadAppointments: loadAppointmentsAction
    }
  )(PractitionerRow)
);
