import './App.css';
import Attendance from "./components/Attendance/Attendance";
import Dashboard from "./components/Dashboard/Dashboard";
import Message from "./components/Message/Message";
import Login from './components/login/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import { Students } from './components/students/Students';

function App() {
  const {currentUser} = useContext(AuthContext)

  const RequireAuth = ({children})=>{
    return currentUser ? (children) : <Navigate to='/' />;
  }
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>}/>
          <Route path="/students" element={<RequireAuth><Students /></RequireAuth>}/>
          <Route path="/attendance" element={<RequireAuth><Attendance /></RequireAuth>}/>
          <Route path='/message' element={<RequireAuth><Message /></RequireAuth>} />
        </Routes>
  </Router>
  );
}

export default App;
