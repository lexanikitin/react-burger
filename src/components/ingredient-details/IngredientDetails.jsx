import React, {useEffect} from 'react';
import IngDetailsStyles from './ingredient-details.module.css'
import clsx from "clsx";
import PropTypes from "prop-types";
import {useSelector} from "react-redux";

const IngredientDetails = () => {
  const {modalDetailsCurrentData} = useSelector(store => store.modals);

  useEffect(() => {
    if (modalDetailsCurrentData._id) {
      window.history.replaceState(null, "", "/ingredients/:" + modalDetailsCurrentData._id)
      localStorage.setItem('MODAL_INGREDIENT_STATE', JSON.stringify(modalDetailsCurrentData));
    } else {
      window.history.replaceState(null, "", "/")
      localStorage.removeItem('MODAL_INGREDIENT_STATE');
    }
  }, [modalDetailsCurrentData])
  return (
    modalDetailsCurrentData._id ?
      <div className={IngDetailsStyles.wrapper}>
        <p className={clsx('mt-10', 'ml-10', 'pt-3', 'text', 'text_type_main-large')}>Детали ингредиента</p>
        <div className={IngDetailsStyles.description}>
          <img className={clsx('mt-3')} src={modalDetailsCurrentData.image_large} alt={"изображение ингредиента"}/>
          <p className={clsx('mt-4', 'text', 'text_type_main-medium')}>{modalDetailsCurrentData.name}</p>
          <ul className={clsx('mt-8', 'mb-15', IngDetailsStyles.stats)}>
            <li className={IngDetailsStyles.stat}>
              <p className={clsx('text', 'text_type_main-default', 'text_color_inactive')}>Калории,ккал</p>
              <p
                className={clsx('text', 'text_type_digits-default', 'text_color_inactive')}>{modalDetailsCurrentData.calories}</p>
            </li>
            <li className={IngDetailsStyles.stat}>
              <p className={clsx('text', 'text_type_main-default', 'text_color_inactive')}>Белки, г</p>
              <p
                className={clsx('text', 'text_type_digits-default', 'text_color_inactive')}>{modalDetailsCurrentData.proteins}</p>
            </li>
            <li className={IngDetailsStyles.stat}>
              <p className={clsx('text', 'text_type_main-default', 'text_color_inactive')}>Жиры, г</p>
              <p
                className={clsx('text', 'text_type_digits-default', 'text_color_inactive')}>{modalDetailsCurrentData.fat}</p>
            </li>
            <li className={IngDetailsStyles.stat}>
              <p className={clsx('text', 'text_type_main-default', 'text_color_inactive')}>Углеводы, г</p>
              <p
                className={clsx('text', 'text_type_digits-default', 'text_color_inactive')}>{modalDetailsCurrentData.carbohydrates}</p>
            </li>
          </ul>
        </div>
      </div>
      : <p className="text text_type_main-medium">Идет загрузка...</p>

  );


};

export default IngredientDetails;

IngredientDetails.propTypes = {
  info: PropTypes.object
}
