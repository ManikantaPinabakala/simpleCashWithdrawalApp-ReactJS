import {Component} from 'react'
import './index.css'

class DenominationItem extends Component {
  render() {
    const {denominationDetails, updateBalance} = this.props
    const {value} = denominationDetails
    const onWithdraw = () => {
      updateBalance(value)
    }

    return (
      <li className="list-item">
        <button className="button-element" type="button" onClick={onWithdraw}>
          {value}
        </button>
      </li>
    )
  }
}

export default DenominationItem
