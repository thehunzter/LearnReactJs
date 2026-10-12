

import "./App.css";
import { useState } from "react";
import { myData } from "./data.js";
import Header from "./components/Header/Header.tsx";
import Examples from "./components/MainContent/Examples.tsx";
import MainContents from "./components/MainContent/MainContents.tsx";
import NewCourseForm, { type Course } from "./components/AddCourse/NewCourseForm.tsx";


function App() {
  const [courses, setCourses] = useState<Course[]>(myData);

  function handleAddCourse(course: Course) {
    setCourses((prevCourses) => [...prevCourses, course]);
  }

  return (
    <>
      <Header />

      <main>
       <MainContents courses={courses} />
        <NewCourseForm
          existingTitles={courses.map((course) => course.title)}
          onAddCourse={handleAddCourse}
        />
        <Examples/>
        
      </main>
    </>
  );
}

export default App;
