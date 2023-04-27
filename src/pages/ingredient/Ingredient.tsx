import React, {FC, useEffect, useState} from 'react';
import clsx from "clsx";
import {redirect, useNavigate, useParams} from "react-router-dom";
import {getIngredientsList} from "../../services/actions/list";
import {useDispatch, useSelector} from "../../services/hooks";
import IngredientDetails from "../../components/ingredient-details/IngredientDetails";
import {MODAL_SET_CURRENT_INGREDIENT} from "../../services/actions/modal";
import IngredientDetailsOnPage from "../../components/ingredient-details-on-page/IngredientDetailsOnPage";
import {TBurgerIngredientInfo} from "../../utils/types";

const Ingredient: FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [currentData, setCurrentData] = useState<TBurgerIngredientInfo>();
    const {ingredientsList, isSuccessful} = useSelector(store => store.list);

    let {id} = useParams<{ id: string }>();

    useEffect(() => {
      if (window.localStorage.getItem('MODAL_INGREDIENT_STATE') !== null) {
        navigate('/', {state: window.localStorage.getItem('MODAL_INGREDIENT_STATE')});
      }


      dispatch(getIngredientsList());
    }, []);

    useEffect(() => {
      if (ingredientsList) {


        setCurrentData(ingredientsList.find((item: TBurgerIngredientInfo) => item._id === id?.substring(1)));

      }
    }, [isSuccessful])

    return (
      <IngredientDetailsOnPage info={currentData}/>
    );
  }
;

export default Ingredient;
