import {Header} from "./components/Header/Header";
import {Users} from "./components/Users/Users";
import {Posts} from "./components/Posts/Posts";

import css from './App.module.css'

const App = () => {
    return (
        <div>
            <Header/>
            <div className={css.container}>
                <div>
                    <Users/>
                </div>
                <div>
                    <Posts/>
                </div>
            </div>
        </div>
    );
};

export {App};