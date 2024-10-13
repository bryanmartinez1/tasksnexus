import React from "react";

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
};

function WordButton({
  text,
  fontSize = "16px",
  backgroundColor = "#4CAF50",
  hoverBackgroundColor = "#45a049",
  padding = "0",
  margin = "0",
  border,
  width = "fit-content",
  height,
  borderRadius = "0%",
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
    </button>
  );
}

export default WordButton;
