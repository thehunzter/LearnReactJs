import { useEffect, useState } from "react";
import type { Course } from "../components/AddCourse/NewCourseForm.tsx";

const COURSES_URL = "/data/courses.json";

export function useCourses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    async function loadCourses() {
      try {
        const response = await fetch(COURSES_URL, { signal: controller.signal });
        if (!response.ok) {
          throw new Error(`Failed to load ${COURSES_URL} (HTTP ${response.status}).`);
        }

        const data: unknown = await response.json();
        if (!Array.isArray(data)) {
          throw new Error(`${COURSES_URL} must contain an array of courses.`);
        }

        setCourses(data as Course[]);
      } catch (err) {
        if (controller.signal.aborted) {
          return;
        }
        console.error(err);
        setError("Could not load courses. Please try again.");
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    loadCourses();

    return () => controller.abort();
  }, [reloadKey]);

  function retry() {
    setIsLoading(true);
    setError(null);
    setReloadKey((key) => key + 1);
  }

  function addCourse(course: Course) {
    setCourses((prevCourses) => [...prevCourses, course]);
  }

  return { courses, isLoading, error, retry, addCourse };
}
