import React, {useEffect, useState} from 'react';
import IngDetailsStyles from "./ingredient.modal.css";
import clsx from "clsx";
import {redirect, useNavigate, useParams} from "react-router-dom";
import {getIngredientsList} from "../../services/actions/list";
import {useDispatch, useSelector} from "react-redux";
import IngredientDetails from "../../components/ingredient-details/IngredientDetails";
import {MODAL_SET_CURRENT_INGREDIENT} from "../../services/actions/modal";
import IngredientDetailsOnPage from "../../components/ingredient-details-on-page/IngredientDetailsOnPage";

const Ingredient = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [currentData, setCurrentData] = useState({});
    const {ingredientsList, isSuccessful} = useSelector(store => store.list);

    let {id} = useParams();

    useEffect(() => {
      if (window.localStorage.getItem('MODAL_INGREDIENT_STATE') !== null) {
        navigate('/', {state: window.localStorage.getItem('MODAL_INGREDIENT_STATE')});
      }
      dispatch(getIngredientsList());
    }, []);

    useEffect(() => {
      if (ingredientsList) {
        setCurrentData(ingredientsList.find((item) => item._id === id.substring(1)));
      }
    }, [isSuccessful])

    return (
      <IngredientDetailsOnPage info={currentData}/>
    );
  }
;

export default Ingredient;
