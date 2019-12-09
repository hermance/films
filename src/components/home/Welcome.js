import React from "react";

type TypeProps = {|
    i18n: any
|};
type TypeState = {||};

export default function  Welcome (props: TypeProps){

        return (
            <div className="col">
                <h1>
                {props.i18n.t("home.welcomeTitle")}
                </h1>
                <h2>
                {props.i18n.t("home.welcomeContent")}
                </h2>

            </div>
        );

}