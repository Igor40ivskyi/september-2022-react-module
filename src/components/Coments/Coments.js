import {useEffect, useState} from "react";
import {commentsService} from "../../services";

const Coments = ({comments}) => {


    return (
        <div>
            {comments.map(value => {
                const {id, name} = value;
                return <div key={id}>
                    {id} --- {name}
                </div>
            })}
        </div>
    );
};

export {Coments};