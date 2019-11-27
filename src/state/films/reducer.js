// @flow

import { ActionType } from "../../constants/ActionType";

type TypeAction = {|
    type: string,
    value: any,
|};
type TypeState = {|
|};

const initialState = {

};

const reducer = (state: TypeState = initialState, action: TypeAction) => {
    switch (action.type) {
        case ActionType.GET_FILMS:
            //todo
            return state;
        default:
            return state;
    }
};

export default reducer;
