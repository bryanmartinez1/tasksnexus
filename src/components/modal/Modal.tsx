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
  title?: string;
  maxWidth?: string;
  maxHeight?: string;
  minWidth?: string;
  minHeight?: string;
}

function Modal({
  show,
  hide,
  content,
  width = "50%",
  height = "50%",
  title = "",
  maxWidth = "none",
  maxHeight = "none",
  minWidth = "none",
  minHeight = "none",
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      hide();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  if (!show) return null;

  return (
    <div
      className="modalContent"
      style={{ width, height, maxWidth, maxHeight, minHeight, minWidth }}
      ref={modalRef}
    >
      <div className="modalCloseHeader">
        <div className="modalTitle">{title}</div>
        <IMGButton
          src={Close}
          alt="Close"
          toolTipText="Close"
          onClick={hide}
          {...imgButtonProperties}
        />
      </div>
      <div className="modalBody">{content}</div>
    </div>
  );
}

export default Modal;
