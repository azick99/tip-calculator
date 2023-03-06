import './persent-button.style.css'
const PercentButton = ({ children, ...otherProps }) => {
  return (
    <button
      className="costum-button bg-dark text-white text-bold"
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default PercentButton
