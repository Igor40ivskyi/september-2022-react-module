import {Component} from "react";

import css from './Comment.module.css'

class Comment extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        const {postId,id,name,email,body} = this.props.comment;
        return (
            <div className={css.Comment}>
                <div>postId {postId}</div>
                <div>id {id}</div>
                <div>name {name}</div>
                <div>email {email}</div>
                <div>body {body}</div>
            </div>
        );
    }
}

export {Comment};
