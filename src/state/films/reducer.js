// @flow

import { ActionType } from "../../constants/ActionType";

type TypeAction = {|
    type: string,
    value: any,
|};
type TypeState = {|
    films:[],
    recommendations:[],
    wishList:[],
    isDesc:boolean,
    rates:[]
|};

const initialState = {
    films:[],
    recommendations:[],
    wishList:[],
    rates:[],
    isDesc:true
};

const reducer = (state: TypeState = initialState, action: TypeAction) => {
    switch (action.type) {
        case ActionType.GET_FILMS:
            return {
                ...state,
                films:action.value
            }
        case ActionType.ORDER_FILMS:
            return {
                ...state,
                films:action.value,
                isDesc:!state.isDesc
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
        case ActionType.RATE_FILM:
            const rates = [...state.rates]
            const idx = rates.map(item => item.filmId).indexOf(action.value.filmId)
            if(idx !== -1){
                rates[idx] = action.value
            }else{
                rates.push(action.value)
            }
            return {
                ...state,
                rates:rates
            }
        case ActionType.ADD_TO_WISHLIST:
            return {
                ...state,
                wishList : [... state.wishList, action.value]
            }
        case ActionType.REMOVE_FROM_WISHLIST:
            const wishList = state.wishList
            const index = wishList.indexOf(action.value);
            if (index > -1) {
                wishList.splice(index, 1);
            }
            return {
                ...state,
                wishList : [...wishList]
            }
        default:
            return state;
    }
};

export default reducer;
