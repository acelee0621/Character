'use client'
import { Box, Typography } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
// components


const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box display="flex" justifyContent="center" alignContent="center" height="100%">
        <Typography variant="h1">还没想好做点什么...</Typography>
      </Box>
    </PageContainer>
  )
}

export default Dashboard;
