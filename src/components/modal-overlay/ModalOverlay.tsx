import React, {FC} from 'react';
import modalOverlayStyles from './modal-overlay.module.css'
import clsx from "clsx";

type ModalOverlayT = {
  isActive: boolean;
  setter: Function;
  children: React.ReactNode
}
const ModalOverlay: FC<ModalOverlayT> = ({isActive, setter, children}) => {
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
