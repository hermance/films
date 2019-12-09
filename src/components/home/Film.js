import React from "react";

type TypeProps = {|
    i18n: any,
    film:any,
    hisotry:any,
    fromDetails:boolean
|};
type TypeState = {||};

export default function  Film (props: TypeProps){
        return (
            <div className="film" onClick={()=> props.history.push({pathname:props.fromDetails?props.film.id:"details/"+props.film.id, film:props.film})}>
                {props.film.title}
            </div>
        );

}