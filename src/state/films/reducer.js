// @flow

import { ActionType } from "../../constants/ActionType";

type TypeAction = {|
    type: string,
    value: any,
|};
type TypeState = {|
    films:[],
    recommendations:[]
|};

const initialState = {
    films:[],
    recommendations:[]
};

const reducer = (state: TypeState = initialState, action: TypeAction) => {
    switch (action.type) {
        case ActionType.GET_FILMS:
            return {
                ...state,
                films:action.value
            }
        case ActionType.GET_FILM:
            return {
                ...state,
                film:action.value
            }
        case ActionType.GET_RECOMANDATIONS:
            return {
                ...state,
                recommendations:action.value
            }
        default:
            return state;
    }
};

export default reducer;
