import React from "react";
import ReactDOM from "react-dom";
import BusstopItem from "./BusstopItem.js";
import Donation from "./Donation.js";

import {useSelector} from "react-redux";

function BusstopPanel(props) {

  const refreshDonations = (bstopid) => {
    props.refreshDonations(bstopid);
  }

      const theme = useSelector((state) => state.theme.value);
    console.log(theme.primaryColor);
  


    let itemslist = [];


    if (props.items.length == 0) {
      itemslist.push(
        <tr>
          <th colSpan="3" className="tempEmpty">
            No busstop available.
          </th>
        </tr>
      );
    } else {
      props.items.forEach((item) => {
        itemslist.push(
          <BusstopItem
            key={item.key}
            item={item}
            refreshDonations={refreshDonations.bind(this)}
          />
        );
      });
    }

    return (
      <div className="w3-container">
        <table className="w3-table w3-striped">
          <thead>
            <th>
              <div className={`w3-card ${theme.primaryColor}`} >
                <h6>Bus stop Id</h6>
              </div>
            </th>
            <th>
              <div className={`w3-card ${theme.secondaryColor}`}>
                <h6>Busstop Name</h6>
              </div>
            </th>
            <th colSpan="2">
              <div className={`w3-card ${theme.tertiaryColor}`}>
                <h6>Area</h6>
              </div>
            </th>
          </thead>
          <tbody>{itemslist}</tbody>
        </table>
      </div>
    );
  
}

export default BusstopPanel;