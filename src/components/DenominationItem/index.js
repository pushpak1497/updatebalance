// Write your code here
const DenominationItem = props => {
  const {item, onClicked} = props
  const {value} = item
  const minus = () => {
    onClicked(value)
  }
  return (
    <li>
      <button type="button" value={value} onClick={minus}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
