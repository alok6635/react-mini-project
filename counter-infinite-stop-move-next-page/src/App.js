import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Home from './components/pages/Home';
import About from './components/pages/About';

function App() {
  const router= createBrowserRouter([
    {path: '/', element:<NavBar/>,children:[
    {path: '/', element:<Home/>},
    {path: '/about', element:<About/>},
  ]}, 
  ])
  return (
<RouterProvider router = {router}/>
  );
}

export default App;
