import React from 'react';
import ReactDOM from 'react-dom';
import ModalOverlay from "../modal-overlay/ModalOverlay";
import modalStyles from './modal.module.css'
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";

const Modal = ({isActive, setter, children}) => {
  function closePopup() {
    setter(false);
  }

  React.useEffect(() => {

    function closePopupByEscape(e) {
      if (e.key === 'Escape') {
        closePopup();
      }
    }

    if (isActive) {
      document.addEventListener('keydown', closePopupByEscape);
      return () => {
        document.removeEventListener('keydown', closePopupByEscape);
      }
    }
  }, [isActive]);


  return ReactDOM.createPortal(
    <ModalOverlay isActive={isActive} setter={setter}>
      <div className={modalStyles.content} onClick={e => e.stopPropagation()}>
        <div className={modalStyles.close}>
          <CloseIcon type={"primary"} onClick={() => {
            closePopup()
          }}/>
        </div>
        {children}
      </div>
    </ModalOverlay>, document.getElementById('react-modals')
  );
};

export default Modal;
