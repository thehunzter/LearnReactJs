
import MainContent from "./MainContent.tsx";
import type { Course } from "../AddCourse/NewCourseForm.tsx";

type MainContentsProps = {
    courses: Course[];
};

export default function MainContents({ courses }: MainContentsProps) {
    return (
        <section id="core-concepts">
            <ul>
                {courses.map((course) => (
                    <MainContent key={course.name} {...course} />
                ))}
            </ul>
        </section>
    )
}
