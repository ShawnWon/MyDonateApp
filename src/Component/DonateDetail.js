import React, { useRef } from "react";
import DonationItem from "./DonationItem.js";
import {useSelector} from "react-redux";
import "w3-css/w3.css";
function DonateDetail(props) {
    const donateDetailView = useRef(null);
    const theme = useSelector((state) => state.theme.value);
    var target = 700;
    var subtotal = 0;
    var gap = target - subtotal;
    let itemslist = [];
    let detailview = donateDetailView.current;

    if (props.currentBSid !== "0") {
      detailview.style.display = "block";
    } else {
      if (detailview !== null) detailview.style.display = "none";
    }

    if (props.items.length === 0) {
      target = 700;
      subtotal = 0;
      gap = target - subtotal;
      itemslist.push(
        <tr key={0}>
          <th colSpan="3" className="tempEmpty">
            No donation found.
          </th>
        </tr>
      );
    } else {
      target = 700;
      subtotal = props.items.reduce(
        (total, obj) => obj.info.donateamount + total,
        0
      );
      if (subtotal < target) gap = target - subtotal;
      else gap = "This stop has met the target.";
      props.items.forEach((item) => {
        itemslist.push(<DonationItem key={item.key} item={item} />);
      });
    }

    return (
      <div ref={donateDetailView} className="donateForm">
        <h3 style={{ "textAlign": "center" }}>Busstop Status</h3>
        <hr />
        <div className="w3-third">
          <div className={`w3-card ${theme.primaryColor}`}>
            <h6>The target amount to meet: $ {target}</h6>
          </div>
        </div>
        <div className="w3-third">
          <div className={`w3-card ${theme.secondaryColor}`}>
            <h6>Total amount raised by now:$ {subtotal}</h6>
          </div>
        </div>
        <div className="w3-third">
          <div className={`w3-card ${theme.tertiaryColor}`}>
            <h6>Gap left to meet the target: $ {gap}</h6>
          </div>
        </div>

        <table className="w3-table w3-striped">
          <thead>
            <tr>
            <th className="itemTd">Donater Name</th>
            <th className="itemTd">Donater Email</th>
            <th className="itemTd">Amount</th>
            </tr>
          </thead>
          <tbody>{itemslist}</tbody>
        </table>
      </div>
    );
  
}

export default DonateDetail;