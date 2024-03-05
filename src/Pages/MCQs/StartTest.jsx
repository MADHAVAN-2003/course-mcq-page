import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import HeaderSidebar from '../../Components/HeaderSidebar/HeaderSidebar'
import Header from '../../Components/Header/Header'
import { Link } from 'react-router-dom'

export default function StartTest() {
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
        <Box>
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
            Anesthesia & Critical care
          </Typography>
          <Box
            sx={{
              // border:"1px solid black",
              height: "20vh",
              width: "60vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginY: "20px",
              marginX: "60px",
            }}
          >
            <Typography sx={{ color: "#002142", fontFamily: "Work Sans" }}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua dolore.Lorem ipsum dolor sit amet,
              consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua dolore.
            </Typography>
          </Box>
          <Box
            sx={{
              // border : "1px solid black",
              height: "45vh",
              width: "55%",
              marginY: "50px",
              marginX: "170px",
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <Button
              sx={{
                width: "100%",
                height: "8vh",
                border: "1px solid black",
                fontFamily: "Poppins",
              }}
              variant="outlined"
            >
              Total no of Questions: 30
            </Button>
            <Button
              sx={{
                width: "100%",
                height: "8vh",
                border: "1px solid black",
                fontFamily: "Poppins",
              }}
              variant="outlined"
            >
              Number of attempts: 0/3
            </Button>
            <Link
              to="/Quiz"
              style={{ textDecoration: "none", width: "100%", height: "8vh" }}
            >
              <Button
                sx={{
                  width: "100%",
                  height: "8vh",
                  fontFamily: "Poppins",
                }}
                variant="contained"
              >
                Start Test
              </Button>
            </Link>

            <Button
              sx={{
                width: "40%",
                height: "8vh",
                fontFamily: "Poppins",

                // border : "1px solid black"
              }}
              variant="outlined"
            >
              REVIEW
            </Button>
            <Button
              sx={{
                width: "40%",
                height: "8vh",
                fontFamily: "Poppins",

                // border : "1px solid black"
              }}
              variant="outlined"
            >
              RANK
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
