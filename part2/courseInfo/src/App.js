function App() {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  };

  return <Course course={course} />;
}

const Course = (props) => {
  const course = props.course;
  return (
    <div>
      <Header course={course.name} />
      <Content course={course.parts} />

      <Total
        // total={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}
        parts={course.parts}
      />
    </div>
  );
};

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
  // let total = 0;
  // props.course.forEach((el) => (total += el.exercises));
  const total = props.parts.reduce((s, p) => s + p.exercises, 0);
  return (
    <div>
      <p>
        <strong>total of {total} exercises</strong>
      </p>
    </div>
  );
};
export default App;
