
import { Link } from "react-router";
import MainContent from "./MainContent.tsx";
import type { Course } from "../AddCourse/NewCourseForm.tsx";

type MainContentsProps = {
    courses: Course[];
    isLoading: boolean;
    error: string | null;
    onRetry: () => void;
};

export default function MainContents({ courses, isLoading, error, onRetry }: MainContentsProps) {
    if (isLoading) {
        return (
            <section id="core-concepts">
                <p className="list-state" role="status">Loading courses...</p>
            </section>
        )
    }

    if (error) {
        return (
            <section id="core-concepts">
                <div className="list-state error" role="alert">
                    <p>{error}</p>
                    <button type="button" onClick={onRetry}>Try again</button>
                </div>
            </section>
        )
    }

    if (courses.length === 0) {
        return (
            <section id="core-concepts">
                <div className="list-state">
                    <p>No courses yet.</p>
                    <Link to="/courses/new">Add the first course</Link>
                </div>
            </section>
        )
    }

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
