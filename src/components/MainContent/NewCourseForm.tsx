import { useState, type FormEvent } from "react";

export type CourseInput = {
  title: string;
  desc: string;
};

type NewCourseFormProps = {
  onAddCourse: (course: CourseInput) => void;
};

export default function NewCourseForm({ onAddCourse }: NewCourseFormProps) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedTitle = title.trim();
    const trimmedDesc = desc.trim();

    if (!trimmedTitle || !trimmedDesc) {
      return;
    }

    onAddCourse({ title: trimmedTitle, desc: trimmedDesc });
    setTitle("");
    setDesc("");
  }

  return (
    <section id="new-course">
      <h2>Add a New Course</h2>
      <form onSubmit={handleSubmit}>
        <div className="control">
          <label htmlFor="course-title">Title</label>
          <input
            id="course-title"
            name="title"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="e.g. Hooks"
            required
          />
        </div>
        <div className="control">
          <label htmlFor="course-desc">Description</label>
          <textarea
            id="course-desc"
            name="desc"
            rows={3}
            value={desc}
            onChange={(event) => setDesc(event.target.value)}
            placeholder="What will students learn?"
            required
          />
        </div>
        <button type="submit">Add Course</button>
      </form>
    </section>
  );
}
