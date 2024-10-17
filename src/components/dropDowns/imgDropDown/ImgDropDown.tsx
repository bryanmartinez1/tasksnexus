import React, { useState, useRef, useEffect } from "react";
import IMGButton from "src/components/buttons/imgButton/ImgButton";
import "../dropDown.css";

type ImgDropDownProps = {
  src: string;
  alt: string;
  options: string[];
  optionsFunctions: (() => void)[];
  toolTipText: string;
  buttonProps: any;
  height?: string;
};

function ImgDropDown({
  src,
  alt,
  options,
  buttonProps,
  optionsFunctions,
  toolTipText,
  height = "100%",
}: ImgDropDownProps) {
  const [isDropDownOpen, setDropDownOpen] = useState<boolean>(false);

  const toggleDropDown = () => {
    setDropDownOpen(!isDropDownOpen);
  };

  const optionSelect = (index: number) => {
    optionsFunctions[index]();
    toggleDropDown();
  };

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropDownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside); // Add event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Clean up on unmount
    };
  }, []);

  return (
    <div
      className="img-dd-dropdown-container"
      ref={dropdownRef}
      style={{ height: height }}
    >
      <IMGButton
        src={src}
        toolTipText={toolTipText}
        alt={alt}
        onClick={toggleDropDown}
        {...buttonProps}
        hasToolTip={!isDropDownOpen}
      />
      {isDropDownOpen && (
        <div className="img-dd-dropdown-content">
          {options.map((option, index) => (
            <p
              className="ddPara"
              onClick={() => optionSelect(index)}
              key={index}
            >
              {option}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default ImgDropDown;
