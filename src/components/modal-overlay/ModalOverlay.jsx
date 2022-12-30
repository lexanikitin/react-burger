import React from 'react';
import modalOverlayStyles from './modal-overlay.module.css'
import clsx from "clsx";

const ModalOverlay = ({isActive, setter, children}) => {
  return (
    <div
      className={isActive ? clsx(modalOverlayStyles.overlay, modalOverlayStyles.overlay_active) : modalOverlayStyles.overlay}
      onClick={() => {
        setter(false)
      }}>
      {children}
    </div>
  );
};

export default ModalOverlay;
