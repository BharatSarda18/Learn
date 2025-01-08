import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { twoSum } from "../helperfunctions/indexhelperfunction";

const Header = () => {

    const { state, dispatch } = useContext(AppContext);

    const onChange = (e, type) =>  dispatch({ type, payload: e?.target?.value });

    const submitHandler=async()=>{
       const result=await twoSum(state.numbers.split(","),state.targetNum);
       dispatch({ type:"result", payload: result });
    }

    return (
        <div>
            <div>
                <label>Enter comma seperated numbers</label>
                <input type="text" value={state.numbers} onChange={(e) => onChange(e, "numbers")} placeholder="Enter comma seperated numbers" />
            </div>
            <div>
                <label>Enter target sum</label>
                <input type="number" value={state.targetNum} onChange={(e) => onChange(e, "targetsum")} placeholder="Enter target sum" />
            </div>
            <button onClick={submitHandler}>Submit</button>
        </div>)
}
export default Header;