import React from "react";

type TypeProps = {|
    i18n: any,
    film:any
|};
type TypeState = {||};

export default function  Film (props: TypeProps){
        return (
            <div className="film">
                {props.film.title}
            </div>
        );

}