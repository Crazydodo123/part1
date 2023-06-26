import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  

  const createPointsObject = () => {
    let obj = {}
    anecdotes.forEach((quote, idx) => {
      obj[idx] = 0
    })
    return obj
  }
  
  const [points, setPoints] = useState(createPointsObject)
  
  const [selected, setSelected] = useState(0)
  
  const [bestAnecdoteIdx, setBestAnecdote] = useState(0)
  
  for (let i = 0; i <= anecdotes.length; i++) {
    if (points[i] > points[bestAnecdoteIdx]) setBestAnecdote(i)
  }
  
  
  const addPoint = () => {
    const copy = {...points}
    copy[selected] += 1
    
    setPoints(copy)
    console.log(copy)
  }
  
  const changeAnecdote = () => {
    let randomNum = selected
    
    while (randomNum == selected) {
      randomNum = Math.floor(Math.random() * anecdotes.length)
    }
    
    setSelected(randomNum)
  }
  
  
  return (
    <>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <button onClick={addPoint}>vote</button>
      <button onClick={changeAnecdote}>next anecdote</button>
      
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[bestAnecdoteIdx]}</p>
    </>
  )
}

export default App