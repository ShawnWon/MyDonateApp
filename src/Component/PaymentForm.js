import React from "react";
import {useSelector} from "react-redux";
function PaymentForm(props) {

  const theme = useSelector((state) => state.theme.value);
    return (
      <div className="paymentForm w3-card">
        <div className={`${theme.primaryColor}`}>
          <h4 style={{ textAlign: "center" }}>Please input card number:</h4>
        </div>
        <table className="w3-table w3-striped">
          <tbody>
            <tr>
              <th>Holder Name</th>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <th>Card Number</th>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <th>CVV code</th>
              <td>
                <input type="text" />
              </td>
            </tr>
          </tbody>
        </table>
        <button
          className={`w3-btn ${theme.secondaryColor}`}
          margin-right="50px"
          onClick={() => this.props.callback("ok")}
        >
          OK
        </button>
        <button
          className={`w3-btn ${theme.tertiaryColor} w3-margin-left`}
          onClick={() => this.props.callback("cancel")}
        >
          Cancel
        </button>
      </div>
    );
  
}

export default PaymentForm;