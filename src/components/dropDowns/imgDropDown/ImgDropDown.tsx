import React, { useState } from "react";

type ImgDropDownProps = {
  text: string;
  options: string[];
  optionsFunctions: (() => void)[];
  backgroundColor?: string;
  hoverBackgroundColor?: string;
};

function ImgDropDown({
  text,
  options,
  optionsFunctions,
  backgroundColor,
  hoverBackgroundColor,
}: ImgDropDownProps) {
  const [isDropDownOpen, setDropDownOpen] = useState(false);

  return <></>;
}

export default ImgDropDown;
