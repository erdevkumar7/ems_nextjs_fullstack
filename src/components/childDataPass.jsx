"use client"
import React from "react";

function ChildDataPass({data, setUser}) {
  console.log(data, "dddddddddd");
  return (
    <>
      <h1>childDataPass</h1>
      <p>{data.age}</p> 
      <button onClick={()=>setUser({name:'rajendra'})}>click child button</button>
      {/* <p>{props.userData.age}</p> */}
    </>
  );
}

export default ChildDataPass;
