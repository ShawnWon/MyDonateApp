import DBservices from "../DB/DBservices.js";

class donationItem {
  constructor(item) {
    this.info = {};
    this.info.busstopid = item.busstopid;
    this.info.donatername = item.donatername;
    this.info.donateamount = item.donateamount;
    this.info.donateremail = item.donateremail || "Anonymous";
    this.key = ++donationItem.key;
  }
}
donationItem.key = 0;

export default class Donation {
  constructor() {
    this.allDonations = DBservices.getAllDonations().map(
      (dn) => new donationItem(dn)
    );

    this.donations = [];
    this.bstopid = "";
  }

  addDonationItem(item) {
    if (item.donateamount != 0) {
      let newItem = new donationItem(item);
      this.allDonations.push(newItem);
    }
    this.donations = this.allDonations.filter((it) => {
      return it.info.busstopid == item.busstopid;
    });

    return this;
  }

  refreshDonations(bstopid) {
    this.bstopid = bstopid;
    this.donations = this.allDonations;

    this.donations = this.donations.filter((item) => {
      return item.info.busstopid == bstopid;
    });
    return this;
  }
}
