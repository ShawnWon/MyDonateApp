import React from "react";
import * as BusstopData from "./BusstopData.json";
import * as DonationData from "./DonationData.json";

const busstops = BusstopData.info;
const donations = DonationData.info;
const DBservices = {
  getAllBusstops: function () {
    return busstops;
  },

  getAllDonations: function () {
    return donations;
  },

  addDonations: function () {
    //Update data to
  },
};

export default DBservices;
