import React from "react";
import ReactDOM from "react-dom";
export default class BusstopHeader extends React.Component {
  handlerSearch() {
    let bar = ReactDOM.findDOMNode(this.refs.searchBar);
    let value = bar.value;
    this.props.searchBusstop(value);
  }

  render() {
    return (
      <div>
        <h3 style={{ textAlign: "center" }}>Donation System</h3>
        <table className="optHeader" style={{ textAlign: "center" }}>
          <tbody>
            <tr>
              <td className="headerTd">
                <input
                  ref="searchBar"
                  onChange={this.handlerSearch.bind(this)}
                  type="text"
                  placeholder="Search..."
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
