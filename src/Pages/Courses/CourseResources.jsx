import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import HeaderSidebar from '../../Components/HeaderSidebar/HeaderSidebar'
import Header from '../../Components/Header/Header'
import cardImg from '../../Assets/Rectangle 689.png'
import { Link } from 'react-router-dom'

function CourseResources() {
    const CourseResources = [
        {          
            name: "MCQs",
            link :"/MCQs",
            icon : `${cardImg}`          
        },
        {          
            name: "Video Lectures",
            link :"/VideoSections",
            icon : `${cardImg}`          
        },
        {          
            name: "E-Books",
            link :"/E-Books",
            icon : `${cardImg}`          
        },
        {          
            name: "Sildes",
            link :"/Slides",
            icon : `${cardImg}`          
        }
    ]
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
                display: "flex",
                flexDirection : "column",
                flexWrap: "wrap",
              //   height: "100vh",
                gap: 2,
                justifyContent: "space-around",
                padding: "2%",
              }}
            >
                <Typography variant="h6" sx={{
                    color:"#264D74",
                    fontFamily:"Poppins",
                    letterSpacing:1,
                    marginX : 6,
                    marginY:1}}
                >Course Resources</Typography>
                <Box sx={{
                    // border : "1px solid black",
                    height : "70vh",
                    width : "60vw",
                    marginY :  2,
                    marginX : 10,
                    display : "flex",
                    flexWrap : "wrap",
                    justifyContent : "space-between",
                    alignItems : "center"
                }}>
                     
                        {CourseResources.map((value) => (
                         <Link 
                         to= {value.link} 
                         style={{ textDecoration: "none" }}>
                        <Card
                            sx={{
                            // maxWidth: 345,
                            boxShadow:4,
                            "&:hover": {
                                boxShadow: 10,
                            },
                            height : "25vh",
                            width: "25vw",
                            borderRadius: "5px",
                            }}
                        >
                            <CardMedia sx={{ height: 100 }} image={value.icon} />
                            <CardContent>
                                <Typography 
                                    align='center' 
                                    gutterBottom 
                                    sx={{
                                        color : "#316AFC",
                                        fontWeight : "600",
                                    }}>
                                    {value.name}
                                </Typography>
                                                
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

export default CourseResources