type MainContentProps = {
  image: string;
  title: string;
  desc: string;
};

export default function MainContent({ image, title, desc }: MainContentProps) {
  return (
    <li>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{desc}</p>
    </li>
  );
}
