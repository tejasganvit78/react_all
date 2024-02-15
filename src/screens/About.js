import React from "react"
import Title from "../components/Title";
import UnorderedList from "../components/UnorderedList";

// 1. Props - object

function About(){
  return  (
  <div>
    <Title name="Node js Guides" collageName={"SNPIT"} schoolName={"SPHV"} rollNo={75} contactNumber={9924035181}/>
    {/* <UnorderedList/> */}
   {/*  <Title name="General"/>
    <Title name="Node js Core Concepts"/>
 */}
  </div>
  );
}

export default About;