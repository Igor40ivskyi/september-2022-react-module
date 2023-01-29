import {useEffect, useState} from "react";
import {albumsService} from "../../services/albumsService";
import {Album} from "../Album/Album";

const Albums = () => {

    const [albums,setAlbums] = useState([]);

    useEffect(() => {
        albumsService.getAll().then(({data}) => setAlbums(data));
    },[]);


    return (
        <div>
            {albums.map(value =><Album key={value.id} album={value}/>)}
        </div>
    );
};

export {Albums};