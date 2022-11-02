function App() {
  const course = [
    {
      name: "Half Stack application development",
      id: 1,
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
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <div>
      <Course course={course[0]} />
      <Course course={course[1]} />
    </div>
  );
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
  return partsArr.map((part) => {
    return <Part part={part.name} exercises={part.exercises} />;
  });
  // <div>
  //   <Part part={partsArr[0].name} exercises={partsArr[0].exercises} />
  //   <Part part={partsArr[1].name} exercises={partsArr[1].exercises} />
  //   <Part part={partsArr[2].name} exercises={partsArr[2].exercises} />
  //   <Part part={partsArr[3].name} exercises={partsArr[3].exercises} />
  // </div>
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
