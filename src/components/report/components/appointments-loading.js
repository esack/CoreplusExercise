import MaterialTable from 'components/common/table';
import AppointmentRow from './appointment-row';

const tableBg = props => props.theme.lightGray;

let i;
const rows = [];

for (i = 0; i < 20; i += 1) {
  rows[i] = i;
}

export const AppointmentsLoading = () => (
  <MaterialTable
    title="Appointments"
    localTheme={{ tableBg }}
    headers={[
      { title: 'Date', xs: 4 },
      { title: 'Cost', xs: 4 },
      { title: 'Revenue', xs: 4 }
    ]}
    xs={12}
    md={5}
  >
    {rows.map(row => (
      <AppointmentRow key={row} />
    ))}
  </MaterialTable>
);

export default AppointmentsLoading;
