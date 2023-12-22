import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CreatePost from './components/createpost/CreatePost.jsx';
import PostWrap from './components/posts/PostWrap.jsx';


const router = createBrowserRouter([
          {
             path: '/',element:<App/>,children:[
            { path: '/',element:<PostWrap/>},
            { path: '/createpost',element:<CreatePost/>}
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
