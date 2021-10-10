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


    </>
  );
}
