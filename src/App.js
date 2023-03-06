import { useState } from 'react'
import './App.css'
import Calculator from './components/calculator/Calculator'
import Results from './components/results/Results'

function App() {
  const [bill, setBill] = useState(0)
  const [numPeople, setNumPeople] = useState(0)
  const [custom, setCustom] = useState(null)
  const [status, setStatus] = useState({
    total: 0,
    tip: 0,
  })

  const handleOnChange = (e) => {
    setCustom(e.target.value)
    const customTotal = (custom * bill) / 100
    const customTip = customTotal / numPeople
    if (numPeople > 0) {
      setStatus({
        tip: customTip,
        total: customTotal,
      })
    }
  }

  const handleResetClick = () => {
    setStatus({
      total: 0,
      tip: 0,
    })
  }

  const handleClick = (percent) => {
    const total = (percent * bill) / 100
    const tip = total / numPeople
    if (numPeople > 0) {
      setStatus({
        tip: tip,
        total: total,
      })
    }
  }

  return (
    <div className="App">
      <h1 className="title text-dark fs-600">
        Spli
        <br /> tter
      </h1>
      <main className="content-container">
        <Calculator
          setBill={setBill}
          handleClick={handleClick}
          setNumPeople={setNumPeople}
          numPeople={numPeople}
          status={status}
          handleOnChange={handleOnChange}
        />
        <Results status={status} handleResetClick={handleResetClick} />
      </main>
    </div>
  )
}

export default App
