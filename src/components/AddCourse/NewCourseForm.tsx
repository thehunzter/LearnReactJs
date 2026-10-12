import { useState, type SubmitEvent } from "react";
import { Link } from "react-router";
import "./NewCourseForm.css";

export type Course = {
  image: string;
  name: string;
  instructor: string;
  level: string;
  learners: number;
  status: string;
  desc: string;
};

type NewCourseFormProps = {
  onAddCourse: (course: Course) => void;
};

const IMAGES = [
  { label: "Picture 1", src: "/images/pic1.png" },
  { label: "Picture 2", src: "/images/pic2.png" },
  { label: "Picture 3", src: "/images/pic3.png" },
  { label: "Picture 4", src: "/images/pic4.png" },
];

const LEVELS = ["Beginner", "Intermediate", "Advanced"];
const STATUSES = ["Open", "Coming soon", "Closed"];

export default function NewCourseForm({ onAddCourse }: NewCourseFormProps) {
  const [image, setImage] = useState(IMAGES[0].src);
  const [name, setName] = useState("");
  const [instructor, setInstructor] = useState("");
  const [level, setLevel] = useState(LEVELS[0]);
  const [learners, setLearners] = useState("");
  const [status, setStatus] = useState(STATUSES[0]);
  const [desc, setDesc] = useState("");

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedName = name.trim();
    const trimmedInstructor = instructor.trim();
    const trimmedDesc = desc.trim();
    const learnersCount = Number(learners);

    if (
      !trimmedName ||
      !trimmedInstructor ||
      !trimmedDesc ||
      !Number.isInteger(learnersCount) ||
      learnersCount < 0
    ) {
      return;
    }

    onAddCourse({
      image,
      name: trimmedName,
      instructor: trimmedInstructor,
      level,
      learners: learnersCount,
      status,
      desc: trimmedDesc,
    });
  }

  return (
    <section id="new-course">
      <h2>Add a New Course</h2>
      <form onSubmit={handleSubmit}>
        <div className="control">
          <label htmlFor="course-image">Image</label>
          <select
            id="course-image"
            name="image"
            value={image}
            onChange={(event) => setImage(event.target.value)}
          >
            {IMAGES.map((option) => (
              <option key={option.src} value={option.src}>
                {option.label}
              </option>
            ))}
          </select>
          <img className="preview" src={image} alt="Selected course" />
        </div>
        <div className="control">
          <label htmlFor="course-name">Course name</label>
          <input
            id="course-name"
            name="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="e.g. React Hooks"
            required
          />
        </div>
        <div className="control">
          <label htmlFor="course-instructor">Instructor</label>
          <input
            id="course-instructor"
            name="instructor"
            type="text"
            value={instructor}
            onChange={(event) => setInstructor(event.target.value)}
            placeholder="e.g. Jane Doe"
            required
          />
        </div>
        <div className="control-row">
          <div className="control">
            <label htmlFor="course-level">Level</label>
            <select
              id="course-level"
              name="level"
              value={level}
              onChange={(event) => setLevel(event.target.value)}
            >
              {LEVELS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="control">
            <label htmlFor="course-learners">Number of learners</label>
            <input
              id="course-learners"
              name="learners"
              type="number"
              min={0}
              step={1}
              value={learners}
              onChange={(event) => setLearners(event.target.value)}
              placeholder="e.g. 120"
              required
            />
          </div>
          <div className="control">
            <label htmlFor="course-status">Status</label>
            <select
              id="course-status"
              name="status"
              value={status}
              onChange={(event) => setStatus(event.target.value)}
            >
              {STATUSES.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
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
        <div className="actions">
          <Link to="/">Cancel</Link>
          <button type="submit">Add Course</button>
        </div>
      </form>
    </section>
  );
}
