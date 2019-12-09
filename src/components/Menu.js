import React from "react";
import { Link } from "react-router-dom";
type TypeProps = {|
|};

type TypeItem = {|
    to: string,
    label: string,
|};

export default function Menu(props: TypeProps) {
    const menu = [
        {
            to:"/",
            label:"Home"
        },
        {
            to:"/wishList",
            label:"Wish List"
        }
    ]
    return (
        <div className="row menu">
            {menu &&
            menu.map((item: TypeItem, index) => (
                <div className="col-12 col-md-6 m-b-2 menu-item" key={index}>
                    <Link className={"btn btn-nav "} to={item.to}>
                        {item.label}
                    </Link>
                </div>
            ))}
        </div>
    );
}
