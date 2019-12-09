import React from "react";
import { connect } from "react-redux";
import actions from "../state/actions";
import Menu from "../components/Menu"
import { GridList } from '@material-ui/core';
import Film from "../components/home/Film"

type TypeProps = {|
    i18n: any,
    history: any,
    wishList:any[],
    addToWishList:Function,
    removeFromWishList:Function
|};
type TypeState = {||};

class WishList extends React.Component<TypeProps, TypeState> {

    render() {
        const { i18n, wishList, history } = this.props;

        return (
            <div>
                <Menu />
                <div className="margin-auto">
                    <h1>{i18n.t("wishList.title")}</h1>
                    <GridList cellHeight={160} cols={3}>
                        {wishList && wishList.map(film => <Film  history={history} film={film} key={film.id}/>)}
                    </GridList>
                </div>
            </div>
        );
    }
}
export { WishList };
export default connect(
    state => ({
        wishList:state.films.wishList,
        films:state.films.films
    }),
    dispatch => ({
        addToWishList: (film) => dispatch(actions.films.addToWishList(film)),
        removeFromWishList: (film) => dispatch(actions.films.removeFromWishList(film))
    })
)(WishList);
