import './costum-input.style.css'
import userIcon from '../../assets/images/icon-person.svg'
import dollarIcon from '../../assets/images/icon-dollar.svg'
const CostumInput = ({ title, setBill, setNumPeople, numPeople }) => {
  if (title === 'Bill') {
    return (
      <>
        <h2 className="fs-500">{title}</h2>
        <span className="icons">
          <img src={dollarIcon} alt="icon" />
        </span>
        <input
          type="number"
          className="costum-input title bill"
          placeholder="0"
          onChange={(e) => setBill(e.target.value)}
        />
      </>
    )
  }
  return (
    <>
      <h2 className="fs-500">{title}</h2>
      <span className="icons">
        <img src={userIcon} alt="icon" />
      </span>
      {numPeople > 0 || <span className="red-line">Can't be zero</span>}
      <input
        type="number"
        className="costum-input title people"
        placeholder="0"
        required
        onChange={(e) => {
          setNumPeople(e.target.value)
        }}
      />
    </>
  )
}

export default CostumInput
