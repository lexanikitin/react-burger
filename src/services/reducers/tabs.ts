import {SET_ACTIVE_TAB, TTabsActions} from "../actions/tabs";
import {string} from "prop-types";

type TinitialStateTab = {
  defaultTabsList:
    {
      id: number;
      name: string;
      type: string;
    }[],
  activeTabId: number,
}

const initialStateTab: TinitialStateTab = {
  defaultTabsList: [
    {id: 1, name: 'Булки', type: 'bun'},
    {id: 2, name: 'Соусы', type: 'sauce'},
    {id: 3, name: 'Начинки', type: 'main'}
  ],
  activeTabId: 1,
}

export const tabsListReducer = (state:TinitialStateTab = initialStateTab, action:TTabsActions):TinitialStateTab => {
  switch (action.type) {
    case SET_ACTIVE_TAB: {
      return {
        ...state,
        activeTabId: action.activeTabId + 1 > 0 ? action.activeTabId + 1 : 3
      }
    }

    default: {
      return state;
    }
  }
}
