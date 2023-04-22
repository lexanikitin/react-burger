import React, {FC} from 'react';
import ReactDOM from 'react-dom';
import ModalOverlay from "../modal-overlay/ModalOverlay";
import modalStyles from './modal.module.css'
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";

type TModal = {
  isActive: boolean;
  setter: Function;
  children: React.ReactNode
}
const Modal: FC<TModal> = ({isActive, setter, children}) => {
  function closePopup():void {
    setter(false);
  }

  React.useEffect(() => {
    function closePopupByEscape(e:KeyboardEvent):void {
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
    </ModalOverlay>, document.getElementById('react-modals')!
  );
};

export default Modal;
