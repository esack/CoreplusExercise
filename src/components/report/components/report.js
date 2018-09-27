import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MaterialTable from 'components/common/table';
import PractitionersLoading from './practitioners-loading';
import PractitionerRow from './practitione-row';
import Appointments from './appointments';
import Filter from './filter';

const StyledGrid = styled(Grid)`
  margin: 0;
  padding: 15px;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
`;

const StyledMessage = styled(Grid)`
  padding-top: 15px;
`;

export const Report = ({ practitioners, selectedPractitionerId }) => (
  <StyledGrid
    container
    direction="row"
    justify="space-evenly"
    alignItems="flex-start"
  >
    <Filter />
    <MaterialTable
      title="Practitioners"
      headers={[
        { title: 'Name', xs: 4 },
        { title: 'Cost', xs: 4 },
        { title: 'Revenue', xs: 4 }
      ]}
      xs={12}
      md={selectedPractitionerId ? 7 : 8}
    >
      {(practitioners &&
        ((practitioners.length > 0 &&
          practitioners.map(practitioner => (
            <PractitionerRow key={practitioner.id} row={practitioner}>
              <Hidden mdUp>
                <Appointments practitionerId={practitioner.id} />
              </Hidden>
            </PractitionerRow>
          ))) || <StyledMessage>No data found</StyledMessage>)) || (
        <PractitionersLoading />
      )}
    </MaterialTable>
    <Hidden smDown>
      <Appointments name="appointments" />
    </Hidden>
  </StyledGrid>
);

Report.propTypes = {
  practitioners: PropTypes.arrayOf(
    PropTypes.shape({
      practitioner: PropTypes.string,
      cost: PropTypes.number,
      revenu: PropTypes.number,
      id: PropTypes.string
    })
  ),
  selectedPractitionerId: PropTypes.string
};

const mapStateToProps = ({ report }) => ({
  practitioners: report.practitioners,
  selectedPractitionerId: report.selected_practitioner_id
});

export default connect(mapStateToProps)(Report);
