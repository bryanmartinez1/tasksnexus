import React from "react";
import { Tooltip } from "react-tooltip";

import "react-tooltip/dist/react-tooltip.css";

type IMGButtonProps = {
  src: string;
  alt: string;
  toolTipText: string;
  onClick: () => void;
  fontSize?: string;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  padding?: string;
  margin?: string;
  border?: string;
  width?: number;
  height?: string;
  borderRadius?: string;
};

function IMGButton({
  alt,
  src,
  toolTipText,
  width,
  height,
  onClick,
  fontSize = "16px",
  backgroundColor = "transparent",
  hoverBackgroundColor = "#45a049",
  padding = "0",
  margin = "0",
  border = "none",
  borderRadius = "0",
}: IMGButtonProps) {
  const imgButtonStyle: React.CSSProperties = {
    boxSizing: "border-box",
    fontSize,
    backgroundColor,
    padding,
    margin,
    cursor: "pointer",
    border,
    width: "fit-content",
    height,
    borderRadius,
  };

  return (
    <>
      <button
        style={imgButtonStyle}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = hoverBackgroundColor)
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = backgroundColor)
        }
        onClick={onClick}
        data-tooltip-content={toolTipText}
        data-tooltip-id={`${toolTipText}-id`}
      >
        <img src={src} alt={alt} width={`${width}px`} height={height} />
      </button>
      <Tooltip id={`${toolTipText}-id`} place="bottom-start" />
    </>
  );
}

export default IMGButton;
