import React from "react";
import ReactDOM from "react-dom";
export default class DonateForm extends React.Component {
  handlerAddClick(evt) {
    evt.preventDefault();
    let item = {};
    let addForm = ReactDOM.findDOMNode(this.refs.addForm);
    item.busstopid = this.props.currentBSid;
    item.donatername = addForm.querySelector("#donateAddName").value.trim();
    item.donateamount = addForm.querySelector("#donateAddAmount").value.trim();
    item.donateremail = addForm.querySelector("#donateAddEmail").value.trim();

    if (item.busstopid == "0") {
      let tips = ReactDOM.findDOMNode(this.refs.tipsNoBS);
      tips.style.display = "block";
      setTimeout(function () {
        tips.style.display = "none";
      }, 1000);
      return;
    }
    /*
     *表单验证
     */
    if (item.donatername == "" || item.age == "") {
      let tips = ReactDOM.findDOMNode(this.refs.tipsUnDone);
      tips.style.display = "block";
      setTimeout(function () {
        tips.style.display = "none";
      }, 1000);
      return;
    }
    //非负整数
    let numReg = /^\d+$/;
    if (!numReg.test(item.donateamount) || parseInt(item.age) > 1000) {
      let tips = ReactDOM.findDOMNode(this.refs.tipsUnAge);
      tips.style.display = "block";
      setTimeout(function () {
        tips.style.display = "none";
      }, 1000);
      return;
    }

    this.props.addDonations(item);
    addForm.reset();

    //此处应在返回添加成功信息后确认
    let tips = ReactDOM.findDOMNode(this.refs.tips);
    tips.style.display = "block";
    setTimeout(function () {
      tips.style.display = "none";
    }, 1000);
  }

  render() {
    return (
      <div>
        <h4 style={{ "text-align": "center" }}>Add Donation</h4>
        <hr />
        <form ref="addForm" className="addForm">
          <div>
            <label for="donateAddName" style={{ display: "block" }}>
              Name
            </label>
            <input
              ref="addName"
              id="donateAddName"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label for="donateAddAmount" style={{ display: "block" }}>
              Amount
            </label>
            <input
              ref="addAmount"
              id="donateAddAmount"
              type="text"
              placeholder="Input Your donate amount(0-1000)"
            />
          </div>

          <div>
            <label for="donateAddEmail" style={{ display: "block" }}>
              Email(Optional)
            </label>
            <input
              ref="addEmail"
              id="donateAddEmail"
              type="text"
              placeholder="Your Email"
            />
          </div>
          <p ref="tips" className="tips">
            Submit Successfully
          </p>
          <p ref="tipsUnDone" className="tips">
            Please input a name.
          </p>
          <p ref="tipsUnAge" className="tips">
            Please input a valid amount number.
          </p>
          <p ref="tipsNoBS" className="tips">
            Please select a bus stop firstly.
          </p>
          <div>
            <button onClick={this.handlerAddClick.bind(this)}>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
