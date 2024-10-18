import React, { useEffect, useRef, ReactNode } from "react";
import IMGButton from "src/components/buttons/imgButton/ImgButton";
import Close from "src/icons/x.svg";

import "src/components/modal/modal.css";
import { imgButtonProperties } from "src/constants/cssProperties";

export interface ModalProps {
  show: boolean;
  hide: () => void;
  content: ReactNode;
  width?: string;
  height?: string;
}

function Modal({
  show,
  hide,
  content,
  width = "50%",
  height = "50%",
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      hide();
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      hide();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown); // Add escape key listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  if (!show) return null;

  return (
    <div className="modalContent" style={{ width, height }} ref={modalRef}>
      <div className="modalCloseHeader">
        <IMGButton
          src={Close}
          alt="Close"
          toolTipText="Close"
          onClick={hide}
          {...imgButtonProperties}
        />
      </div>
      {content}
    </div>
  );
}

export default Modal;
