import React, {useState, useRef} from "react";
import PaymentForm from "./PaymentForm";
import {useSelector} from "react-redux";
function DonateForm(props) {

  const [showDialog, setShowDialog] = useState(false);
  const [itemInfo, setItemInfo] = useState(null);
  const addFormRef = useRef(null);
  const tipsRef = useRef(null);
  const tipsNoBS = useRef(null);
  const tipsUnDone = useRef(null);
  const tipsUnAge = useRef(null);
  const addName = useRef(null);
  const addAmount = useRef(null);
  const addEmail = useRef(null);
  const donateFormView = useRef(null);

  const theme = useSelector((state) => state.theme.value);
  let addForm = addFormRef.current;
  let tips = tipsRef.current;

  const proceedDonate = (action)=> {
    var item = itemInfo;
    if (action === "ok") {
      props.addDonations(item);
      //This is for successfully donation

      tips.style.display = "block";
      setTimeout(function () {
        tips.style.display = "none";
      }, 1000);
    } else {
      item.donateamount = 0;
      props.addDonations(item);
    }
    addForm.reset();
    setShowDialog(false);
  }

  const handlerAddClick= (evt) => {
    evt.preventDefault();

    let item = {};
    
    item.busstopid = props.currentBSid;
    item.donatername = addForm.querySelector("#donateAddName").value.trim();
    item.donateamount = addForm.querySelector("#donateAddAmount").value.trim();
    item.donateremail = addForm.querySelector("#donateAddEmail").value.trim();

    if (item.busstopid === "0") {
      let tips = tipsNoBS.current;
      tips.style.display = "block";
      setTimeout(function () {
        tips.style.display = "none";
      }, 1000);
      return;
    }
    /*
     *validate form
     */
    if (item.donatername === "") {
      let tips = tipsUnDone.current;
      tips.style.display = "block";
      setTimeout(function () {
        tips.style.display = "none";
      }, 1000);
      return;
    }
    //validate number input
    let numReg = /^\d+$/;
    if (!numReg.test(item.donateamount)) {
      let tips = tipsUnAge.current;
      tips.style.display = "block";
      setTimeout(function () {
        tips.style.display = "none";
      }, 1000);
      return;
    } else {
      item.donateamount = parseInt(item.donateamount);
    }
    setShowDialog(true);
    setItemInfo(item);
  }

 
    let formview = donateFormView.current;
    if (props.currentBSid !== "0") {
      formview.style.display = "block";
    } else {
      if (formview != null) formview.style.display = "none";
    }

    return (
      <div ref={donateFormView} className="donateForm">
        <div style={{ "textAlign": "center" }} className="w3-cell-middle">
          <h3>Add Donation</h3>
          <hr />
          <form ref={addFormRef} className="addForm">
            <div className={`w3-card ${theme.primaryColor}`}>
              <label htmlFor="donateAddName" style={{ display: "block" }}>
                Name
              </label>
              <input
                ref={addName}
                id="donateAddName"
                type="text"
                placeholder="Your Name"
                className="w3-input"
              />
            </div>
            <div className={`w3-card ${theme.secondaryColor}`}>
              <label htmlFor="donateAddAmount" style={{ display: "block" }}>
                Amount
              </label>
              <input
                ref={addAmount}
                id="donateAddAmount"
                type="text"
                placeholder="Input Your donate amount(0-1000)"
                className="w3-input"
              />
            </div>

            <div className={`w3-card ${theme.tertiaryColor}`}>
              <label htmlFor="donateAddEmail" style={{ display: "block" }}>
                Email(Optional)
              </label>
              <input
                ref={addEmail}
                id="donateAddEmail"
                type="text"
                placeholder="Your Email"
                className="w3-input"
              />
            </div>
            <p ref={tips} className="tips">
              Submit Successfully
            </p>
            <p ref={tipsUnDone} className="tips">
              Please input a name.
            </p>
            <p ref={tipsUnAge} className="tips">
              Please input a valid amount number.
            </p>
            <p ref={tipsNoBS} className="tips">
              Please select a bus stop firstly.
            </p>
            <div>
              <br />
              <button
                className={`w3-card ${theme.primaryColor}`}
                onClick={handlerAddClick.bind(this)}
              >
                Submit
              </button>
              {showDialog ? (
                <PaymentForm callback={proceedDonate.bind(this)} />
              ) : null}
            </div>
          </form>
        </div>
      </div>
    );
}
export default DonateForm;