import React, { useRef } from "react";
function BusstopHeader(props) {
  const searchBar = useRef(null);
  const handlerSearch = () => {
    //let bar = ReactDOM.findDOMNode(searchBar);
    let value = searchBar.current.value;
    props.searchBusstop(value);
  }

    return (
      <div>
        <h2 style={{ textAlign: "center" }}>Donation System</h2>

        <input
          ref={searchBar}
          onChange={handlerSearch.bind(this)}
          type="text"
          placeholder="Search a bus stop..."
          className="w3-input"
        />
      </div>
    );
}

export default BusstopHeader;