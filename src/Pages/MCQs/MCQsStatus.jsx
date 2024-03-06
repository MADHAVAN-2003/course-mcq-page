import { Box, Button, Card, Grid, Typography } from "@mui/material";
import React from "react";
import HeaderSidebar from "../../Components/HeaderSidebar/HeaderSidebar";
import Header from "../../Components/Header/Header";

const MCQsStatus = () => {
  const cardList = [
    {
      title: "Anesthesia Machine Part 1",
      questTot: " Number of questions 27",
      duration: "Duration 25 minutes",
      status: "Completed",
    },
    {
      title: "Anesthesia Machine Part 2",
      questTot: " Number of questions 27",
      duration: "Duration 25 minutes",
      status: "Retry",
    },
    {
      title: "Anesthesia Machine Part 3",
      questTot: " Number of questions 27",
      duration: "Duration 25 minutes",
      status: "Completed",
    },
    {
      title: "Anesthesia Machine Part 4",
      questTot: " Number of questions 27",
      duration: "Duration 25 minutes",
      status: "Retry",
    },
    {
      title: "Anesthesia Machine Part 5",
      questTot: " Number of questions 27",
      duration: "Duration 25 minutes",
      status: "Completed",
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
            MCQs Status
          </Typography>

          <Box
            sx={{
              // border : "1px solid black",
              height: "80vh",
              width: "65vw",
              marginX: 6,
              marginY: 2,
            }}
          >
            {cardList.map((val) => (
            
              <Card
                key={val.title}
                sx={{
                  // "&:hover": {
                  //   boxShadow: 8,
                  // },
                  height: "11vh",
                  margin: "10px",
                  display: "flex",
                  padding: 1,
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    // border: "1px solid black",
                    width: "65%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#00468D",
                      fontFamily: "Work Sans",
                      fontSize: "18px",
                      fontWeight: "600",
                    }}
                  >
                    {val.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#1067BF",
                      fontFamily: "Work Sans",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    {val.questTot}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#1067BF",
                      fontFamily: "Work Sans",
                      fontSize: "12px",
                      fontWeight: "600",
                    }}
                  >
                    {val.duration}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    // border: "1px solid black",
                    height: "10vh",
                    width: "25%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {val.status === "Completed" ? (
                    <Button variant="contained" color="success">
                      completed
                    </Button>
                  ) : (
                    <Button
                      variant="outlined"
                      color="error"
                      sx={{ width: 100 }}
                    >
                      Retry
                    </Button>
                  )}
                </Box>
              </Card>
              
            ))}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default MCQsStatus;
