import React from 'react';
import modalOverlayStyles from './modal-overlay.module.css'
import clsx from "clsx";
import PropTypes from "prop-types";

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

ModalOverlay.propTypes = {
  isActive: PropTypes.bool.isRequired,
  setter: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired
}
