import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {
    totalAmount: 2000,
  }

  updateBalance = value => {
    this.setState(prevState => ({totalAmount: prevState.totalAmount - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {totalAmount} = this.state
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)

    return (
      <div className="bg-container">
        <div className="inner-bg-container">
          <div className="profile-details-container">
            <div className="initial-container">
              <p>{initial}</p>
            </div>
            <p className="username">{name}</p>
          </div>
          <div className="balance-section-container">
            <p className="balance-text">Your Balance</p>
            <div>
              <p className="total-amount">{totalAmount}</p>
              <p className="total-rupees-text">In Rupees</p>
            </div>
          </div>
          <p className="withdraw-text">Withdraw</p>
          <p className="instruction">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denomination-list">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                denominationDetails={eachDenomination}
                updateBalance={this.updateBalance}
                key={eachDenomination.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
