import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import ProfilePage from "../pages/ProfilePage";
import ProductPage from "../pages/ProductPage";

export const Router = () =>{
    return(
    <BrowserRouter>
        <Routes>
            <Route index element = {<HomePage/>}></Route>
            <Route path='*' element = {<ErrorPage/>}></Route>
            <Route path='/profile' element = {<ProfilePage/>}></Route>
            <Route path='product/:product_id' element = {<ProductPage/>}></Route>
        </Routes>
    
    </BrowserRouter>
    )
}