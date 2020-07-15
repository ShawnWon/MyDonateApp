import React from "react";
import BusstopHeader from "./BusstopHeader.js";
import BusstopItem from "./BusstopItem.js";
import BusstopPanel from "./BusstopPanel";
import DonateForm from "./DonateForm.js";
import DonateDetail from "./DonateDetail.js";
import "./App.css";
import Busstop from "./Busstop.js";
import Donation from "./Donation.js";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      busstop: new Busstop(),
      donatelist: new Donation(),
      busstopid: 0,
    };
  }

  addDonationItem(item) {
    this.setState({
      donatelist: this.state.donatelist.addDonationItem(item),
    });
  }

  searchBusstop(word) {
    this.setState({
      busstop: this.state.busstop.searchBusstop(word),
    });
  }

  refreshDonations(bid) {
    this.setState({
      busstopid: bid,
      donatelist: this.state.donatelist.refreshDonations(bid),
    });
  }

  render() {
    return (
      <div>
        <BusstopHeader searchBusstop={this.searchBusstop.bind(this)} />
        <BusstopPanel
          items={this.state.busstop.busstops}
          refreshDonations={this.refreshDonations.bind(this)}
        />

        <DonateDetail
          items={this.state.donatelist.donations}
          //refreshDonations={this.refreshDonations.bind(this)}
        />
        <DonateForm />
      </div>
    );
  }
}

var rawData = [
  {
    info: {
      descrip: "我是一匹来自远方的狼。",
      sex: "男",
      age: 20,
      name: "张三",
      id: "主任",
    },
  },
  {
    info: {
      descrip: "我是一匹来自远方的狼。",
      sex: "女",
      age: 21,
      name: "赵静",
      id: "学生",
    },
  },
  {
    info: {
      descrip: "我是一匹来自远方的狼。",
      sex: "女",
      age: 22,
      name: "王二麻",
      id: "学生",
    },
  },
];
