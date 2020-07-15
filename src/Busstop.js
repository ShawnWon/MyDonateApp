class busstopItem {
  constructor(item) {
    this.info = {};
    this.info.busstopid = item.busstopid;
    this.info.busstopname = item.busstopname;
    this.info.area = item.area;

    this.key = ++busstopItem.key;
  }
}
busstopItem.key = 0;

export default class Busstop {
  constructor() {
    this.allBusstop = [
      new busstopItem(Busstop.rawData[0]),
      new busstopItem(Busstop.rawData[1]),
      new busstopItem(Busstop.rawData[2]),
      new busstopItem(Busstop.rawData[3]),
      new busstopItem(Busstop.rawData[4]),
      new busstopItem(Busstop.rawData[5]),
    ];

    this.busstops = [];
    this.word = "";
    this.area = "";
  }

  searchBusstop(word) {
    this.word = word;
    this.busstops = this.allBusstop;

    this.busstops = this.busstops.filter((item) => {
      return (
        item.info.busstopname.indexOf(word) != -1 ||
        item.info.area.indexOf(word) != -1
      );
    });
    if (word == "") {
      this.busstops = [];
    }
    return this;
  }
}

Busstop.rawData = [
  {
    busstopid: 1,
    busstopname: "Opp Weyhill Cl",
    area: "East",
  },
  {
    busstopid: 2,
    busstopname: "Tanglin Trust Sch",
    area: "East",
  },
  {
    busstopid: 3,
    busstopname: "Bef Weyhill Cl",
    area: "South",
  },
  {
    busstopid: 4,
    busstopname: "Aft Whitchurch Rd",
    area: "North",
  },
  {
    busstopid: 5,
    busstopname: "Opp GEMPLUS",
    area: "West",
  },
  {
    busstopid: 6,
    busstopname: "Tempco Mfg",
    area: "Center",
  },
];
