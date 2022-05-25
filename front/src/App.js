import './App.scss';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Admin from './admin/pages/Home/Admin';
import AddProject from './admin/pages/AddProject/AddProject';
import ProjectsList from './admin/pages/ProjectsList/ProjectsList';
import AddPage from './admin/pages/AddPages/AddPage';
import { useAuth } from './AuthContext';
import Login from './pages/Login/Login';
import EditProject from './admin/pages/EditProject/EditProject';
import Project from './pages/Projects/Projects';
import Portfolio from './admin/Portfolio/Portfolio';

function App() {
  const { state } = useAuth();
  const { isAuth, user } = state;

  console.log(state)
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/project/:id" element={ <Project /> } />
        <Route path="/login" element={!isAuth ? <Login /> : <Navigate to="/admin" /> } />
        <Route path="/admin" element={ isAuth ? <Admin /> : <Navigate to="/login" /> } />
        <Route path="/admin/projects" element={ isAuth ? <ProjectsList /> : <Navigate to="/login" /> } />
        <Route path="/admin/projects/add" element={ isAuth ? <AddProject /> : <Navigate to="/login" /> } />
        <Route path="/admin/projects/edit" element={ isAuth ? <EditProject /> : <Navigate to="/login" /> } />
        <Route path="/admin/portfolio" element={ isAuth ? <Portfolio /> : <Navigate to="/login" /> } />
        <Route path="/admin/pages/add" element={ isAuth ? <AddPage /> : <Navigate to="/login" /> } />
      </Routes>
    </Router>
  );
}

export default App;
