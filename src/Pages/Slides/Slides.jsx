import { Avatar, Box,  CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import HeaderSidebar from '../../Components/HeaderSidebar/HeaderSidebar'
import Header from '../../Components/Header/Header'
import bookImg from "../../Assets/E-Book.png";
import arrowIcon from "../../Assets/Arrow-forward.png";
import { Link } from 'react-router-dom';
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";

export default function Slides() {
    const slidesList = [
        {
          title: "Anesthesia Machine Part 1 Slides",
          slides: " Number of Slides 27",
          icon: `${arrowIcon}`,
        },
        {
          title: "Anesthesia Machine Part 2 Slides",
          slides:" Number of Slides 27",
          icon: `${arrowIcon}`,
        },
        {
          title: "Anesthesia Machine Part 3 Slides",
          slides:" Number of Slides 27",
          icon: `${arrowIcon}`,
        },
        {
          title: "Anesthesia Machine Part 4 Slides",
          slides: " Number of Slides 27",
          icon: `${arrowIcon}`,
        },
      ];
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
            Anesthesia Slides
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
            {slidesList.map((slides) => (
              <Link to="/Slides-ppt" style={{ textDecoration: "none" }}>
                <Card
                  orientation="horizontal"
                  variant="outlined"
                  sx={{ 
					height: 60,
					'&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
				 }}
                >
                  <CardMedia
                    sx={{ width: 60, height: 60,  }}
                  >
                    <Avatar
                      src={bookImg}
                      sx={{ borderRadius: "0", height: "100%", width: "100%" }}
                    ></Avatar>
                  </CardMedia>

                  <CardContent>
                    <Typography
                      sx={{
                        fontFamily: "Work Sans",
                        color: "#00468D",
                      }}
                      variant="h6"
                    >
                      {slides.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Work Sans",
                        color: "#1067BF",
                        fontSize: "16px",
                      }}
                      variant="h6"
                    >
                      {slides.slides}
                    </Typography>

                    <Avatar
                      src={slides.icon}
                      sx={{
                        position: "absolute",
                        height: "20px",
                        top: "50%",
                        right: "5%", // Adjust as needed for positioning
                        transform: "translateY(-50%)", // Center vertically
                      }}
                    ></Avatar>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}
