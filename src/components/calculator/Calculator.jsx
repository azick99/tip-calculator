import CostumInput from '../costum-input/CostumInput'
import PercentButton from '../percent-button/PercentButton'
import './calculator.syle.css'

const Calculator = ({
  setBill,
  handleClick,
  setNumPeople,
  numPeople,
  status,
  handleOnChange,
}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <CostumInput title="Bill" setBill={setBill} />
      <h2 className=" fs-500 text-grayish">Select Tip %</h2>
      <div className="button-con">
        <PercentButton onClick={() => handleClick(5)}>5%</PercentButton>
        <PercentButton onClick={() => handleClick(10)}>10%</PercentButton>
        <PercentButton onClick={() => handleClick(15)}>15%</PercentButton>
        <PercentButton onClick={() => handleClick(25)}>25%</PercentButton>
        <PercentButton onClick={() => handleClick(50)}>50%</PercentButton>
        <input type="number" placeholder="Custom" onChange={(e) => handleOnChange(e)} />
      </div>
      <CostumInput
        title="People"
        setNumPeople={setNumPeople}
        numPeople={numPeople}
        status={status}
      />
    </form>
  )
}

export default Calculator
