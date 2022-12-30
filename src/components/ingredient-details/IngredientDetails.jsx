import React from 'react';
import IngDetailsStyles from './ingredient-details.module.css'
import clsx from "clsx";
import PropTypes from "prop-types";

const IngredientDetails = ({info}) => {
  return (
    <div className={IngDetailsStyles.wrapper}>
      <p className={clsx('mt-10', 'ml-10', 'pt-3', 'text', 'text_type_main-large')}>Детали ингредиента</p>
      <div className={IngDetailsStyles.description}>
        <img className={clsx('mt-3')} src={info.image_large} alt={"изображение ингредиента"}/>
        <p className={clsx('mt-4', 'text', 'text_type_main-medium')}>{info.name}</p>
        <ul className={clsx('mt-8', 'mb-15', IngDetailsStyles.stats)}>
          <li className={IngDetailsStyles.stat}>
            <p className={clsx('text', 'text_type_main-default', 'text_color_inactive')}>Калории,ккал</p>
            <p className={clsx('text', 'text_type_digits-default', 'text_color_inactive')}>{info.calories}</p>
          </li>
          <li className={IngDetailsStyles.stat}>
            <p className={clsx('text', 'text_type_main-default', 'text_color_inactive')}>Белки, г</p>
            <p className={clsx('text', 'text_type_digits-default', 'text_color_inactive')}>{info.proteins}</p>
          </li>
          <li className={IngDetailsStyles.stat}>
            <p className={clsx('text', 'text_type_main-default', 'text_color_inactive')}>Жиры, г</p>
            <p className={clsx('text', 'text_type_digits-default', 'text_color_inactive')}>{info.fat}</p>
          </li>
          <li className={IngDetailsStyles.stat}>
            <p className={clsx('text', 'text_type_main-default', 'text_color_inactive')}>Углеводы, г</p>
            <p className={clsx('text', 'text_type_digits-default', 'text_color_inactive')}>{info.carbohydrates}</p>
          </li>
        </ul>
      </div>
    </div>);
};

export default IngredientDetails;

IngredientDetails.propTypes = {
  info: PropTypes.object.isRequired
}
