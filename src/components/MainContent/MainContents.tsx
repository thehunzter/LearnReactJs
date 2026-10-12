import { useState } from "react";
import { myData } from "../../data.js";
import pic1 from "../../assets/pic1.png";
import MainContent from "./MainContent.tsx";
import NewCourseForm, { type CourseInput } from "./NewCourseForm.tsx";

type Course = {
  id: string;
  image: string;
  title: string;
  desc: string;
};

const initialCourses: Course[] = myData.map((course) => ({
  ...course,
  id: course.title,
}));

export default function MainContents() {
  const [courses, setCourses] = useState<Course[]>(initialCourses);

  function handleAddCourse({ title, desc }: CourseInput) {
    setCourses((prevCourses) => [
      ...prevCourses,
      {
        id: `${title}-${Date.now()}`,
        image: pic1,
        title,
        desc,
      },
    ]);
  }

  return (
    <>
      <section id="core-concepts">
        <h2>Core Courses</h2>
        <ul>
          {courses.map(({ id, image, title, desc }) => (
            <MainContent key={id} image={image} title={title} desc={desc} />
          ))}
        </ul>
      </section>
      <NewCourseForm onAddCourse={handleAddCourse} />
    </>
  );
}
