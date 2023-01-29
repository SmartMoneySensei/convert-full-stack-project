import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
  useParams,
  NavLink,
  useNavigate,
  useLocation,
} from "react-router-dom";

import NavBar from './components/NavBar';
import CreateBugs from './components/CreateBugs';
import ViewBugs from './components/ViewBugs';
import DashBoard from './components/DashBoard';
import EditBug from './components/EditBug';
import ErrorPage from './components/ErrorPage';
import "./App.css"

const root:any = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <Router>  
    <NavBar/>
    <Routes>
      <Route path='/' element={<DashBoard/>}/>
      <Route path='/dashboard' element={<DashBoard/>}/>
      <Route path='/bugs' element={<ViewBugs/>}/>
      <Route path='/createbug' element={<CreateBugs/>}/>
      <Route path='/bugs/:bugId' element={<EditBug/>}/>
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
 </Router>
);


