

import "./App.css";
import { Link, Route, Routes, useNavigate } from "react-router";
import { useCourses } from "./hooks/useCourses.ts";
import Header from "./components/Header/Header.tsx";
import Examples from "./components/MainContent/Examples.tsx";
import MainContents from "./components/MainContent/MainContents.tsx";
import NewCourseForm, { type Course } from "./components/AddCourse/NewCourseForm.tsx";


function App() {
  const { courses, isLoading, error, retry, addCourse } = useCourses();
  const navigate = useNavigate();

  function handleAddCourse(course: Course) {
    addCourse(course);
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
                <MainContents
                  courses={courses}
                  isLoading={isLoading}
                  error={error}
                  onRetry={retry}
                />
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
