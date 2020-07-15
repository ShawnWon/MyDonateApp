class donationItem {
  constructor(item) {
    this.info = {};
    this.info.busstopid = item.busstopid;
    this.info.donatername = item.donatername;
    this.info.donateamount = item.donateamount;
    this.info.donateremail = item.donateremail || "";
    this.key = ++donationItem.key;
  }
}
donationItem.key = 0;

export default class Donation {
  constructor() {
    this.allDonations = [
      new donationItem(Donation.rawData[0]),
      new donationItem(Donation.rawData[1]),
      new donationItem(Donation.rawData[2]),
      new donationItem(Donation.rawData[3]),
      new donationItem(Donation.rawData[4]),
    ];

    this.donations = this.allDonations;
    this.bstopid = "";
  }

  addDonationItem(item) {
    let newItem = new donationItem(item);
    this.allDonations.push(newItem);
    this.donations = this.allDonations;
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

Donation.rawData = [
  {
    busstopid: 1,
    donatername: "Jon Snow",
    donateremail: "a@a.com",
    donateamount: 100,
  },
  {
    busstopid: 2,
    donatername: "Jon Snow",
    donateremail: "a@a.com",
    donateamount: 50,
  },
  {
    busstopid: 1,
    donatername: "Hulk",
    donateremail: "h@a.com",
    donateamount: 200,
  },
  {
    busstopid: 2,
    donatername: "Hulk",
    donateremail: "h@a.com",
    donateamount: 150,
  },
  {
    busstopid: 3,
    donatername: "Jon Snow",
    donateremail: "a@a.com",
    donateamount: 20,
  },
];
