import React, {useEffect} from 'react';
import IngDetailsStyles from './ingredient-details-on-page.module.css'
import clsx from "clsx";
import PropTypes from "prop-types";
import {useSelector} from "react-redux";

const IngredientDetailsOnPage = ({props}) => {

  return (
    props ?
      <div className={IngDetailsStyles.wrapper}>
        <p className={clsx('text', 'text_type_main-large')}>Детали ингредиента</p>
        <div className={IngDetailsStyles.description}>
          <img className={clsx('mt-3')} src={props.image_large} alt={"изображение ингредиента"}/>
          <p className={clsx('mt-4', 'text', 'text_type_main-medium')}>{props.name}</p>
          <ul className={clsx('mt-8', 'mb-15', IngDetailsStyles.stats)}>
            <li className={IngDetailsStyles.stat}>
              <p className={clsx('text', 'text_type_main-default', 'text_color_inactive')}>Калории,ккал</p>
              <p
                className={clsx('text', 'text_type_digits-default', 'text_color_inactive')}>{props.calories}</p>
            </li>
            <li className={IngDetailsStyles.stat}>
              <p className={clsx('text', 'text_type_main-default', 'text_color_inactive')}>Белки, г</p>
              <p
                className={clsx('text', 'text_type_digits-default', 'text_color_inactive')}>{props.proteins}</p>
            </li>
            <li className={IngDetailsStyles.stat}>
              <p className={clsx('text', 'text_type_main-default', 'text_color_inactive')}>Жиры, г</p>
              <p
                className={clsx('text', 'text_type_digits-default', 'text_color_inactive')}>{props.fat}</p>
            </li>
            <li className={IngDetailsStyles.stat}>
              <p className={clsx('text', 'text_type_main-default', 'text_color_inactive')}>Углеводы, г</p>
              <p
                className={clsx('text', 'text_type_digits-default', 'text_color_inactive')}>{props.carbohydrates}</p>
            </li>
          </ul>
        </div>
      </div>
      : <p className="text text_type_main-medium">Идет загрузка...</p>

  );


};

export default IngredientDetailsOnPage;

IngredientDetailsOnPage.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  image_mobile: PropTypes.string.isRequired,
  image_large: PropTypes.string.isRequired,
  __v: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired
}
