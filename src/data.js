import pic1 from "./assets/pic1.png";
import pic2 from "./assets/pic2.png";
import pic3 from "./assets/pic3.png";
import pic4 from "./assets/pic4.png";

export const myData = [
  {
    image: pic1,
    name: "Components",
    instructor: "Nguyen Van An",
    level: "Beginner",
    learners: 1250,
    status: "Open",
    desc: "The fundamental building blocks of an interface, combined to create an application.",
  },
  {
    image: pic2,
    name: "TSX",
    instructor: "Tran Thi Binh",
    level: "Beginner",
    learners: 980,
    status: "Open",
    desc: "Combines HTML and TypeScript to create dynamic, powerful user interfaces.",
  },
  {
    image: pic3,
    name: "Props",
    instructor: "Le Minh Chau",
    level: "Intermediate",
    learners: 640,
    status: "Coming soon",
    desc: "Pass data into a component to make it flexible and reusable.",
  },
  {
    image: pic4,
    name: "State",
    instructor: "Pham Quoc Dung",
    level: "Advanced",
    learners: 410,
    status: "Closed",
    desc: "Data managed by React that automatically refreshes the interface when it changes.",
  },
];

export const EXAMPLES = {
  components: {
    title: 'Components',
    desc: 'Components are reusable interface building blocks in React. They are designed to be independent and can be composed flexibly.',
    code: `
    function Greeting() {
      return (
        <div>
          <h1>Hello!</h1>
          <p>Welcome to React.</p>
        </div>
      );
    }
    `,
  },
  jsx: {
    title: 'TSX',
    desc: 'tSX makes interface code easier to read by using HTML-like syntax. It helps you build UIs quickly and efficiently.',
    code: `
    function Introduction() {
      return (
        <div>
          <h2>Introduction to React</h2>
          <p>React helps create modern, maintainable interfaces.</p>
        </div>
      );
    }
    `,
  },
  props: {
    title: 'Props',
    desc: 'Props are how data is passed between React components. They make interfaces customizable and flexible.',
    code: `
    function Profile({ name, age }) {
      return (
        <div>
          <h3>Personal information</h3>
          <p>Name: {name}</p>
          <p>Age: {age}</p>
        </div>
      );
    }
    `,
  },
  state: {
    title: 'State',
    desc: 'State allows components to manage dynamic data. It helps the interface respond flexibly to changes.',
    code: `
    function Toggle() {
      const [isOn, setIsOn] = React.useState(false);

      function handleClick() {
        setIsOn((isOn) => !isOn);
      }

      return (
        <button onClick={handleClick}>
          {isOn ? 'On' : 'Off'}
        </button>
      );
    }
    `,
  },
};
