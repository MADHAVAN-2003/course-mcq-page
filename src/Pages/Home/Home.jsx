import { Avatar, Box, FormControl, Grid, IconButton, InputBase, InputLabel, MenuItem, Paper, Select, Typography } from "@mui/material"
import HeaderSidebar from "../../Components/HeaderSidebar/HeaderSidebar"
import Header from "../../Components/Header/Header"
import SearchIcon from '@mui/icons-material/Search';
import Progress from '../../Assets/Progress.png';
import completionStatus from '../../Assets/completion.png';
import BookAvatar from '../../Assets/Book.png';
import OverallAvatar from  '../../Assets/Inspection.png';
import completedAvatar from  '../../Assets/Task Completed.png';
import CancelAvatar  from '../../Assets/Cancel Order.png';
function Home(){
    return(
        <Grid container>
            <Grid item xs={3} >
                <HeaderSidebar />
            </Grid>
            {/* Content */}
            <Grid item xs={9} >
                <Box>
                    <Header/>
                </Box>
                <Box sx={{
                    // border : "1px solid black",
                    display : "flex",
                    height : "100vh",
                    flexDirection : "column",
                    justifyContent : "space-around",
                    alignItems : "center",
                    padding : "0.5%"
                }}>
                    <Box sx={{
                        // border : "1px solid black",
                        height : "20vh",
                        width : "95%",
                        background : "linear-gradient(to Right , #33608E, #305D88,#07C682)" ,
                        padding : 2,
                        borderRadius : 3
                    }}>
                        <Typography variant="h5" sx={{
                            color:"white",
                            fontFamily : "Roboto"
                        }}> Hello <span style={{color:" #00FF85"}}>Mohana N</span>
                        </Typography>
                        <Typography sx={{color:"white" , fontSize:16 , fontFamily:"Manrope" , lineHeight:2}}>
                        Welcome to our online learning platform! We're excited to have you here and help you achieve your goals.<br/>
                        Good Luck with your learning.
                        </Typography>
                    </Box>

                    <Box sx={{
                        position : "absolute",
                        height : "12vh",
                        // border : "1px solid black",
                        width : "70%",
                        top : "190px",
                        display : "flex",
                        justifyContent : "space-around",
                        alignItems : "center"
                    }}>
                        <Box sx={{
                            height : "10vh",
                            borderRadius : "10px",
                            width : "20%",
                            backgroundColor : "white",
                            boxShadow:
                            "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                            display : "flex",
                            justifyContent : "space-around",
                            alignItems : "center"
                        }}>
                            <Avatar src={BookAvatar} sx={{
                               alignContent : "center",
                               height : "20px",
                               width : "10%",
                               padding:"15px",
                               backgroundColor : "#A7E5FF"
                            }}></Avatar>
                            <Typography variant="h2" sx={{fontSize : "20px" , fontWeight : "900"}}>
                                50 <br/>
                                <span style={{color : "#7F7F7F", fontSize : "14px"}}>Courses enrolled</span>
                            </Typography>
                        </Box>
                        <Box sx={{
                            height : "10vh",
                            borderRadius : "10px",
                            width : "20%",
                            backgroundColor : "white",
                            boxShadow:
                            "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                            display : "flex",
                            justifyContent : "space-around",
                            alignItems : "center"
                        }}>
                            <Avatar src={OverallAvatar} sx={{
                               alignContent : "center",
                               height : "20px",
                               width : "10%",
                               padding:"15px",
                               backgroundColor : "#FFF1CE"
                            }}></Avatar>
                            <Typography variant="h2" sx={{fontSize : "20px" , fontWeight : "900"}}>
                                20% <br/>
                                <span style={{color : "#7F7F7F", fontSize : "14px"}}>Overall Completion</span>
                            </Typography>
                        </Box>
                        <Box sx={{
                            height : "10vh",
                            borderRadius : "10px",
                            width : "20%",
                            backgroundColor : "white",
                            boxShadow:
                            "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                            display : "flex",
                            justifyContent : "space-around",
                            alignItems : "center"
                        }}>
                            <Avatar src={completedAvatar} sx={{
                               alignContent : "center",
                               height : "20px",
                               width : "10%",
                               padding:"15px",
                               backgroundColor : "#D0FFEE"
                            }}></Avatar>
                            <Typography variant="h2" sx={{fontSize : "20px" , fontWeight : "900"}}>
                                0 <br/>
                                <span style={{color : "#7F7F7F", fontSize : "14px"}}>Completion <span style={{color:"white"}}>dummy</span> </span>
                            </Typography>
                        </Box>
                        <Box sx={{
                            height : "10vh",
                            borderRadius : "10px",
                            width : "20%",
                            backgroundColor : "white",
                            boxShadow:
                            "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                            display : "flex",
                            justifyContent : "space-around",
                            alignItems : "center"
                        }}>
                            <Avatar src={CancelAvatar} sx={{
                               alignContent : "center",
                               height : "20px",
                               width : "10%",
                               padding:"15px",
                               backgroundColor : "#FFCBCB"
                            }}></Avatar>
                            <Typography variant="h2" sx={{fontSize : "20px" , fontWeight : "900"}}>
                                0 <br/>
                                <span style={{color : "#7F7F7F", fontSize : "14px"}}>Expired <span style={{color:"white"}}>dummy</span> </span>
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{
                        // border : "1px solid black",
                        height : "65vh",
                        width : "95%",
                        padding : 2,
                        display:"flex",
                        justifyContent : "space-between"

                    }}>
                        <Box sx={{
                            // border : "1px solid black",
                            height : "55vh",
                            width : "45%",
                            backgroundColor :"white",
                            borderRadius :4,
                            display :"flex",
                            flexDirection :"column",
                            justifyContent :"space-between"
                        }}>
                            <Box sx={{
                                borderBottom : "1px solid #7F7F7F4D",
                                height :"8vh",
                                display : "flex",
                                justifyContent : "space-around",
                                alignItems : "center"
                                }}>
                                <Typography sx={{
                                    fontFamily: "Roboto",
                                    fontSize: "20px",
                                    fontWeight: "600",
                                    lineHeight: "23px",
                                    letterSpacing:" 0.05em",
                                    color: "#264D74"

                                }}>Courses</Typography>
                                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                    <InputLabel id="demo-simple-select-standard-label">All</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-standard-label"
                                        id="demo-simple-select-standard"
                                        
                                        label="All"
                                        sx={{
                                            width : "55%",
                                            height : "40px",
                                            border : "none",
                                            color : "black"
                                        }}
                                        >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                                <Paper
                                    elevation={0}
                                    component="form"
                                    // onSubmit={handleSearch}
                                    sx={{
                                    p: "2px 4px",
                                    display: "flex",
                                    alignItems: "center",
                                    width: 180,
                                    height : "5vh",
                                    backgroundColor: "#EFEFF7",
                                    }}
                                >
                                    <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
                                    <SearchIcon />
                                    </IconButton>
                                    <InputBase
                                    sx={{ ml: 1, flex: 1 }}
                                    placeholder="Search..."
                                    inputProps={{ "aria-label": "search google maps" }}
                                    // value={searchTerm}
                                    // onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </Paper>
                            </Box>

                            <img src={Progress} height="80%" width="95%" alt="" style={{marginLeft : "10px"}} />

                        </Box>

                        <Box sx={{
                            // border : "1px solid black",
                            height : "55vh",
                            width : "45%",
                            backgroundColor :"white",
                            borderRadius :4
                        }}>
                            <Box sx={{
                                borderBottom : "1px solid #7F7F7F4D",
                                height :"8vh",
                                display : "flex",
                                justifyContent : "space-around",
                                alignItems : "center"
                                }}>
                                     <Typography sx={{
                                    fontFamily: "Roboto",
                                    fontSize: "20px",
                                    fontWeight: "600",
                                    lineHeight: "23px",
                                    letterSpacing:" 0.05em",
                                    color: "#264D74"

                                }}>Overall Completion</Typography>
                                
                            </Box>
                            <Box sx={{
                                display : "flex",
                                paddingY : 3,
                                justifyContent : "space-around"
                            }}>
                                <img src={completionStatus} alt="" />
                                <img src={completionStatus} alt="" srcset="" />
                            </Box>
                        </Box>

                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Home