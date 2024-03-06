import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import HeaderSidebar from "../../Components/HeaderSidebar/HeaderSidebar";
import Header from "../../Components/Header/Header";
import sad from '../../Assets/☹️.png';
import { useLocation, useNavigate } from 'react-router-dom';

function FailResults() {
    const navigate = useNavigate()
    const data = useLocation()
    console.log(data.state.Result.score,"page details")
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
              <Typography variant="h6" sx={{
                  color:"#264D74",
                  fontFamily:"Poppins",
                  letterSpacing:1,
                  marginX : 6,
                  marginTop:2}}
                  >Your Score</Typography>
              <Box sx={{
                // border:"1px solid black",
                backgroundColor:"white",
                boxShadow: 3,
                height : "80vh",
                width:"50vw",
                marginX:"180px",
                margintop :"30px",
                display : "flex",
                flexDirection : "column",
                justifyContent : "center",
                alignItems : "center",
                gap :  2
              }}>
                <img src={sad} height="100px" width="100px" alt=""/>
                <Typography sx={{
                  color :" #0468CC",
                  fontWeight:"600",
                  fontFamily : "Poppins"
                }}>Sorry you did not pass the test this time</Typography>
                <Box sx={{
                  // border : "1px solid black",
                  borderRadius: "8px",
                  height : "40vh",
                  width : "30vw",
                  backgroundColor:"#E8E8E899",
                  padding : 1
                  
                }}>
                  <Typography gutterBottom align='center' sx={{color:"#003E57",fontFamily : "Poppins",fontWeight : "600",fontSize : "16px"
                  }}>Your got {data.state.Result.score} correct answer out of 40</Typography>
                  <hr />
                  <br />
                  <Typography align='center' sx={{color:"#003E57",fontFamily : "Poppins",fontWeight : "500",fontSize : "14px"
                  }}>Total Number of Questions : 8</Typography><br />
                  <Typography gutterBottom align='center' sx={{color:"#003E57",fontFamily : "Poppins",fontWeight : "500",fontSize : "14px"
                  }}>Number of Attend: 8</Typography><br />
                  <Typography gutterBottom align='center' sx={{color:"#003E57",fontFamily : "Poppins",fontWeight : "500",fontSize : "14px"
                  }}>Number of Not Attend : 0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Typography><br />
                  <Typography gutterBottom align='center' sx={{color:"#003E57",fontFamily : "Poppins",fontWeight : "500",fontSize : "14px"
                  }}>Number of right Answer{"\t"}:{data.state.Result.correctAnswer}</Typography><br />
                  <Typography gutterBottom align='center' sx={{color:"#003E57",fontFamily : "Poppins",fontWeight : "500",fontSize : "14px"
                  }}>Number of Wrong Answer:{data.state.Result.wrongAnswer} </Typography><br />
                </Box>
                <Box sx={{
                  // border:"1px solid black",
                  height : "5vh",
                  width:"70%",
                  display:"flex",
                  justifyContent:"space-between",
                  alignItems :"center"
                }}>
                  <Button variant='outlined'>No Thanks</Button>
                  <Button variant='contained' onClick={()=> navigate("/McqsStatus")}>Next</Button>
                </Box>
                
              </Box>
    
            </Box>
    
          </Grid>
        </Grid>
      )
}

export default FailResults