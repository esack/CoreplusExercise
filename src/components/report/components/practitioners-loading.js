import Grid from '@material-ui/core/Grid';
import PractitionerRow from './practitione-row';

let i;
const rows = [];

for (i = 0; i < 20; i += 1) {
  rows[i] = i;
}

export const PractitionersLoading = () => (
  <Grid container>
    {rows.map(row => (
      <PractitionerRow key={row} />
    ))}
  </Grid>
);

export default PractitionersLoading;
