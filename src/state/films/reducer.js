// @flow

import { ActionType } from "../../constants/ActionType";

type TypeAction = {|
    type: string,
    value: any,
|};
type TypeState = {|
    films:[]
|};

const initialState = {

};

const reducer = (state: TypeState = initialState, action: TypeAction) => {
    switch (action.type) {
        case ActionType.GET_FILMS:
            return {
                ...initialState,
                films:action.value
            }
        default:
            return state;
    }
};

export default reducer;
