// @flow

import { ActionType } from "../../constants/ActionType";
import { TypeFilm } from "../../constants/TypeFilm";

type TypeAction = {|
    type: string,
    value: any,
|};
type TypeState = {|
    films:TypeFilm[]
|};

const initialState = {

};

const reducer = (state: TypeState = initialState, action: TypeAction) => {
    switch (action.type) {
        case ActionType.GET_FILMS:
            return {
                ...initialState,
                films:action.payload.films``
            }
        default:
            return state;
    }
};

export default reducer;
