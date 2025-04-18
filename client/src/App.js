import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Spinner from "./components/Spinner";
import { Toaster } from "react-hot-toast";
import Login from "./pages/employees/Login";
import Register from "./pages/employees/Register";
import Home from "./pages/Home";
import EmployeeHome from "./pages/employees/EmployeeHome";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import Students from "./pages/employees/Students";
import AddStudent from "./pages/employees/AddStudent";
import EditStudent from "./pages/employees/EditStudent";
import Results from "./pages/employees/Results";
import AddResult from "./pages/employees/AddResult";
import EditResult from "./pages/employees/EditResult";
import ResultCheck from "./pages/ResultCheck";
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL || 'http://localhost:4001';

function App() {
  const { loading } = useSelector((state) => state.alert);

  return (
    <div className="App">
      {loading ? <Spinner /> : null}
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result/:resultId" element={<ResultCheck />} />
          <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
          <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
          <Route path="/employee" element={<ProtectedRoute><EmployeeHome /></ProtectedRoute>} />
          <Route path="/employee/students" element={<ProtectedRoute><Students /></ProtectedRoute>} />
          <Route path="/employee/students/add" element={<ProtectedRoute><AddStudent /></ProtectedRoute>} />
          <Route path="/employee/students/edit/:rollNo" element={<ProtectedRoute><EditStudent /></ProtectedRoute>} />
          <Route path="/employee/results" element={<ProtectedRoute><Results /></ProtectedRoute>} />
          <Route path="/employee/results/add" element={<ProtectedRoute><AddResult /></ProtectedRoute>} />
          <Route path="/employee/results/edit/:resultId" element={<ProtectedRoute><EditResult /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
