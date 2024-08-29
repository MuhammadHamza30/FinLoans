import Home from './Pages/Home'
import About from './Pages/About';
import ApplyLoan from './Pages/ApplyLoan';
import Element from './Pages/Element';
import ContactUs from './Pages/ContactUs';
import Blog from './Pages/Blog';
import SingleBlog from './Pages/SingleBlog';
import Loan from './Pages/Loan'
import FAQ from './Pages/FAQ'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
    const router = createBrowserRouter([
        {
            path:"/",
            element: <Home/>
        },
        {
            path:"/About",
            element: <About/>
        },
        {
            path:"/404NotFound_Loan",
            element:<Loan/>
        },
        {
            path:"/ApplyLoan",
            element: <ApplyLoan/>
        },
        {
            path:"/Element",
            element :<Element/>
        },
        {
            path:"/404NotFound_FAQ",
            element :<FAQ/>
        },
        {
            path:"/ContactUs",
            element:<ContactUs/>
        },
        {
            path:"/Blog",
            element:<Blog/>
        },
        {
            path:"/SingleBlog",
            element:<SingleBlog/>
        }
    ])
return(
<RouterProvider router={router}/>
)
}

export default App
