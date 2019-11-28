// @flow
import { ActionType } from "../../constants/ActionType";
import api from "../../utils/api";
import {config} from "../../config"

const action = {
    fetchFilms: () => (dispatch: any) => {
        const res = await api.getJSON("https://api.themoviedb.org/3/movies?api_key="+config.apiKey);
        if (res.status === 200) {
            const json = await res.json();
            dispatch({
                type: ActionType.GET_FILMS,
                value: json,
            });
        }
    },

};

export default action;
