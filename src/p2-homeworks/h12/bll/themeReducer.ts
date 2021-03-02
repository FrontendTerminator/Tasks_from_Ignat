const initState: ThemeReducerType = {
    theme: "dark"
};
type ThemeReducerType = {
    theme: string
}
type ThemeReducerActionType = ChangeThemeCType

export const themeReducer = (state = initState, action: ThemeReducerActionType): ThemeReducerType => { // fix any
    switch (action.type) {
        case "CHANGE-THEME": {
            return {
                ...state,
                theme: action.nameTheme
            };
        }
        default: return state;
    }
};

type ChangeThemeCType = {
    type: "CHANGE-THEME"
    nameTheme: string
}
export const changeThemeC = (nameTheme: string): ChangeThemeCType => {
    return {type: "CHANGE-THEME", nameTheme}
}; // fix any