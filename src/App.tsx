

import "./App.css";
import { useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router";
import { myData } from "./data.js";
import Header from "./components/Header/Header.tsx";
import Examples from "./components/MainContent/Examples.tsx";
import MainContents from "./components/MainContent/MainContents.tsx";
import NewCourseForm, { type Course } from "./components/AddCourse/NewCourseForm.tsx";


function App() {
  const [courses, setCourses] = useState<Course[]>(myData);
  const navigate = useNavigate();

  function handleAddCourse(course: Course) {
    setCourses((prevCourses) => [...prevCourses, course]);
    navigate("/");
  }

  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <MainContents courses={courses} />
                <p className="add-course">
                  <Link to="/courses/new">+ Add New Course</Link>
                </p>
                <Examples />
              </>
            }
          />
          <Route
            path="/courses/new"
            element={<NewCourseForm onAddCourse={handleAddCourse} />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
