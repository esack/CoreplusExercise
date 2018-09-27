import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import date from 'date-and-time';
import {
  loadPractitioner as loadPractitionerClicked,
  clearData as clearDataClicked,
  setFromSelectedDate as setFromSelectedDateClicked,
  setToSelectedDate as setToSelectedDateClicked
} from '../actions';

const StyledGrid = styled(Grid)`
  background-color: ${props => props.theme.lightGray};
  padding: 20px;
  margin-bottom: 10px;

  @media (min-width: 960px) {
    padding: 30px;
    margin-top: 20px;
    margin-bottom: 0;
  }
`;

const StyledGridCenter = styled(Grid)`
  text-align: center;
`;

const StyledGridRight = styled(Grid)`
  text-align: right;
`;

class Filter extends React.Component {
  componentDidMount() {
    this.props.loadPractitioner(
      this.props.selectedDate.fromDate.getTime(),
      this.props.selectedDate.toDate.getTime()
    );
  }

  searchClicked() {
    this.props.clearData();
    this.props.loadPractitioner(
      this.props.selectedDate.fromDate.getTime(),
      this.props.selectedDate.toDate.getTime()
    );
  }

  render() {
    const { selectedDate, setFromSelectedDate, setToSelectedDate } = this.props;

    return (
      <Grid item xs={12} md={8}>
        <StyledGrid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item xs={2}>
            Filter by:
          </Grid>
          <StyledGridCenter item xs={4}>
            <TextField
              id="fromDate"
              label="From"
              type="date"
              onChange={obj => setFromSelectedDate(obj.target.valueAsDate)}
              defaultValue={date.format(selectedDate.fromDate, 'YYYY-MM-DD')}
              InputLabelProps={{
                shrink: true
              }}
            />
          </StyledGridCenter>
          <StyledGridCenter item xs={4}>
            <TextField
              id="toDate"
              label="To"
              type="date"
              onChange={obj => setToSelectedDate(obj.target.valueAsDate)}
              defaultValue={date.format(selectedDate.toDate, 'YYYY-MM-DD')}
              InputLabelProps={{
                shrink: true
              }}
            />
          </StyledGridCenter>
          <StyledGridRight item xs={2}>
            <Button variant="outlined" onClick={() => this.searchClicked()}>
              Search
            </Button>
          </StyledGridRight>
        </StyledGrid>
      </Grid>
    );
  }
}

Filter.propTypes = {
  loadPractitioner: PropTypes.func,
  clearData: PropTypes.func,
  setFromSelectedDate: PropTypes.func,
  setToSelectedDate: PropTypes.func,
  selectedDate: PropTypes.shape({
    fromDate: PropTypes.object,
    toDate: PropTypes.object
  })
};

const mapStateToProps = ({ report }) => ({
  selectedDate: report.selectedDate
});

export default connect(
  mapStateToProps,
  {
    loadPractitioner: loadPractitionerClicked,
    clearData: clearDataClicked,
    setFromSelectedDate: setFromSelectedDateClicked,
    setToSelectedDate: setToSelectedDateClicked
  }
)(Filter);
