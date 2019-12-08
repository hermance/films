import React from "react";
import Film from "./Film"

type TypeProps = {|
    i18n: any,
    films:any[]
|};
type TypeState = {||};

export default function  Films (props: TypeProps){
        return (
            <div className="films">
                {
                    props.films && props.films.map(film =><Film key={film.id} film={film}/>)
                }
            </div>
        );

}