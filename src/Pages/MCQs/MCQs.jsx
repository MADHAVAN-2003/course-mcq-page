import React from "react";
import HeaderSidebar from "../../Components/HeaderSidebar/HeaderSidebar";
import Header from "../../Components/Header/Header";
import {
  Grid,
  Box,
  Typography,
  CardActionArea,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import { Link } from "react-router-dom";
import arrowIcon from '../../Assets/Arrow forward ios.png'
export const MCQs = () => {
  const cardList = [
    {
      title: "Anesthesia Machine Part 1",
      questTot: " Number of questions 27",
      duration: "Duration 25 minutes",
      icon  : `${arrowIcon}`
    },
    {
      title: "Anesthesia Machine Part 1",
      questTot: " Number of questions 27",
      duration: "Duration 25 minutes",
      icon  : `${arrowIcon}`
    },
    {
      title: "Anesthesia Machine Part 1",
      questTot: " Number of questions 27",
      duration: "Duration 25 minutes",
      icon  : `${arrowIcon}`
    },
    {
      title: "Anesthesia Machine Part 1",
      questTot: " Number of questions 27",
      duration: "Duration 25 minutes",
      icon  : `${arrowIcon}`
    },
    {
      title: "Anesthesia Machine Part 1",
      questTot: " Number of questions 27",
      duration: "Duration 25 minutes",
      icon  : `${arrowIcon}`
    },
    {
      title: "Anesthesia Machine Part 1",
      questTot: " Number of questions 27",
      duration: "Duration 25 minutes",
      icon  :`${arrowIcon}`
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
          sx={{
            // border: "1px solid black",
            height: "72vh",
            width: "85%",
            marginY: "5%",
            marginX: "7%",
            padding: "1%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
            //   border: "1px solid black",
              height: "70vh",
              width: "65vw",
              display: "flex",
              padding : 5
            }}
          >
            <Link to="/Start-test" style={{ textDecoration: "none", display: "flex" , flexWrap :"wrap" }}>
              {cardList.map((val) => (
                <Card
                  key={val.title}
                  sx={{
                    "&:hover": {
                      boxShadow: 8,
                    },
                    height: "15vh",
                    width: "25vw",
                    margin: "10px", 
                    display:"flex",
                    justifyContent : "center",
                    alignItems:"center"
                  }}
                >
                  <CardActionArea>
                    <CardContent>
                      <Typography
                        sx={{
                          fontFamily: "Work Sans",
                          color: "#00468D",
                        }}
                        variant="h6"
                      >
                        {val.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Work Sans",
                          color: "#1067BF",
                          fontSize: "16px",
                        }}
                        variant="h6"
                      >
                        {val.questTot}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Work Sans",
                          color: "#1067BF",
                          fontSize: "13px",
                        }}
                      >
                        {val.duration}
                      </Typography>
                      <Avatar 
                        src={val.icon } 
                        sx={{
                            position: 'absolute',
                            height : "20px",
                            top: '50%',
                            right: '5%', // Adjust as needed for positioning
                            transform: 'translateY(-50%)', // Center vertically
                          }}
                      ></Avatar>
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))}
            </Link>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
