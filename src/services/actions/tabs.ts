export const SET_ACTIVE_TAB: 'SET_ACTIVE_TAB' = 'SET_ACTIVE_TAB';

interface ISetActiveTabAction {
  readonly type: typeof SET_ACTIVE_TAB;
  readonly activeTabId: number;
}

export type TTabsActions = ISetActiveTabAction
export const setActiveTabAction = (activeTabId:number): ISetActiveTabAction => ({
  type: SET_ACTIVE_TAB,
  activeTabId
});
