// material
import { Box, Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
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
} from '../components/_dashboard/app';
import {UserService} from '../services/BackendService';
import { useEffect, useState } from 'react';
import CandidateDashboard from '../components/_dashboard/CandidateDashboard';
import CompanyDashboard from '../components/_dashboard/CompanyDashboard';
import { useNavigate } from 'react-router-dom';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  const [isCandidate, setIsCandidate] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    UserService.getUserData().then(user => {
      if(!user) {
        navigate('/login')
      } else {
        setIsCandidate(user["is_candidate"]);
      }
    });
  }, [])

  return (
    <>
      {isCandidate ? <CandidateDashboard/> : <CompanyDashboard/>}

      <Page title="Dashboard | Minimal-UI">
        <Container maxWidth="xl">
          <Box sx={{ pb: 5 }}>
            <Typography variant="h4">Hi, Welcome back</Typography>
          </Box>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <AppWeeklySales />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <AppNewUsers />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <AppItemOrders />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <AppBugReports />
            </Grid>

            <Grid item xs={12} md={6} lg={8}>
              <AppWebsiteVisits />
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <AppCurrentVisits />
            </Grid>

            <Grid item xs={12} md={6} lg={8}>
              <AppConversionRates />
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <AppCurrentSubject />
            </Grid>

            <Grid item xs={12} md={6} lg={8}>
              <AppNewsUpdate />
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <AppOrderTimeline />
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <AppTrafficBySite />
            </Grid>

            <Grid item xs={12} md={6} lg={8}>
              <AppTasks />
            </Grid>
          </Grid>
        </Container>
      </Page>
    </>
  );
}
