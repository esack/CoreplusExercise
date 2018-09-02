import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FaHandHoldingUsd, FaDollarSign } from 'react-icons/fa';

const StyledGrid = styled(Grid)`
  border-bottom: 1px solid ${props => props.theme.gray};
  padding: 3px 4px;
`;

const StyledCellGrid = styled(Grid)`
  padding: 8px 5px;
  cursor: pointer;
`;

const StyledMoreInfoGrid = styled(Grid)`
  padding: 5px 10px;
  font-size: 0.8rem;
`;

const StyledEmpty = styled.div`
  height: 10px;
  background-color: ${props => props.theme.bgColor};
`;

class AppointmentRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showMoreInfo: false };
  }

  render() {
    const { row, practitionerName } = this.props;
    const { showMoreInfo } = this.state;
    return (
      <StyledGrid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
        onClick={() => this.setState({ showMoreInfo: !showMoreInfo })}
      >
        <StyledCellGrid item xs={4}>
          {row ? row.date : <StyledEmpty />}
        </StyledCellGrid>
        <StyledCellGrid item xs={4}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <Grid item xs={2}>
              <FaHandHoldingUsd />
            </Grid>
            <Grid item xs={10}>
              {row ? row.cost : <StyledEmpty />}
            </Grid>
          </Grid>
        </StyledCellGrid>
        <StyledCellGrid item xs={4}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <Grid item xs={2}>
              <FaDollarSign />
            </Grid>
            <Grid item xs={10}>
              {row ? row.revenu : <StyledEmpty />}
            </Grid>
          </Grid>
        </StyledCellGrid>
        {showMoreInfo && (
          <Grid container>
            <StyledMoreInfoGrid item xs={12}>
              Practitioner: {practitionerName}
            </StyledMoreInfoGrid>
            <StyledMoreInfoGrid item xs={12}>
              Appointment Type: {row.appointment_type}
            </StyledMoreInfoGrid>
            <StyledMoreInfoGrid item xs={12}>
              Appointment Duration: {row.appointment_duration} minutes
            </StyledMoreInfoGrid>
          </Grid>
        )}
      </StyledGrid>
    );
  }
}

AppointmentRow.propTypes = {
  practitionerName: PropTypes.string,
  row: PropTypes.shape({
    date: PropTypes.string,
    cost: PropTypes.number,
    revenu: PropTypes.number,
    practitioner: PropTypes.string,
    appointment_type: PropTypes.string,
    appointment_duration: PropTypes.number,
    id: PropTypes.string
  })
};

export default AppointmentRow;
