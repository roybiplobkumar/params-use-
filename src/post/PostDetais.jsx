import { useLoaderData } from "react-router-dom";


const PostDetais = () => {
    const s=useLoaderData()
    console.log(s)
    return (
        <div>
            
            <h1>this is post d </h1>
        </div>
    );
};

export default PostDetais;