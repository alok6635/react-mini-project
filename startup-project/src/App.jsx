import './app.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NavBar from './components/Nav/NavBar';
import Item from './components/item/Item';
import Home from './components/home/Home';
import About from './components/about/About';



const App = () => {
    const router = createBrowserRouter([
        {
            path: '/', element: <NavBar />, children: ([
                { path: '/', element: <Home /> },
                { path: '/about', element: <About /> },
                { path: '/item', element: <Item /> },
            ]
            )
        }
    ])
    return (

        <>
            <RouterProvider router={router} />
        </>
    )
}
export default App;