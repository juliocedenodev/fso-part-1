import { useState } from 'react'
const Button = ({onClick, text}) =>
{
  return(
    <button onClick={onClick}> {text} </button>
  );
}

const Statistics = ({good, neutral, bad}) =>
{
  const all = good + bad + neutral;
  const average = ((good + (neutral*0) - bad)/all).toFixed(2);
  const positivePercentage= (good/all*100).toFixed(2);
  if (all===0)
  {
    return(<h3>No Feedback Given</h3>)
  }
  return(
    <div>      
    <Display name="Good" number={good}/>
    <Display name="Neutral" number={neutral}/>
    <Display name="Bad" number={bad}/>
    <Display name="All" number={all}/>
    <Display name="Average" number={average}/>
    <Display name="Positive" number={positivePercentage} percentage="%"/></div>

  )
}

const Display = ({name, number, percentage}) => {

  return(
    <div>
      <table>
      <tbody>
        <tr>
      <td>{name}</td>
      <td>{number}{percentage}</td>
      </tr>
     </tbody>
  </table>

    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  

  const goodButton = () => setGood(good + 1);
  const neutralButton = () => setNeutral(neutral + 1);
  const badButton = () => setBad(bad + 1);
  
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={goodButton} text="Good"/>
      <Button onClick={neutralButton} text="Neutral"/>
      <Button onClick={badButton} text="Bad"/>
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
      
    </div>
  )
}

export default App