import React, { useState, useRef, useEffect } from "react";
import "../dropDown.css";
import WordButton from "src/components/buttons/wordButton/WordButton";

type WordDropDownProps = {
  title: string;
  options: string[];
  optionsFunctions: (() => void)[];
  buttonProps: any;
  height?: string;
};

function WordDropDown({
  title,
  options,
  buttonProps,
  optionsFunctions,
  height = "100%",
}: WordDropDownProps) {
  const [isDropDownOpen, setDropDownOpen] = useState(false);

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
      <WordButton
        text={title}
        onClick={toggleDropDown}
        {...buttonProps}
        isDropDown
        isWordDropDownOpen={isDropDownOpen}
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

export default WordDropDown;
