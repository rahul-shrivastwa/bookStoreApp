import Courses from "./Components/Courses/Courses";
import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Signup from "./Components/Signup";

function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  )
}

export default App;