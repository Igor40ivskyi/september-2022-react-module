import {Albums} from "../../components/Albums/Albums";

const AlbumsPage = () => {
    return (
        <div>
            <h1 style={{width: '100%', fontSize: 35, fontWeight: 600,textAlign:"center",marginTop:'20px'}}>
                AlbumsPage
            </h1>
            <br/>
            <Albums/>
        </div>
    );
};

export {AlbumsPage};