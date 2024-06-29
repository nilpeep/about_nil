import { SET_THEME, ThemeActionTypes } from "./themeActions";

export interface ThemeState {
  theme: string;
}

const initialState: ThemeState = {
  theme: "light", // Varsayılan tema
};

const themeReducer = (
  state = initialState,
  action: ThemeActionTypes
): ThemeState => {
  switch (action.type) {
    case SET_THEME:
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

export default themeReducer;
