import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./page/home/Home";
import UserInfo from "./page/userinfo/UserInfo";
import Photos from "./page/photos/Photos";
import SignIn from "./page/signIn/SignIn";
import LoginInfo from "./page/loginInfo/LoginInfo";
import Error from "./error/Error";



const router = createBrowserRouter(
  createRoutesFromElements(
   <>
    <Route element={<MainLayout/>}>
    <Route path="/" element={<Home/>}/>
    <Route path="/userinfo" element={<UserInfo/>}/>
    <Route path="/photos" element={<Photos/>}/>
    <Route path="/signin" element={<SignIn/>}/>
    <Route path="/logininfo" element={<LoginInfo/>}/>
    </Route>
    <Route path="*" element={<Error/>}/>
   </>
  )
);



function App() {
  return (
    <RouterProvider
    router={router}
  />

  )
}

export default App
