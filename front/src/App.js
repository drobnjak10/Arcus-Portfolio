import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import AddPage from "./admin/pages/AddPages/AddPage";
import AddPhoto from "./admin/pages/AddPhoto/AddPhoto";
import AddProject from "./admin/pages/AddProject/AddProject";
import EditProject from "./admin/pages/EditProject/EditProject";
import Gallery from "./admin/pages/Gallery/Gallery";
import Admin from "./admin/pages/Home/Admin";
import ProjectsList from "./admin/pages/ProjectsList/ProjectsList";
import Portfolio from "./admin/Portfolio/Portfolio";
import "./App.scss";
import { useAuth } from "./AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Project from "./pages/Project/Project";

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
          path="/admin/gallery"
          element={
            <ProtectedRoute>
              <Gallery />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/gallery/add"
          element={
            <ProtectedRoute>
              <AddPhoto />
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
