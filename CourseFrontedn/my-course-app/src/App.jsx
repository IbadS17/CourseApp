import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import CreateCourse from "./pages/CreateCourse";
import CreateInstance from "./pages/CreateInstance";
import ListCourses from "./pages/ListCourses";
import ListInstances from "./pages/ListInstances";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow p-6">
          <Routes>
            <Route path="/create-course" element={<CreateCourse />} />
            <Route path="/create-instance" element={<CreateInstance />} />
            <Route path="/list-courses" element={<ListCourses />} />
            <Route path="/list-instances" element={<ListInstances />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
