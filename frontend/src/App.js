import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from './Components/Sidebar/Sidebar';
import Dashboard from "./Pages/Dashboard/Dashboard";
import Patient from "./Pages/Patient/Patient";
import Appointment from "./Pages/Appointment/Appointment";
import Billing from "./Pages/Billing/Billing";


function App() {
  return (
    <Router>
      <div>
        <Sidebar>
          <Routes>
            <Route exact path='/' element={<Dashboard />}/>
            <Route exact path='/patient' element={<Patient />}/>
            <Route exact path='/appointment' element={<Appointment />}/>
            <Route exact path='/billing' element={<Billing />}/>
          </Routes>
        </Sidebar>
      </div>
    </Router>
  );
}

export default App;
