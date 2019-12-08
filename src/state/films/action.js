// @flow
import { ActionType } from "../../constants/ActionType";
import api from "../../utils/api";
import {config} from "../../config"

const action = {
    fetchLatestFilms: () => (dispatch: any) => {
        api.getJSON("https://api.themoviedb.org/3/discover/movie?api_key="+config.apiKey).then(res => {
            if (res.status === 200) {
                res.json().then(json => {
                    console.log(json.results)
                    dispatch({
                        type: ActionType.GET_FILMS,
                        value: json.results,
                    });
                })

            }
        })

    },

};

export default action;
