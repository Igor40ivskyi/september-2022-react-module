import {useSelector} from "react-redux";

import css from './Header.module.css';

const Header = () => {
    const {selectedUser,loading} = useSelector(state => state.users);
    const {selectedPost} = useSelector(state => state.posts);
    console.log(selectedPost);
    return (
        <div>
            {loading && <h1>LOADING ...</h1>}
            <div className={css.container}>
                <div className={css.box1}>
                    {selectedUser && selectedUser.name}
                </div>
                <div className={css.box2}>
                    {selectedPost && selectedPost.title}
                </div>
            </div>
        </div>
    );
};

export {Header};