import React, { useEffect, useState } from "react";
import HeaderSidebar from "../../Components/HeaderSidebar/HeaderSidebar";
import './courses.css'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Header from "../../Components/Header/Header";
import axios from "axios";
import cardImg from "../../Assets/card-img.png";
import { Link } from "react-router-dom";

export const Courses = () => {
  const url = "http://localhost:7000/Anesthesia";
  const [course, setCourse] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      let courseRes = await axios.get(url);
      setCourse(courseRes.data);
    };
    fetchdata();
  }, []);

  //console.log(course.map((val)=>console.log("eachcourse:",val)))

  return (
    <Grid container >
      <Grid item xs={3}>
        <HeaderSidebar />
      </Grid>

      {/* Content */}
      <Grid item xs={9}>
        <Box>
          <Header />
        </Box>
        <div className="course-body" style={{overflowY : "scroll"}}>
          <Typography variant="h6" sx={{
            color:"#264D74",
            fontFamily:"Poppins",
            letterSpacing:1,
            marginX : 6,
            marginY:2}}
            >Anesthesia & Critical care</Typography>

            
          <Link to="/coursesList" style={{ textDecoration: "none" }}>
            <Box 
              sx={{
              //   border: "1px solid black",
                display: "flex",
                flexWrap: "wrap",
              //   height: "100vh",
                gap: 2,
                justifyContent: "space-around",
                padding: "2%",
              }}
            >
                {course.map((value) => (
                  <Card
                    sx={{
                      maxWidth: 345,
                      boxShadow:4,
                      "&:hover": {
                        boxShadow: 10,
                      },
                      padding: "1%",
                      borderRadius: "10px",
                    }}
                  >
                    <CardMedia sx={{ height: 150 }} image={cardImg} />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {value.courseTitle}
                      </Typography>
                      <Typography
                        variant="body2"
                        gutterBottom
                        color="text.secondary"
                      >
                        {value.content}
                      </Typography>
                      <br />
                      <Typography
                      //   sx={{ position: "absolute", top: "370px" }}
                        variant="p"
                        color="#264D74"
                        component="div"
                      >
                        {value.price}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" variant="contained">
                        Add to Card
                      </Button>
                      <Button size="small">Features</Button>
                    </CardActions>
                  </Card>
                ))}
            </Box>
          </Link>
        </div>
      </Grid>
    </Grid>
  );
};
