import React from "react";
import Menu from "../components/Menu"
import {connect} from "react-redux"
import actions from "../state/actions"

type TypeProps = {|
    i18n: any,
    history: any,
    film:any,
    fetchFilmById:Function
|};
type TypeState = {||};

class FilmDetails extends React.Component<TypeProps, TypeState> {

    componentWillMount(){
        const {match, fetchFilmById} = this.props
        if(!this.props.location.film){
            const id = match.params.id;
            fetchFilmById(id)
        }
    }

    render() {
        const film = this.props.location.film ? this.props.location.film : this.props.film

        return (
            <div>
                <Menu />
                {film && film.title}
            </div>
        );
    }
}
export {FilmDetails};
export default connect(
    state => ({
        film:state.films.film
    }),
    dispatch => ({
        fetchFilmById: (id:string) => dispatch(actions.films.fetchFilmById(id)),
    })
)(FilmDetails)
