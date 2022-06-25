import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {changeTheme} from "../features/themeSlice";

function ToggleTheme() {
    const [ checked, setChecked] = useState(true);
    const dispatch = useDispatch();

    return (
        <div className="w3-margin">
            <label className="switch">
            <input type="checkbox" 
            defaultChecked = {!checked}
            onChange={()=>{
                setChecked(!checked);
                dispatch(changeTheme(checked));
            }}/>
            <span className="slider round"></span>
            </label>
        </div>
    );
}

export default ToggleTheme;