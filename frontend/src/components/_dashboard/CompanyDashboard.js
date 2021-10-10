// material
import { Box, Grid, Container, Typography } from '@mui/material';
// components
import Page from '../Page';
import {
  AppTasks,
  AppNewUsers,
  AppBugReports,
  AppItemOrders,
  AppNewsUpdate,
  AppWeeklySales,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppCurrentSubject,
  AppConversionRates
} from './app';

// ----------------------------------------------------------------------

export default function CompanyDashboard() {

  return (
    <Page title="Dashboard | Minimal-UI">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Company Dashboard</Typography>
        </Box>

      </Container>
    </Page>
  );
}
