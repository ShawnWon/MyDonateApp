import React, {useRef} from "react";
import {useSelector} from "react-redux";
function BusstopItem(props) {
  const detailButton = useRef(null);
  const detailClick= ()=> {
    let bar = detailButton.current;
    let value = bar.id;
    console.log(value);
    props.refreshDonations(value);
  }

  const theme = useSelector((state) => state.theme.value);
  
    return (
      <tr style={{ cursor: "pointer" }}>
        <td>{props.item.info.busstopid}</td>
        <td>{props.item.info.busstopname}</td>
        <td>{props.item.info.area}</td>
        <td>
          <a href="/#">
            <button
              id={props.item.info.busstopid}
              ref={detailButton}
              onClick={detailClick.bind(this)}
              className={`w3-btn ${theme.primaryColor}`}
            >
              Go
            </button>
          </a>
        </td>
      </tr>
    );
  
}

export default BusstopItem;
