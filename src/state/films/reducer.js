// @flow

import { ActionType } from "../../constants/ActionType";

type TypeAction = {|
    type: string,
    value: any,
|};
type TypeState = {|
    films:[],
    recommendations:[],
    wishList:[]
|};

const initialState = {
    films:[],
    recommendations:[],
    wishList:[]
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
        case ActionType.ADD_IN_WISHLIST:
            return {
                ...state,
                wishList : [... state.wishList, action.value]
            }
        case ActionType.REMOVE_FROM_WISHLIST:
            const wishList = state.wishList
            wishList.remove(action.value) // todo a checker
            return {
                ...state,
                wishList : wishList
            }
        default:
            return state;
    }
};

export default reducer;
