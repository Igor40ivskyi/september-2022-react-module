import './Post.css';

const Post = ({post,userID}) => {

    const {userId,title, body} = post;

    if (userId === userID) {

        return (
            <div className={'userPosts'}>
                <div>userID {userId}</div>
                <div>TITLE {title}</div>
                <div>CONTENT {body}</div>
            </div>
        );
}

    }

export {Post};