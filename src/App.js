import React from "react";
import BusstopHeader from "./Component/BusstopHeader.js";
import BusstopPanel from "./Component/BusstopPanel";
import DonateForm from "./Component/DonateForm.js";
import DonateDetail from "./Component/DonateDetail.js";
import ToggleTheme from "./Component/ToggleTheme";
import "./App.css";

import Busstop from "./Component/Busstop.js";
import Donation from "./Component/Donation.js";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      busstop: new Busstop(),
      displayBStopId: "0",
      bsDonationList: new Donation(),
    };
  }

  addDonationItem(item) {
    this.setState({
      bsDonationList: this.state.bsDonationList.addDonationItem(item),
    });
  }

  refreshDonationList(bsid) {
    this.setState({
      bsDonationList: this.state.bsDonationList.refreshDonations(bsid),
      displayBStopId: bsid,
    });
  }

  searchBusstop(word) {
    this.setState({
      busstop: this.state.busstop.searchBusstop(word),
    });
    if (word === "") {
      this.setState({
        displayBStopId: "0",
      });
    }
  }

  render() {
    return (
      <div className="w3-display-topmiddle">
        <ToggleTheme />
        <div>
          <BusstopHeader searchBusstop={this.searchBusstop.bind(this)} />
          <BusstopPanel
            items={this.state.busstop.busstops}
            refreshDonations={this.refreshDonationList.bind(this)}
            currentBSid={this.state.displayBStopId}
            displayBSpanel={this.state.displayBSpanel}
          />

          <DonateDetail
            items={this.state.bsDonationList.donations}
            currentBSid={this.state.displayBStopId}
          />
          <DonateForm
            currentBSid={this.state.displayBStopId}
            addDonations={this.addDonationItem.bind(this)}
          />
        </div>
      </div>
    );
  }
}
