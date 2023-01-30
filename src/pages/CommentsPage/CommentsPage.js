import {Comments} from "../../components/Comments/Comments";
import {Outlet, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postsService} from "../../services/postsService";

const CommentsPage = () => {


    return (
        <div>
            <h1 style={{width: '100%', fontSize: 35, fontWeight: 600,textAlign:"center",marginTop:'20px'}}>
                CommentsPage
            </h1>
            <br/>
            <div style={{display:'flex'}}>

            <div style={{maxHeight:700,overflowY:'scroll',maxWidth:700}}>
            <Comments/>
            </div>
                <div style={{maxWidth:600}}>

            <Outlet/>
                </div>
            </div>

        </div>
    );
};

export {CommentsPage};