// Action Types
export const SET_THEME = "SET_THEME";

// Action Creators
export interface SetThemeAction {
  type: typeof SET_THEME;
  payload: string;
}

export const setTheme = (theme: string): SetThemeAction => ({
  type: SET_THEME,
  payload: theme,
});

export type ThemeActionTypes = SetThemeAction;
