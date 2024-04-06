import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import HeaderSidebar from '../../Components/HeaderSidebar/HeaderSidebar'
import Header from '../../Components/Header/Header'
import AnesthesiaPDF from '../../Assets/Anesthesia.pdf'

export default function EBookPdf() {
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
            Anesthesia Part-1 EBook
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
            <embed src={AnesthesiaPDF} type="application/pdf" width="100%" height="900px" />
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}
