import { Box, Typography } from "@mui/material";

import RaaonlineLogo from '../../Assets/raaonline-logo 4.png';
import HomeIcon from '../../Assets/Home.png'
import CourseIcon from '../../Assets/Course.png';
import MCQsIcon from '../../Assets/MCQs.png';
import ProfileIcon from '../../Assets/Profile.png';
import SettingsIcon from '../../Assets/Settings.png';
import VideoIcon from '../../Assets/Video.png';
import { Link } from "react-router-dom";

function HeaderSidebar() {
   
    const navLinks =  [
        {
            name : "Home",
            icon : HomeIcon,
            link : "/home"
        },
        {
            name : "Courses",
            icon : CourseIcon,
            link : "/Courses"
        },
        {
            name : "VideoSections",
            icon : VideoIcon,
            link : "/VideoSections"
        },
        {
            name : "MCQs",
            icon : MCQsIcon,
            link : "/MCQs"
        },
        {
            name : "Profile",
            icon : ProfileIcon,
            link : "/Profile"
        },
        {
            name : "Settings",
            icon : SettingsIcon,
            link : "/Settings"
        },
    ];
    return (
      <div style={{display:"inline"}}>
       
    
        {/* Sidebar */}

        <Box
          sx={{
            width: "24vw",
            height: "100vh",
            // position: "relative",
            background: "linear-gradient(to Bottom , #33608E, #305D88,#07C682)",
            padding: "2%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              borderRadius: "50%",
              height: "20vh",
              width: "10vw",
              backgroundColor: "white",
              marginTop: "2px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={RaaonlineLogo} alt="" height={50} srcset="" />
          </Box>

          <Typography
            variant="h6"
            sx={{
              fontFamily: "Manrope",
              color: "white",
              letterSpacing: 1,
            }}
          >
            &ensp;Premium Medical <br />
            E-learning Platform
          </Typography>

          <Box
            sx={{
              // border : "1px solid black",
              height: "60vh",
              width: "80%",
              marginTop: "20px",
              padding: "2%",
              display: "flex",
              flexDirection: "column",
              gap: 3,
              //justifyContent : "space-around",
              alignItems: "center",
            }}
          >
            {navLinks.map((item) => {
              return (
                <Link
                  key={item.name}
                  to={item.link}
                  style={{ textDecoration: "none" }}
                >
                  <Box
                    sx={{
                      // border : "1px solid black",
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      width: "180px",
                      height: "40px",
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    <img
                      src={item.icon}
                      alt={item.name}
                      style={{
                        width: "20px",
                        // filter : `${pathname === item.link ? "invert(56%) sepia(14%) saturate(3166%) hue-rotate(215deg) brightness(91%) contrast(81%)" :"invert(86%)" }`
                      }}
                    />
                    <Typography sx={{ fontSize: "20px" }}>
                      {item.name}
                    </Typography>
                  </Box>
                </Link>
              );
            })}
          </Box>
        </Box>
        
      </div>
    );
}

export default HeaderSidebar;
