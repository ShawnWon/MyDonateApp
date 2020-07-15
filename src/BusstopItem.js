import React from "react";
import ReactDOM from "react-dom";
export default class BusstopItem extends React.Component {
  detailClick() {
    let bar = ReactDOM.findDOMNode(this.refs.detailButton);
    let value = bar.value;
    this.props.refreshDonations(value);
  }

  render() {
    return (
      <tr style={{ cursor: "pointer" }}>
        <td className="itemTd">{this.props.item.info.busstopid}</td>
        <td className="itemTd">{this.props.item.info.busstopname}</td>
        <td className="itemTd">{this.props.item.info.area}</td>
        <td className="itemTd">
          <a className="itemBtn">
            <input
              ref="detailButton"
              onClick={this.detailClick.bind(this)}
              type="button"
              value={this.props.item.info.busstopid}
            />
          </a>
        </td>
      </tr>
    );
  }
}
