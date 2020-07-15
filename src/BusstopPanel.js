import React from "react";
import BusstopItem from "./BusstopItem.js";
import Donation from "./Donation.js";
export default class BusstopPanel extends React.Component {
  constructor() {
    super();
    this.state = {
      donatelist: new Donation(),
    };
  }
  refreshDonations(bstopid) {
    this.setState({
      donatelist: this.state.donatelist.refreshDonations(bstopid),
    });
  }

  render() {
    let itemslist = [];

    if (this.props.items.length == 0) {
      itemslist.push(
        <tr>
          <th colSpan="5" className="tempEmpty">
            No busstop available.
          </th>
        </tr>
      );
    } else {
      this.props.items.forEach((item) => {
        itemslist.push(
          <BusstopItem
            key={item.key}
            item={item}
            refreshDonations={this.refreshDonations.bind(this)}
          />
        );
      });
    }

    return (
      <table className="itemPanel">
        <thead>
          <th className="itemTd">Id</th>
          <th className="itemTd">Busstop Name</th>
          <th className="itemTd">Area</th>
        </thead>
        <tbody>{itemslist}</tbody>
      </table>
    );
  }
}
