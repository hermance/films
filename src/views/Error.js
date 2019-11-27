import React from "react";
type TypeProps = {|
  i18n: any,
|};
type TypeState = {||};

class Error extends React.Component<TypeProps, TypeState> {
  render() {
    const { history, i18n } = this.props;
    return (
      <div>
            <h3>
              {i18n.t("error.message")}
            </h3>
            <div>
              <button
                className="btn btn-item"
                onClick={() => history.push("/")}
              >
                {i18n.t("error.restart")}
              </button>
            </div>
      </div>
    );
  }
}

export default Error;
