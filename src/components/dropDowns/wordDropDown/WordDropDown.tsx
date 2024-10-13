import React, { useState } from "react";

type WordDropDownProps = {
  text: string;
  options: string[];
  optionsFunctions: (() => void)[];
  backgroundColor?: string;
  hoverBackgroundColor?: string;
};

function WordDropDown({
  text,
  options,
  optionsFunctions,
  backgroundColor,
  hoverBackgroundColor,
}: WordDropDownProps) {
  const [isDropDownOpen, setDropDownOpen] = useState(false);

  return <></>;
}

export default WordDropDown;
