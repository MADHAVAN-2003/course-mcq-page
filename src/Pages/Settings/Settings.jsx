import React from 'react'
import HeaderSidebar from '../../Components/HeaderSidebar/HeaderSidebar'
import { Box, Grid } from '@mui/material';
import Header from '../../Components/Header/Header';

export const Settings = () => {
  return (
    <Grid container>
      <Grid item xs={3}>
        <HeaderSidebar />
      </Grid>

      {/* Content */}
      <Grid item xs={9}>
        <Box>
          <Header />
        </Box>
      </Grid>
    </Grid>
  );
}
