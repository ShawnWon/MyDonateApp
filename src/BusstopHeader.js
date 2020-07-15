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
        <h3 style={{ "text-align": "center" }}>Donation System</h3>
        <table className="optHeader">
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
              <td className="headerTd">
                <label for="idSelect">Area Filter</label>
                <select>
                  <option value="0">All</option>
                  <option value="1">East</option>
                  <option value="2">West</option>
                  <option value="3">North</option>
                  <option value="4">South</option>
                  <option value="5">Center</option>
                </select>
              </td>
              <td>
                <label for="orderSelect">Order by</label>
                <select id="orderSelect">
                  <option value="0">Id</option>
                  <option value="1">Name</option>
                  <option value="2">Name desc</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
