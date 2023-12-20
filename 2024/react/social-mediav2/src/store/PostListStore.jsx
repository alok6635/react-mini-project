import { createContext, useEffect, useReducer } from "react";


export const postListStoreData = createContext({
    postList:[],
    addpost:()=>{},
    deletepost:()=>{},
    getDefaultPost:()=>{}
    
})

const postListReducer=(state,action)=>{
   if(action.type == 'ADD POST'){
     return [...state,action.payload]
   }
   else if(action.type=='DELETE'){
      return state.filter((item,id)=>id !==action.payload)
   }
   else if(action.type=='FETCH_DATA'){
       return [...state,...action.payload]
   }
}

const PostStore = ({ children }) => {

    const[postList,dispatch]=useReducer(postListReducer,[]);


    function addpost(formData){
        dispatch({
            type:'ADD POST',
            payload:formData
        })

      
    }
    function deletepost(index){
       dispatch({
        type:'DELETE',
        payload:index
       })
    }

    const getDefaultPost=(fetchData)=>{
        dispatch({
            type:'FETCH_DATA',
            payload:fetchData
        })
    }

    return (
        <>
            <postListStoreData.Provider value={{
                postList:postList,
                addpost:addpost,
                deletepost:deletepost,
                getDefaultPost,
                }}>
                {children}
            </postListStoreData.Provider>
        </>
    )
}
export default PostStore;

