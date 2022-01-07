import React from "react";
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";

const HeadBar = ({taskCount}) => {
    console.log(` hey this is total ${taskCount}`)
    const percentage = taskCount;
    return (
        <div style={container}>
            <h1 style={heading}>Tws Blog</h1>
            <h2 style={subheading}>Test Project by Ajay</h2>
            
        <div style={progress}>
            <CircularProgressbar value={percentage} text={`${percentage}`} />
        </div>
      </div>

    )
}



const container = {
    padding: "10px",
    backgroundColor: "#3E3C3C",
    width: "1300px",
    height: "100px"
},
heading = {
    postion: "realtive",
    top: "38px",
    left: "46px",
    fontSize: "50px",
    color: "#FFFFFF",
    fontFamily: 'Righteous'

},
subheading = {
    fontFamily: "Roboto",
    fontSize: "20px",
    color: "#FFFFFF",
    marginLeft: "30px",
},
progress = {
    height: "80px",
    width: "80px",
    position : "relative",
    left : "1180px",
    top: "-100px",
}
export default HeadBar;