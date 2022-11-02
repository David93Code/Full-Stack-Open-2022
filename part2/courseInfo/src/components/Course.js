const Course = (props) => {
  const course = props.course;
  return (
    <div>
      <Header course={course.name} />
      <Content course={course.parts} />

      <Total parts={course.parts} />
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
    return (
      <div key={part.id}>
        <Part part={part.name} exercises={part.exercises} />
      </div>
    );
  });
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
  const total = props.parts.reduce((s, p) => s + p.exercises, 0);
  return (
    <div>
      <p>
        <strong>total of {total} exercises</strong>
      </p>
    </div>
  );
};

export default Course;
