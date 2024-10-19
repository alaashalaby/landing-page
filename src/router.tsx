import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./components/Layout";
import CartPage from "./pages/CartPage";
import Homepage from "./pages/Homepage";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="cart" element={<CartPage/>}/>
        </Route>
    )
)


export default router;