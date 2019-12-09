import React from "react";
import { connect } from "react-redux";
import actions from "../state/actions";
import Menu from "../components/Menu"
import Welcome from "../components/home/Welcome"
import Films from "../components/home/Films"

type TypeProps = {|
  i18n: any,
  history: any
|};
type TypeState = {||};

class Home extends React.Component<TypeProps, TypeState> {

    componentWillMount(){
        this.props.fetchFilms();
    }

  render() {
    const { i18n, films, history } = this.props;

    return (
      <div>
        <Menu />
        <Welcome i18n={i18n}/>
        <Films i18n={i18n} films={films} history={history}/>
      </div>
    );
  }
}
export { Home };
export default connect(
    state => ({
        films:state.films.films
    }),
    dispatch => ({
        fetchFilms: () => dispatch(actions.films.fetchLatestFilms()),
    })
)(Home);
