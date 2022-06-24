import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {changeTheme} from "../features/themeSlice";

function ToggleTheme() {
    const [ checked, setChecked] = useState(true);
    const [ theme, setTheme] = useState({});
    const dispatch = useDispatch();

    return (
        <div class="w3-margin">
            <label class="switch">
            <input type="checkbox" 
            defaultChecked = {!checked}
            onChange={()=>{
                setChecked(!checked);
                dispatch(changeTheme(checked));
            }}/>
            <span class="slider round"></span>
            </label>
        </div>
    );
}

export default ToggleTheme;