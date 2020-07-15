import React from "react";
export default class DonateForm extends React.Component {
  handlerAddClick(evt) {
    evt.preventDefault();
    let item = {};
    let addForm = React.findDOMNode(this.refs.addForm);

    item.name = addForm.querySelector("#donateAddName").value.trim();
    item.amount = addForm.querySelector("#donateAddAmount").value.trim();
    item.email = addForm.querySelector("#donateAddEmail").value.trim();

    /*
     *表单验证
     */
    if (item.name == "" || item.age == "") {
      let tips = React.findDOMNode(this.refs.tipsUnDone);
      tips.style.display = "block";
      setTimeout(function () {
        tips.style.display = "none";
      }, 1000);
      return;
    }
    //非负整数
    let numReg = /^\d+$/;
    if (!numReg.test(item.amount) || parseInt(item.age) > 1000) {
      let tips = React.findDOMNode(this.refs.tipsUnAge);
      tips.style.display = "block";
      setTimeout(function () {
        tips.style.display = "none";
      }, 1000);
      return;
    }

    this.props.addDonateItem(item);
    addForm.reset();

    //此处应在返回添加成功信息后确认
    let tips = React.findDOMNode(this.refs.tips);
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
              id="donateAddAmout"
              type="text"
              placeholder="Input Your donate amount(0-1000)"
            />
          </div>

          <div>
            <label for="donateAddEmail" style={{ display: "block" }}>
              Email
            </label>
            <textarea ref="addEmail" id="donateAddEmail" type="text"></textarea>
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
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
