// @flow
import { ActionType } from "../../constants/ActionType";
import api from "../../utils/api";
import {config} from "../../config"

const action = {
    addToWishList: (film) => (dispatch: any) => {
        dispatch({
            type: ActionType.ADD_TO_WISHLIST,
            value: film,
        });

    },
    removeFromWishList: (film) => (dispatch: any) => {
        dispatch({
            type: ActionType.REMOVE_FROM_WISHLIST,
            value: film,
        });

    },
    fetchLatestFilms: () => (dispatch: any) => {
        api.getJSON("https://api.themoviedb.org/3/discover/movie?api_key="+config.apiKey).then(res => {
            if (res.status === 200) {
                res.json().then(json => {
                    dispatch({
                        type: ActionType.GET_FILMS,
                        value: json.results,
                    });
                })

            }
        })

    },
    fetchRecommendations: (id:string) => (dispatch: any) => {
        api.getJSON("https://api.themoviedb.org/3/movie/"+id+"/recommendations?api_key="+config.apiKey).then(res => {
            if (res.status === 200) {
                res.json().then(json => {
                    dispatch({
                        type: ActionType.GET_RECOMANDATIONS,
                        value: json.results,
                    });
                })

            }
        })

    },
    fetchFilmById: (id:string) => (dispatch: any) => {
        api.getJSON("https://api.themoviedb.org/3/movie/"+id+"?api_key="+config.apiKey).then(res => {
            if (res.status === 200) {
                res.json().then(json => {
                    dispatch({
                        type: ActionType.GET_FILM,
                        value: json,
                    });
                })

            }
        })

    },

};

export default action;
