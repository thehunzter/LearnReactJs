import type { Course } from "../AddCourse/NewCourseForm.tsx";

export default function MainContent({
  image,
  name,
  instructor,
  level,
  learners,
  status,
  desc,
}: Course) {
  const statusClass = status.toLowerCase().replace(/\s+/g, "-");

  return (
    <li>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p className="instructor">by {instructor}</p>
      <p className="meta">
        {level} · {learners.toLocaleString()} learners
      </p>
      <span className={`status ${statusClass}`}>{status}</span>
      <p>{desc}</p>
    </li>
  );
}
