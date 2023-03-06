import './results.style.css'
const Results = ({ status, handleResetClick }) => {
  return (
    <div className="amount-con bg-dark text-white">
      <div className="amount-content">
        <div className="amount">
          <div>
            <p className="fs-500">Tip Amount</p>{' '}
            <p className="person">/ person</p>
          </div>
          <p className="amount-text text-bold text-strong-cyan">
            ${status.tip}
          </p>
        </div>
        <div className="amount">
          <div>
            <p className="fs-500">Total</p> <p className="person">/ person</p>
          </div>
          <p className="amount-text text-bold text-strong-cyan">
            ${status.total}
          </p>
        </div>
      </div>
      <button className="reset-button text-dark" onClick={handleResetClick}>
        Reset
      </button>
    </div>
  )
}

export default Results
