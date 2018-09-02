import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MaterialTable from 'components/common/table';
import AppointmentRow from './appointment-row';
import AppointmentsLoading from './appointments-loading';

const tableBg = props => props.theme.lightGray;

export const Appointments = ({
  practitioner,
  practitionerId,
  selectedPractitionerId,
  appointments
}) => {
  if (
    (!practitionerId || practitionerId === selectedPractitionerId) &&
    appointments
  ) {
    return (
      <MaterialTable
        title={
          practitioner
            ? `Appointments for ${practitioner.practitioner}`
            : 'Appointments'
        }
        localTheme={{ tableBg }}
        headers={[
          { title: 'Date', xs: 4 },
          { title: 'Cost', xs: 4 },
          { title: 'Revenue', xs: 4 }
        ]}
        xs={12}
        md={5}
      >
        {appointments.map(appointment => (
          <AppointmentRow
            key={appointment.id}
            row={appointment}
            practitionerName={practitioner.practitioner}
            showMoreInfo={appointment.id === selectedPractitionerId}
          />
        ))}
      </MaterialTable>
    );
  } else if (
    selectedPractitionerId &&
    (!practitionerId || practitionerId === selectedPractitionerId)
  ) {
    return <AppointmentsLoading />;
  }
  return null;
};

Appointments.propTypes = {
  practitionerId: PropTypes.string,
  practitioner: PropTypes.shape({
    practitioner: PropTypes.string,
    cost: PropTypes.number,
    revenu: PropTypes.number,
    id: PropTypes.string
  }),
  selectedPractitionerId: PropTypes.string,
  appointments: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      cost: PropTypes.number,
      revenu: PropTypes.number,
      practitioner: PropTypes.string,
      appointment_type: PropTypes.string,
      appointment_duration: PropTypes.number,
      id: PropTypes.string
    })
  )
};

const mapStateToProps = ({ report }) => ({
  selectedPractitionerId: report.selected_practitioner_id,
  practitioner: report.selected_practitioner,
  appointments: report.appointments
});

export default connect(mapStateToProps)(Appointments);
