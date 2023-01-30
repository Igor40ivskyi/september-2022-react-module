import {useEffect, useState} from "react";
import {albumsService} from "../../services/albumsService";
import {endpoints} from "../../configs/urls";

const Albums = () => {

    const [albums,setAlbums] = useState([]);

    useEffect(() => {
        albumsService.getAll(endpoints.albums).then(({data}) => setAlbums(data));
    },[]);

    return (
        <div>
            {albums.map(value => {
                const {userId, id, title} = value;
                return(
                    <div key={id} style={{marginLeft:'20px',fontFamily:'fantasy',fontSize:20,marginBottom:15}}>
                        <div>ID {id}</div>
                        <div>USER ID {userId}</div>
                        <div>TITLE {title}</div>
                    </div>
                )
            })}
        </div>
    );
};

export {Albums};