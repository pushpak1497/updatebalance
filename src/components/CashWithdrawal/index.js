import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {total: 2000}

  onClicked = value => {
    this.setState(prevstate => ({
      total: prevstate.total - value,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {total} = this.state
    return (
      <div>
        <div>
          <p>s</p>
          <h1>Sarah Williams</h1>
        </div>
        <div>
          <p>Your Balance</p>
          <div>
            <p>{total}</p>
            <p>In Rupees</p>
          </div>
        </div>
        <p>Withdraw</p>
        <p>CHOOSE SUM (IN RUPEES)</p>
        <ul className="list">
          {denominationsList.map(each => (
            <DenominationItem
              item={each}
              key={each.id}
              onClicked={this.onClicked}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default CashWithdrawal
