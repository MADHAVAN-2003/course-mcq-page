import React from "react";
import HeaderSidebar from "../../Components/HeaderSidebar/HeaderSidebar";
import {
  Avatar,
  Box,
  Button,
  Grid,
  Table,
  TableBody,
  TableRow,
  Typography,
} from "@mui/material";
import Header from "../../Components/Header/Header";
import profileBanner from "../../Assets/profileBanner.png";
import ProfilePic from "../../Assets/Profile Img.png";
import editImg from '../../Assets/Pen.png';

export const Profile = () => {
  const rows = [
    {
      Fullname: "Mohana",
      Email: "mohana@gmail.com",
      Phone: "2355657368",
      DOB: "01/01/2000",
      Department: "Anethesia",
    },
  ];
  // console.log(rows[0])
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
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "90vh",
          }}
        >
          <Box
            sx={{
            //   border: "1px solid black",
              height: "70vh",
              width: "60vw",
              backgroundColor: "white",
              // gap : 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                // border: "1px solid red",
                height: "12vh",
                width: "90%",
                backgroundImage: `url(${profileBanner})`,
                display: "flex",
                alignItems: "center",
                borderRadius: "10px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Roboto",
                  fontWeight: "700",
                  color: "#00468D",
                  marginLeft: 2,
                }}
              >
                Hi Mohana! <br />
                Welcome to your profile.
              </Typography>
              <Avatar
                src={ProfilePic}
                sx={{
                  position: "relative",
                  left: "470px",
                  top: "30px",
                  height: "50px",
                  width: "50px",
                }}
              ></Avatar>
            </Box>
            <Box
              sx={{
                // border: "1px solid red",
                height: "50vh",
                width: "90%",
                backgroundColor: "#EFEFEF",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                //   border: "1px solid black",
                  height: "45vh",
                  width: "80%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Table>
                  <TableBody>
                    {rows.map((row, index) => (
                      <React.Fragment key={index}>
                        {Object.entries(row).map(([key, value], idx) => (
                          <TableRow key={idx}>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                // border : "1px solid black",
                                width: "80%",
                                padding: "5px",
                                marginLeft : "50px"
                              }}
                            >
                              <div
                                style={{
                                  fontWeight: "bold", // Change the font weight for the key
                                  color: "#316AFC", // Change the color for the key
                                  marginRight: "5px", // Add margin between key and value
                                //border : "1px solid black",
                                  width : "30%",
                                  fontFamily : "Roboto",
                                  
                                }}
                              >
                                {key}
                              </div>
                              <div
                                style={{
                                  // border : "1px solid black",
                                  borderRadius : "5px",
                                  fontFamily :"Poppins",
                                  fontSize : "15px",
                                  width: "70%",
                                  height: "5vh",
                                  backgroundColor: "white",
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  paddingLeft : "20px",
                                  color: "black", // Change the color for the value
                                }}
                              >
                                {value} 
                                <Button>
                                    <Avatar  src={editImg} sx={{ height:"20px", width : "20px"  }}/>
                                </Button>
                              </div>
                            </div>
                          </TableRow>
                        ))}
                      </React.Fragment>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
