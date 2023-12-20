import { useContext, useEffect, useState } from "react";
import Posts from "./Posts";
import { postListStoreData } from "../../store/PostListStore";
import Welcome from "../Welcome";


const PostWrap = () => {
    const { postList, getDefaultPost } = useContext(postListStoreData);
    const [loading, setLoading] = useState(false);


    useEffect(()=>{
        const  controler=new AbortController();
        const signal=controler.signal;
        setLoading(true)
        fetch('https://dummyjson.com/posts',{signal})
            .then(res => res.json())
            .then((result) => {
                getDefaultPost(result.posts)
                setLoading(false)
            });
            return(()=>{
                console.log('dsddffdsf');
                controler.abort();
            })
    },[])

    return (
        <>
        {loading && <h2>Loading...</h2>}
            {
             !loading &&  postList.length == 0 && <Welcome/>
            }
            {
               !loading && postList.map((item, index) => <Posts item={item} key={index} index={index}/>)}
        </>
    )
}
export default PostWrap;