function App() {
  const course = "Half Stack application development";

  //object inside an array
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />

      <Total
        total={parts[0].exercises + parts[1].exercises + parts[2].exercises}
        parts={parts}
      />
    </div>
  );
}
const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  const partsArr = props.parts;
  return (
    <div>
      <Part part={partsArr[0].name} exercises={partsArr[0].exercises} />
      <Part part={partsArr[1].name} exercises={partsArr[1].exercises} />
      <Part part={partsArr[2].name} exercises={partsArr[2].exercises} />
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
  let total = 0;
  props.parts.forEach((el) => (total += el.exercises));
  return (
    <div>
      <p>{total}</p>
    </div>
  );
};
export default App;
