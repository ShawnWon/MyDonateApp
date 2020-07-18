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
        <h2 style={{ textAlign: "center" }}>Donation System</h2>

        <input
          ref="searchBar"
          onChange={this.handlerSearch.bind(this)}
          type="text"
          placeholder="Search a bus stop..."
          class="w3-input"
        />
      </div>
    );
  }
}
