import React from "react";

type TypeProps = {|
    i18n: any
|};
type TypeState = {||};

export default function  Welcome (props: TypeProps){

        return (
            <div>
                {props.i18n.t("home.welcomeTitle")}
                {props.i18n.t("home.welcomeContent")}

            </div>
        );

}