import { Link } from "react-router-dom";


const PostData = ({user}) => {
    console.log(user.title)
    return (
        <div>
         
            <Link to={`/post/${user.id}`}>{user.title} </Link>
        </div>
    );
};

export default PostData;