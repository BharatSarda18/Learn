import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Section = () => {
    const { state } = useContext(AppContext);
    return (
    <div> {state?.result}</div>)
}

export default Section;