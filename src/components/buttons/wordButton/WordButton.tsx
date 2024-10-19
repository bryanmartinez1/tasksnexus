import React from "react";
import ChevronUpIcon from "src/icons/chevron-up.svg";
import ChevronDownIcon from "src/icons/chevron-down.svg";

type WordButtonProps = {
  text: string;
  onClick: () => void;
  fontSize?: string;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  padding?: string;
  margin?: string;
  border?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  isDropDown?: boolean;
  isWordDropDownOpen?: boolean;
  type?: "button" | "submit" | "reset";
};

function WordButton({
  text,
  fontSize = "16px",
  backgroundColor = "transparent",
  hoverBackgroundColor = "#DCDCDC",
  padding = "0",
  margin = "0",
  border = "none",
  width = "fit-content",
  height,
  borderRadius = "0%",
  isDropDown = false,
  isWordDropDownOpen = false,
  type = "button",
  onClick,
}: WordButtonProps) {
  const wordButtonStyle: React.CSSProperties = {
    boxSizing: "border-box",
    fontSize,
    backgroundColor,
    padding,
    margin,
    cursor: "pointer",
    border,
    width,
    height,
    borderRadius,
  };

  return (
    <button
      type={type}
      style={wordButtonStyle}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundColor = hoverBackgroundColor)
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.backgroundColor = backgroundColor)
      }
      onClick={onClick}
    >
      {text}
      {isDropDown ? (
        <img
          src={isWordDropDownOpen ? ChevronUpIcon : ChevronDownIcon}
          style={{ height: fontSize }}
          alt="Chevron"
        />
      ) : null}
    </button>
  );
}

export default WordButton;
