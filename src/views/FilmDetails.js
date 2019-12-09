import React from "react";
import Menu from "../components/Menu"
import {connect} from "react-redux"
import actions from "../state/actions"
import Film from "../components/home/Film"
import { GridList } from '@material-ui/core';

type TypeProps = {|
    i18n: any,
    history: any,
    film:any,
    wishList:any[],
    recommendations:any[],
    fetchFilmById:Function
|};
type TypeState = {||};

class FilmDetails extends React.Component<TypeProps, TypeState> {

    componentWillMount(){
        const {match, fetchFilmById, fetchRecommendations} = this.props
        if(!this.props.location.film){
            const id = match.params.id;
            fetchFilmById(id)
            fetchRecommendations(id)
        }else if(this.props.location.film){
            fetchRecommendations(this.props.location.film.id)
        }

    }

    renderRecommendations () {
        const {recommendations, i18n, history} = this.props;
        if(recommendations){
            return (
                <div>
                    {i18n.t("filmDetails.recommendation")}
                    <GridList cellHeight={160} cols={3}>
                        {recommendations && recommendations.map(recommendation => <Film  fromDetails={true} history={history} film={recommendation} key={recommendation.id}/>)}
                    </GridList>
                </div>
            )
        }

    }

    addOrRemoveFromWishList = (isInWishList:boolean) => {

    }

    render() {
        const film = this.props.location.film ? this.props.location.film : this.props.film
        const {i18n, wishList} = this.props
        const isInWishList = !!wishList.find(f => f.id === film.id)
        return (
            <div>
                <Menu />
                {
                    film && (
                        <div className="col">
                            <div>{film.title}</div>
                            <img src={"https://image.tmdb.org/t/p/w500/"+film.poster_path} height="300"/>
                            <div className="margin-top margin-bottom">
                                <button onClick={()=>this.addOrRemoveFromWishList(isInWishList)} className={isInWishList ? "btn btn-danger": "btn btn-primary"} type="button">
                                    {isInWishList ? i18n.t("filmDetails.removeToWishList"): i18n.t("filmDetails.addToWishList")}
                                </button>
                            </div>
                            {this.renderRecommendations()}
                        </div>)
                }

            </div>
        );
    }
}
export {FilmDetails};
export default connect(
    state => ({
        film:state.films.film,
        wishList:state.films.wishList,
        recommendations:state.films.recommendations
    }),
    dispatch => ({
        fetchFilmById: (id:string) => dispatch(actions.films.fetchFilmById(id)),
        fetchRecommendations: (id:string) => dispatch(actions.films.fetchRecommendations(id)),
    })
)(FilmDetails)
