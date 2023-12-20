import { useContext } from "react";
import { postListStoreData } from "../../store/PostListStore";

const Posts = ({ item, index }) => {
    console.log(item);
    const { deletepost } = useContext(postListStoreData);

    const handleDelete = (index) => {
        deletepost(index)
    }

    return (
        <>
            <div className="post">
                <div className="card cardgroup">
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.postContent}</p>
                        <ul class='hash_data'>
                            {
                                item.hash.map((item) => {
                                    return <li>
                                        <button type="button" class="btn btn-primary btn-sm">{item}</button>
                                    </li>
                                })
                            }

                        </ul>
                        <p class='reaction'>this para like {item.reaction} people</p>
                    </div>
                </div>
                <i class="bi bi-trash deleteIcon" onClick={() => handleDelete(index)}></i>
            </div>
        </>
    )
}
export default Posts;