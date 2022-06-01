import "./App.scss";
import Home from "./pages/Home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Admin from "./admin/pages/Home/Admin";
import AddProject from "./admin/pages/AddProject/AddProject";
import ProjectsList from "./admin/pages/ProjectsList/ProjectsList";
import AddPage from "./admin/pages/AddPages/AddPage";
import { useAuth } from "./AuthContext";
import Login from "./pages/Login/Login";
import EditProject from "./admin/pages/EditProject/EditProject";
import Project from "./pages/Projects/Projects";
import Portfolio from "./admin/Portfolio/Portfolio";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const { user } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<Project />} />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/admin" />}
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/projects"
          element={
            <ProtectedRoute>
              <ProjectsList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/projects/add"
          element={
            <ProtectedRoute>
              <AddProject />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/projects/edit/:id"
          element={
            <ProtectedRoute>
              <EditProject />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/portfolio"
          element={
            <ProtectedRoute>
              <Portfolio />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/pages/add"
          element={
            <ProtectedRoute>
              <AddPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
