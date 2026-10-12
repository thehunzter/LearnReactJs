import pic1 from "./assets/pic1.png";
import pic2 from "./assets/pic2.png";
import pic3 from "./assets/pic3.png";
import pic4 from "./assets/pic4.png";

export const myData = [
  {
    image: pic1,
    title: "Components",
    desc: "The fundamental building blocks of an interface, combined to create an application.",
  },
  {
    image: pic2,
    title: "TSX",
    desc: "Combines HTML and TypeScript to create dynamic, powerful user interfaces.",
  },
  {
    image: pic3,
    title: "Props",
    desc: "Pass data into a component to make it flexible and reusable.",
  },
  {
    image: pic4,
    title: "State",
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
