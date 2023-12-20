import { useContext } from "react";
import Posts from "./Posts";
import { postListStoreData } from "../../store/PostListStore";


const PostWrap=()=>{
const {postList}=useContext(postListStoreData);
    return(
        <>
        {postList.map((item,index)=><Posts item={item} key={index} index={index}/>)}
        </>
    )
}
export default PostWrap;