import { Suspense, lazy } from "react"
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import User from "./pages/Usermodules/User.jsx"
import Spinner from "C:/Users/seuth/advanced-app-1/src/components/Spinner.jsx"
// import Login from './pages/Login.jsx'
// import Signup from './pages/Signup.jsx';
import Home from "./pages/Home"
const Lazylogin=lazy(()=>import("C:/Users/seuth/advanced-app-1/src/pages/Login.jsx"))
const Lazysignup=lazy(()=>import("C:/Users/seuth/advanced-app-1/src/pages/Signup.jsx"))

// const Lazyabout=lazy(()=>import("./pages/Homepage/About.jsx"))
// const Lazycontact=lazy(()=>import("./pages/Homepage/Contact.jsx"))

const App=()=>{
  const router = createBrowserRouter([
    {
      path: `/home`,
      element:<Suspense fallback={<Spinner/>}><Home/></Suspense>
    },
    // {
      // path: `/about`,
    //   element:<Suspense fallback={<Spinner/>}><Lazyabout/></Suspense>
    // },
    // {
    //   path: `/contact`,
    //   element:<Suspense fallback={<Spinner/>}><Lazycontact/></Suspense>
    // },
    {
      path: `/login`,
      element:<Suspense fallback={<Spinner/>}><Lazylogin/></Suspense>
    },
    {
      path: `/signup`,
      element:<Suspense fallback={<Spinner/>}><Lazysignup/></Suspense>
    },
    {
      path:`/user`,
      element:<Suspense fallback={<Spinner/>}><User/></Suspense>
    }
  ])

    return (
    <RouterProvider router={router}/>
  )
}

export default App;
