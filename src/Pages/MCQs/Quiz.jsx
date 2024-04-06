import React, { useEffect, useState } from "react";
import {Box,Button,Container, Grid,Typography,Paper, ListItemText,ListItem, List} from "@mui/material";
import HeaderSidebar from "../../Components/HeaderSidebar/HeaderSidebar";
import Header from "../../Components/Header/Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Quiz() {
  const URL = "http://localhost:7000/Questions"

  const [ questions , SetQuestions] = useState([])
  useEffect(()=>{
    const fetchData = async ()=>{
      let questionData = await axios.get(URL)
      // console.log(questionData.data);
      SetQuestions(questionData.data)
    }
    fetchData()
  },[])
 
  const [selectedQuestion, setSelectedQuestion] = useState(questions[0]);
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(1)
  const [userAnswers, setUserAnswers] = useState('');
  const [ result , setResult ] = useState({
    score : 0,
    correctAnswer  : 0,
    wrongAnswer  : 0
  })

  const navigate = useNavigate();

  
  useEffect(()=>{
    setResult({
      score: 0,
      correctAnswer: 0,
      wrongAnswer: 0,
    });
  },[])
  
  const onClickNext = (index) => {
    setSelectedQuestionIndex(index+1)
    setSelectedQuestion(questions[selectedQuestionIndex])
      setResult((prevVal)=>
        userAnswers == selectedQuestion.answer ?
        {
          ...prevVal,
          score: prevVal.score + 5,
          correctAnswer: prevVal.correctAnswer + 1
        } : 
        {
          ...prevVal,
          wrongAnswer : prevVal.wrongAnswer + 1
        }
        
      )
    }
  //  console.log(result)
  
  const onClickPrevious = () => {
    if (selectedQuestionIndex > 0) {
      setSelectedQuestionIndex(selectedQuestionIndex - 1);
      setSelectedQuestion(questions[selectedQuestionIndex - 1]);
    }
  };
  
  const handleQuestionClick = (question, i) => {
    setSelectedQuestion(question);
    setSelectedQuestionIndex(i)
  };

  const handleOptionClick = (option, index) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[selectedQuestion.id - 1] = option;
    // console.log(userAnswers,"answers")
    setUserAnswers(option);
  };

  const onsubmit = () => {
    
    setResult((prevVal)=>
        userAnswers == selectedQuestion.answer ?
        {
          ...prevVal,
          score: prevVal.score + 5,
          correctAnswer: prevVal.correctAnswer + 1
        } : 
        {
          ...prevVal,
          wrongAnswer : prevVal.wrongAnswer + 1
        }
        
      )
    console.log(result.score)
    
    if(result.score > 20){
      navigate("/Pass-Result",{state: {Result: result}})
    }
    else{
      navigate("/Fail-Result",{state: {Result: result}})
    }

  }
 
//   console.log(userAnswers)
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
          Test Series Name
        </Typography>

        <Container maxWidth="lg" sx={{ mt: 4 }}>
          <Grid container spacing={4}>
            <Grid item xs={2}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <List>
                  {questions.map((question,index) => (
                    <ListItem
                      key={question.id}
                      button
                      onClick={() => handleQuestionClick(question, index+1)}
                      selected={
                        selectedQuestion && selectedQuestion.id === question.id
                      }
                     
                    >
                      <ListItemText>
                        <Typography  sx={{color:"#264D74", fontSize:"18px", fontFamily:"Manrope"}}>
                        {question.questionNo} 
                        </Typography>
                      </ListItemText>
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
            <Grid item xs={10}>
              <Paper sx={{ p: 2 }}>
                {selectedQuestion ? (
                  <div>
                    <Typography
                      variant="h3"
                      sx={{
                        fontFamily: "Manrope",
                        fontSize: "18px",
                        fontWeight: "800",
                      }}
                      gutterBottom
                    >
                      {selectedQuestion.question}
                    </Typography>
                    {selectedQuestion.options.map((option, index) => (
                      <Box key={index} sx={{ m: 1, padding: 2 }}>
                        <Button
                          variant="outlined"
                          onClick={() => handleOptionClick(option, index)}
                          sx={{
                            fontFamily: "Manrope",
                            color: userAnswers === option
                            ? option === selectedQuestion.answer
                              ?  "white"
                              : "white"
                            : "#003A75",
                            backgroundColor:
                              userAnswers === option
                                ? option === selectedQuestion.answer
                                  ?  "#4CAF50"
                                  : "#F44336"
                                : "#D9D9D999",
                            width: "100%",
                            // border : "1px solid black",
                          }}
                        >
                          {option}
                        </Button>
                      </Box>
                    ))}
                    <Button 
                      variant="outlined" 
                      onClick={()=>onClickPrevious(selectedQuestionIndex)}
                       disabled={selectedQuestionIndex === 0}
                      >Previous</Button>
                    {selectedQuestionIndex === questions.length ? <Button
                       onClick={()=>onsubmit()}  
                         sx={{ float: "right" }} variant="contained" color="success">
                      Submit
                    </Button>: <Button
                        onClick={()=>onClickNext(selectedQuestionIndex)} 
                         sx={{ float: "right" }} variant="contained" >
                      Next
                    </Button> }
                  </div>
                ) : ( 
                  <Typography variant="body1">
                    Select a question to view its content.
                  </Typography>
                )}
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
}
