import React from "react";

type TypeProps = {|
    i18n: any,
    history: any
|};
type TypeState = {||};

class Welcome extends React.Component<TypeProps, TypeState> {

    render() {
        const { i18n} = this.props;

        return (
            <div>
                {i18n.t("home.welcomeTitle")}
                {i18n.t("home.welcomeContent")}

            </div>
        );
    }
}
export default{ Welcome };