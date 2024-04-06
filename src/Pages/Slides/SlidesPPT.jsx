import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import HeaderSidebar from '../../Components/HeaderSidebar/HeaderSidebar'
import Header from '../../Components/Header/Header'

export default function SlidesPPT() {
    
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
        <Box
          sx={
            {
              //  border : "1px solid black",
            }
          }
        >
          <Typography
            variant="h6"
            sx={{
              color: "#264D74",
              fontFamily: "Poppins",
              letterSpacing: 1,
              marginX: 6,
              marginY: 2,
            }}
          >
            Anesthesia Part-1 Slides
          </Typography>
          <Box
            sx={{
            //  border: "1px solid black",
              height: "75vh",
              width: "55vw",
              marginX: 15,
              marginY: 2,
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <iframe src="https://player.slideplayer.com/25/7607690/" height="100%"  allowfullscreen >ppt</iframe>
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}
