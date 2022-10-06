function App() {
  const course = {
    name: "Half Stack application development",
    parts: [
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
    ],
  };

  console.log(course.parts);
  return (
    <div>
      <Header course={course.name} />
      <Content course={course.parts} />

      <Total
        // total={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}
        course={course.parts}
      />
    </div>
  );
}
const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  const partsArr = props.course;
  console.log(partsArr);
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
  props.course.forEach((el) => (total += el.exercises));
  return (
    <div>
      <p>{total}</p>
    </div>
  );
};
export default App;
