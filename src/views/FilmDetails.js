import React from "react";

type TypeProps = {|
    i18n: any,
    history: any,
    film:any
|};
type TypeState = {||};

class FilmDetails extends React.Component<TypeProps, TypeState> {

    componentWillMount(){
        const {match} = this.props
        if(!this.props.location.film){
            const id = match.params.id;
            //todo get film by id
        }
    }

    render() {
        const film = this.props.location.film

        return (
            <div>
                {film && film.title}
            </div>
        );
    }
}
export default FilmDetails;
