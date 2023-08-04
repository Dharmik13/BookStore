import { THEME_MODE } from "../constants/themeConstant";

export const modeReducer = (state={toogleActive: true}, action) =>{
    switch (action.type) {
        case THEME_MODE:
            return {
                ...state,
                toogleActive: !state.toogleActive,
                mode: state.toogleActive ? "light":"dark"
            }
        default:
            return state;
    }
}