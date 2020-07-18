import DBservices from "../DB/DBservices.js";

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
    this.allBusstop = DBservices.getAllBusstops().map(
      (bs) => new busstopItem(bs)
    );

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
