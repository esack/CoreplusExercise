import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import date from 'date-and-time';
import {
  loadPractitioner as loadPractitionerClicked,
  clearData as clearDataClicked
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
  constructor(props) {
    super(props);

    const now = new Date();
    this.state = {
      fromDate: date.format(now, 'YYYY-MM-DD'),
      toDate: date.format(date.addMonths(now, -3), 'YYYY-MM-DD')
    };
  }

  componentDidMount() {
    this.props.loadPractitioner(this.state.fromDate, this.state.toDate);
  }

  handleChange(name, event) {
    this.setState({
      [name]: event.target.value
    });
  }

  searchClicked() {
    this.props.clearData();
    this.props.loadPractitioner(this.state.fromDate, this.state.toDate);
  }

  render() {
    const { fromDate, toDate } = this.state;

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
              onChange={target => this.handleChange('fromDate', target)}
              defaultValue={fromDate}
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
              onChange={target => this.handleChange('toDate', target)}
              defaultValue={toDate}
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
  clearData: PropTypes.func
};

export default connect(
  null,
  {
    loadPractitioner: loadPractitionerClicked,
    clearData: clearDataClicked
  }
)(Filter);
