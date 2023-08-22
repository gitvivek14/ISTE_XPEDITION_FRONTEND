import "./App.css";
import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/common/Navbar";
import ForgotPassword from "./pages/ForgotPassword";
import OpenRoute from './components/core/auth/OpenRoute'
import Login from './pages/Login'
import SignUp from './pages/SignUp';
import UpdatePassword from "./pages/UpdatePassword";
import VerifyEmail from "./pages/VerifyEmail";
import About from "./pages/About";
import MyProfile from "./components/core/Dashboard/MyProfile";
import Dashboard from "./pages/Dashboard";
import Settings from "./components/core/Dashboard/Settings/index";
import {ACCOUNT_TYPE} from './utils/constants'
import { useSelector } from "react-redux";
import AddCourse from "./components/core/Dashboard/index";


function App() {
  const user = useSelector((state)=>state.profile)
  return (
   <div className="w-[100vw] h-[100vh] min-h-screen bg-[#000814] overflow-y-auto ">
    <Navbar></Navbar>
    
    <Routes>
<Route path="/" element={<Home></Home>}></Route>
{/* <Route  path="forgot-password" element={<ForgotPassword></ForgotPassword>}></Route> */}
<Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
        <Route
          path="forgot-password"
          element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
        />
        <Route
          path="signup"
          element={
            <OpenRoute>
            <SignUp></SignUp>
            </OpenRoute>
          }
        />
         <Route
          path="update-password/:id"
          element={
            <OpenRoute>
            <UpdatePassword></UpdatePassword>
            </OpenRoute>
          }
        />
         <Route
          path="verify-email"
          element={
            <OpenRoute>
            <VerifyEmail></VerifyEmail>
            </OpenRoute>
          }
        />


        

<Route
          path="about"
          element={
            <OpenRoute>
             <About></About>
            </OpenRoute>
          }
        />
<Route element={
  

<Dashboard></Dashboard>}> 
<Route
          path="dashboard/my-profile"
          element={
          
           <MyProfile></MyProfile>
         
        
          }
        />

<Route
          path="dashboard/settings"
          element={
           <Settings></Settings>
         
        
          }
        />

<Route path="/dashboard/add-course" element={<AddCourse/>}/>

</Route>

    </Routes>
   </div>
  );
}

export default App;
