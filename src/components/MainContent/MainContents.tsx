
import MainContent from "./MainContent.tsx";
import type { Course } from "../AddCourse/NewCourseForm.tsx";

type MainContentsProps = {
    courses: Course[];
};

export default function MainContents({ courses }: MainContentsProps) {
    return (
        <section id="core-concepts">
            <ul>
                {courses.map((concept) => (
                    <MainContent key={concept.title} {...concept} />
                ))}
            </ul>
        </section>
    )
}
