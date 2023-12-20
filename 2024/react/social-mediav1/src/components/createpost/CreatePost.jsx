import { useContext, useRef, } from "react";
import { postListStoreData } from "../../store/PostListStore";

const CreatePost = () => {
  const { addpost } = useContext(postListStoreData)

  const inpRef = useRef();
  const textRef = useRef();
  const idRed = useRef();
  const reactionRef = useRef();
  const hashRef = useRef()

  const handleForm = (e) => {
    e.preventDefault();
    let formData = { 
      title: inpRef.current.value, 
      postContent: textRef.current.value,
      userId:idRed.current.value,
      reaction:reactionRef.current.value,
      hash:hashRef.current.value.split(' ')
    };
    addpost(formData)
    inpRef.current.value = '',
    textRef.current.value = '';

  }

  return (
    <>
      <form className="form_cover" onSubmit={handleForm}>
        <div className="mb-3">
          <label className="form-label">Number of user id</label>
          <input type="number" className="form-control" ref={idRed} />
        </div>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input type="text" className="form-control" placeholder="Enter title here" ref={inpRef} />
        </div>
        <div className="mb-3">
          <label className="form-label">Post</label>
          <textarea cols={15} rows={5} placeholder='Enter content here' ref={textRef}></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Number of reactions</label>
          <input type="number" className="form-control" ref={reactionRef} />
        </div>
        <div className="mb-3">
          <label className="form-label">Enter hash tag here</label>
          <input type="text" className="form-control" ref={hashRef} />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  )
}
export default CreatePost;