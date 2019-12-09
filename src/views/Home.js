import React from "react";
import { connect } from "react-redux";
import actions from "../state/actions";
import Menu from "../components/Menu"
import Welcome from "../components/home/Welcome"
import Films from "../components/home/Films"

type TypeProps = {|
  i18n: any,
  history: any,
  orderFilms: Function,
    isDesc:boolean
|};
type TypeState = {||};

class Home extends React.Component<TypeProps, TypeState> {

    componentWillMount(){
        this.props.fetchFilms();
    }

    orderByDate = () => {
        const { films, isDesc, orderFilms } = this.props;
        if(isDesc){
            orderFilms(films.sort(function(o1,o2){
                return new Date(o1.release_date) - new Date(o2.release_date);
            }));
        }else{
            orderFilms(films.sort(function(o1,o2){
                return new Date(o2.release_date) - new Date(o1.release_date);
            }));
        }
    }

  render() {
    const { i18n, films, history, isDesc } = this.props;

    return (
      <div>
        <Menu />
        <Welcome i18n={i18n}/>
          <div className="margin-top margin-bottom">
              <button onClick={()=>this.orderByDate()} className="btn btn-primary" type="button">
                  {i18n.t(isDesc ? "home.orderDesc" : "home.orderAsc")}
              </button>
          </div>
        <Films i18n={i18n} films={films} history={history}/>
      </div>
    );
  }
}
export { Home };
export default connect(
    state => ({
        films:state.films.films,
        isDesc:state.films.isDesc
    }),
    dispatch => ({
        fetchFilms: () => dispatch(actions.films.fetchLatestFilms()),
        orderFilms: (films:any[]) => dispatch(actions.films.orderFilms(films)),
    })
)(Home);
