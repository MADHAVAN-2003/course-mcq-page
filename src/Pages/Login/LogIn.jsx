import './LogIn.css'
import { Avatar, Box, Grid, Typography,TextField , InputAdornment, IconButton, Button } from '@mui/material'
import logo from '../../Assets/Round Icon.png'
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function LogIn(){
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);
    const [user , setUser] = useState()
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    
    useEffect(()=>{
        const userData  = async ()=>{
           let userRes = await axios.get("http://localhost:6500/users")
           console.log(userRes.data)
           setUser(userRes.data)
        }
        userData()
    },[])
    const formik = useFormik({
        initialValues: {           
            email:"",
            password:"",
        },
        onSubmit: (val) => {
            // console.log(val,"form values")
            if(val.email === user[0].email && val.password === user[0].password){
                navigate('/home')
            }
            else{
                alert("Invalid User")
            }
            // axios.post(baseURL , val)
            // alert("User added sucessfully")
            // navigate('/')
        },

    })
    return(
        <div className='Login-Page'>
        <Box sx={{
            height :"70vh",
            border : "1px solid #DFDEEC",
            width : "80vw",
            mx : "10%",
            my : "4%",
            backgroundColor : "#DFDEEC",
            borderRadius : "20px",
            display : "flex",
            justifyContent : "space-between",
            padding : "2%"
        }}>
            <Grid sx={{
                //  border : "1px solid black",
                height :"70vh",
                width : "35vw",
                background : "linear-gradient(to Bottom , #33608E, #305D88,#07C682)",
                borderTopLeftRadius : "10px",
                borderBottomLeftRadius : "10px",
                
            }}>
                <Avatar 
                    alt='Logo' 
                    src={logo} 
                    sx={{
                        height : "200px",
                        width : "200px",
                        position : "absolute",
                        top : "150px",
                        left : "300px"
                    }}/>
                <Typography align='center'  variant='h4' sx={{
                    color : "white",
                    fontFamily : "Poppins",
                    fontSize : "25px",
                    letterSpacing : 2,
                    position : "absolute",
                    top : "400px",
                    left : "260px"  
                    
                }}>Premium Medical <br />
                E-learning Platform</Typography>

            </Grid>
            <Grid sx={{
                // border : "1px solid black",
                height :"70vh",
                width : "45vw",
                padding : "2%"
            }}>
               <Typography variant='h5' sx={{
                letterSpacing : 3,
                color: "#264D73",
                position : "absolute",
                top : "140px",
                left :"850px"
               }}>
               Login Account
               </Typography>
               <Box sx={{
                    // border : "1px solid black",
                    height : "40vh",
                    width : "25vw",
                    position : "absolute",
                    top : "200px",
                    left : "750px",
                    padding : "2%",              
               }}>
                    <form onSubmit={formik.handleSubmit}>
                        <TextField
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            type='email'
                            name='email'
                            onChange={formik.handleChange}
                            inputProps={{
                                style: {
                                    color: '#7F7F7F', 
                                },
                            }}
                            sx={{
                                width: "25vw",
                                marginBottom: "5%",
                            }}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Password"
                            variant="outlined"
                            type={showPassword ? 'text' : 'password'}
                            name='password'
                            onChange={formik.handleChange}
                            InputProps={{                              
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            edge="end"                                            
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            sx={{
                                width: "25vw",
                                marginBottom: "5%",
                            }}
                        />
                        <Typography variant='h6' gutterBottom sx={{
                            color :"#4A7DFD",
                            fontSize : "18px",
                            marginLeft : "100px",
                            letterSpacing : 2
                        }}>
                            Forgot Password ?
                        </Typography>
                        <Button type='submit' sx={{
                            backgroundColor : "#316AFC",
                            color : "white",
                            width : "100px",
                            marginLeft : "35%",
                            '&:hover': {
                                backgroundColor: "#316AFC",
                            }
                        }}>Login</Button>
                    </form>
               </Box>               
            </Grid>
        </Box>
        </div>        
    )
}

export default LogIn