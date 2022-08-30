import React from "react";
import findNumberGreaterThan from '../utility/findNumberGreaterThan';

const Display=()=>{
    return(
        <div>
           <h3>{findNumberGreaterThan()}</h3>
        </div>
    )
}

export default Display;