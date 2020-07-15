import React from "react";
import DonationItem from "./DonationItem.js";
import Donation from "./Donation.js";
export default class DonateDetail extends React.Component {
  render() {
    let itemslist = [];

    if (this.props.currentBSid == 0) {
      itemslist.push(
        <tr>
          <th colSpan="5" className="tempEmpty">
            Please select a bus stop to display the detail.
          </th>
        </tr>
      );
    } else if (this.props.items.length == 0) {
      itemslist.push(
        <tr>
          <th colSpan="5" className="tempEmpty">
            No donation available.
          </th>
        </tr>
      );
    } else {
      this.props.items.forEach((item) => {
        itemslist.push(<DonationItem key={item.key} item={item} />);
      });
    }

    return (
      <div>
        <h4 style={{ "text-align": "center" }}>Busstop Donation</h4>
        <hr />
        <h6>
          Total amount raised by now:
          {this.props.items.reduce((total, obj) => obj.donateamount + total, 0)}
        </h6>
        <table className="itemPanel">
          <thead>
            <th className="itemTd">Donater Name</th>
            <th className="itemTd">Donater Email</th>
            <th className="itemTd">Amount</th>
          </thead>
          <tbody>{itemslist}</tbody>
        </table>
      </div>
    );
  }
}
