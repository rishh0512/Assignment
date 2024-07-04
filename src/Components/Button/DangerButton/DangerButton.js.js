import React from "react";
import IconBtn from "./IconBtn";
import PrimaryOutline from "./PrimaryOutlineBtn";
import PrimaryOutlineBtn from "./IconBtnOutline";
import PrimaryBtn from "./PrimaryBtn";

function DangerButton() {
  return (
    <div>
      <PrimaryBtn />
      <IconBtn />
      <PrimaryOutline />
      <PrimaryOutlineBtn />
    </div>
  );
}

export default DangerButton;
