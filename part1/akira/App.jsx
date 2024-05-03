const Header = ({props}) =>{
  console.log(props)
  return(
    <> Course  {props.course} </>
  )
}

const Part = ({part,exercise}) =>{
  return(
    <p>{part} {exercise}</p>
  )
}


const Content = ({props}) =>{
  console.log(props)
  return(
  <>
  <Part part={props[0].part} exercise={props[0].exercise}/>
  <Part part={props[1].part} exercise={props[1].exercise}/>
  <Part part={props[2].part} exercise={props[2].exercise}/>
  </>
  )
}

const Total = ({a,b,c}) => {
  return(
  <p> Number of exercises {a+b+c}</p>
  )
}

function App() {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const array = [{part : part1,exercise : exercises1},{part: part2,exercise: exercises2},{part:part3,exercise:exercises3}]

  return (
    <div>
    <h1><Header props = {{course : course}} /></h1>
    <Content props = {array} />
    <Total a={exercises1} b= {exercises2} c={exercises3}/>
    </div>
  )
}

export default App
