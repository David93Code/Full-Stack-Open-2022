function App() {
  const course = "Half Stack application development";

  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };

  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };

  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    <div>
      <Header course={course} />
      <Content
        part1name={part1.name}
        part1ex={part1.exercises}
        part2name={part2.name}
        part2ex={part2.exercises}
        part3name={part3.name}
        part3ex={part3.exercises}
      />

      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  );
}
const Header = (props) => {
  return <h1>{props.course}</h1>;
};
const Content = (props) => {
  return (
    <div>
      <Part part={props.part1name} exercises={props.part1ex} />
      <Part part={props.part2name} exercises={props.part2ex} />
      <Part part={props.part3name} exercises={props.part3ex} />
    </div>
  );
};
const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  );
};
const Total = (props) => {
  return (
    <div>
      <p>{props.total}</p>
    </div>
  );
};
export default App;
