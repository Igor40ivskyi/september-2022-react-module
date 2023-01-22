const Post = ({post,userID}) => {

    const {userId,title, body} = post;

    if (userId === userID) {

        return (
            <div>

                <div>userID {userId}</div>
                <div>TITLE {title}</div>
                <div>CONTENT {body}</div>

                <br/>

            </div>
        );
}

    }

export {Post};