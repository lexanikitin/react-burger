import {SET_ACTIVE_TAB} from "../actions/tabs";

const initialStateTab = {
  defaultTabsList: [
    {id: 1, name: 'Булки', type: 'bun'},
    {id: 2, name: 'Соусы', type: 'sauce'},
    {id: 3, name: 'Начинки', type: 'main'}
  ],
  activeTabId: 1,
}

export const tabsListReducer = (state = initialStateTab, action) => {
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
