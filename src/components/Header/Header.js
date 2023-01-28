import css from './Header.module.css';
import {Link, NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={css.Header}>
            {/*<Link to={"/"}>HOME</Link>*/}
            {/*<Link to={"/users"}>USERS</Link>*/}
            {/*<Link to={"/posts"}>POSTS</Link>*/}
            {/*<Link to={"/about"}>ABOUT</Link>*/}

            <NavLink to={""}>HOME</NavLink>
            <NavLink to={"users"}>USERS</NavLink>
            <NavLink to={"posts"}>POSTS</NavLink>
            <NavLink to={"about"}>ABOUT</NavLink>

        </div>
    );
};

export {Header};