import React from "react";
import { connect } from "react-redux";

type TypeProps = {|
  i18n: any,
  history: any
|};
type TypeState = {||};

class Home extends React.Component<TypeProps, TypeState> {

  render() {
    const { i18n} = this.props;

    return (
      <div>
        HELLO
      </div>
    );
  }
}
export { Home };
export default connect(
    state => ({
    }),
    dispatch => ({
    })
)(Home);
