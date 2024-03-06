import { Avatar, Box, Card, CardActionArea, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'
import HeaderSidebar from '../../Components/HeaderSidebar/HeaderSidebar'
import Header from '../../Components/Header/Header'
import arrowIcon  from '../../Assets/Arrow-forward.png'
import lockIcon from '../../Assets/Lock.png'
import { Link } from 'react-router-dom'

function CourseList() {
    const courseList = [
        {          
            title: "Pre-Anesthesia Safety Checkout",
            subTitle :"Procedures- What to Check",
            icon : `${arrowIcon}`          
        },
        {          
            title: "Pre-Anesthesia Safety Checkout",
            subTitle :"Procedures- What to Check",
            icon : `${arrowIcon}`          
        },
        {          
            title: "Pre-Anesthesia Safety Checkout",
            subTitle :"Procedures- What to Check",
            icon : `${lockIcon}`          
        },
        {          
            title: "Pre-Anesthesia Safety Checkout",
            subTitle :"Procedures- What to Check",
            icon : `${lockIcon}`          
        },
        {          
            title: "Pre-Anesthesia Safety Checkout",
            subTitle :"Procedures- What to Check",
            icon : `${lockIcon}`          
        },
        {          
            title: "Pre-Anesthesia Safety Checkout",
            subTitle :"Procedures- What to Check",
            icon : `${lockIcon}`          
        }
    ]
    console.log(courseList)
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
            height: "85vh",
            // width: "90%",
            // marginY: "5%",
            // marginX: "7%",
            // padding: "1%",
            display: "flex",
            flexDirection : "column",
            justifyContent: "space-between",
            // alignItems: "center",
          }}
        >
            <Typography variant="h6" sx={{
            color:"#264D74",
            fontFamily:"Poppins",
            letterSpacing:1,
            marginX : 6,
            marginY:4}}
            >Anesthesia MD/DNB</Typography>
          <Box
            sx={{
            //   border: "1px solid black",
              height: "70vh",
              width: "70vw",
              marginX : 10,
              display: "flex",
            //   padding : 5
            }}
          >
            <Link to="/coursesResources" style={{ textDecoration: "none", display: "flex" , flexWrap :"wrap" }}>
              {courseList.map((val) => (
                <Card
                  key={val.title}
                  sx={{
                    "&:hover": {
                      boxShadow: 8,
                    },
                    height: "20vh",
                    width: "30vw",
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
                        {val.subTitle}
                      </Typography>
                      
                      <Avatar 
                        src={val.icon} 
                        sx={{
                            // border : "1px solid black",
                            width :"30px",
                            position: 'absolute',
                            height : "30px",
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
  )
}

export default CourseList