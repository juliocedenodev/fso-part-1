function Header(props) {
  return (
    <div>
      <h1>Welcome to the {props.course} course</h1>
      </div>
  );
}

function Part(props) {
  return (
    <div>
       <p>
        {props.part}: {props.exercises}
      </p>
      </div>
  );
}

function Total(props) {
  return (
    <div>
       <p>
       Number of exercises: {props.total}
      </p>
      </div>
  );
}

function Content() {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
     <Header course={course.name}/>
     <Part part={course.parts[0].name} exercises={course.parts[0].exercises}/>
     <Part part={course.parts[1].name} exercises={course.parts[1].exercises}/>
     <Part part={course.parts[2].name} exercises={course.parts[2].exercises}/>
     <Total total= {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}/>
      </div>
  );
}

function App() {
  return (
    <div>
      <Content />
    </div>
  );
}



export default App;
