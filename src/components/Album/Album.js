import css from '../Todo/Todo.module.css'

const Album = ({album}) => {

    const {id, userId, title} = album;

    return (
        <div className={css.Todo}>
            <div>id {id}</div>
            <div>userId {userId}</div>
            <div>title {title}</div>
        </div>
    );
};

export {Album};