// material
import { Box, Grid, Container, Typography, TextField } from '@mui/material';
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
import { useEffect, useState } from 'react';
import { UserService, CandidateService, TagService } from '../../services/BackendService';
import Points from './app/Points';

// ----------------------------------------------------------------------

export default function CandidateDashboard() {

  const [candidateData, setCandidateData] = useState({});
  const [userData, setUserData] = useState({});
  const [tags, setTags] = useState([]);

  useEffect(() => {
    UserService.getUserData().then(setUserData);
    CandidateService.getCandidate().then(res => {
      console.log(res);
      setCandidateData(res);
    });
    TagService.getAllTags().then(setTags)
  }, [])

  return (
    <Page title="Dashboard | Minimal-UI">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Welcome {userData.first_name}</Typography>
        </Box>
        <TextField
          margin="dense"
          fullWidth
          label="First Name"
          value={userData.first_name}
        />
        <TextField
          margin="dense"
          fullWidth
          label="Last Name"
          value={userData.last_name}
        />
        <TextField
          margin="dense"
          fullWidth
          label="Email"
          value={userData.email}
        />
        <Points points={candidateData.points}/>
        <AppTasks tags={tags} candidateTags={(candidateData && candidateData.tags) || []}/>
      </Container>
    </Page>
);
}
