import { createBrowserRouter } from "react-router-dom";
import Home from './Pages/Home/Home'
import { Courses } from "./Pages/Courses/Courses";
import LogIn from "./Pages/Login/LogIn";
import { MCQs } from "./Pages/MCQs/MCQs";
import { Profile } from "./Pages/Profile/Profile";
import { Settings } from "./Pages/Settings/Settings";
import { VideoSections } from "./Pages/VideoSections/VideoSections";
import StartTest from "./Pages/MCQs/StartTest";
import Quiz from "./Pages/MCQs/Quiz";
import PassResults from "./Pages/MCQs/PassResults";
import FailResults from "./Pages/MCQs/FailResults";
import CourseList from "./Pages/Courses/CourseList";
import CourseResources from "./Pages/Courses/CourseResources";
import MCQsStatus from "./Pages/MCQs/MCQsStatus";
export const Routes = createBrowserRouter([
    {
        path :"/",
        element : <LogIn/>,    
    },
    {
        path :"/home",
        element : <Home/>,       
    },
    {
        path :"/courses",
        element : <Courses/>,      
    },
    {
        path :"/coursesList",
        element : <CourseList/>,      
    },
    {
        path :"/coursesResources",
        element : <CourseResources/>,      
    },
    {
        path :"/MCQs",
        element : <MCQs/>,      
    },
    {
        path :"/VideoSections",
        element : <VideoSections/>,     
    },
    {
        path :"/Settings",
        element : <Settings/>,      
    },
    {
        path :"/Profile",
        element : <Profile/>,   
    },
    {
        path :"/Start-test",
        element : <StartTest/>,   
    },
    {
        path :"/Quiz",
        element : <Quiz/>,   
    },
    {
        path :"/Pass-Result",
        element : <PassResults/>,   
    },
    {
        path :"/Fail-Result",
        element : <FailResults/>,   
    },
    {
        path :"/McqsStatus",
        element : <MCQsStatus/>,   
    },
    
])

