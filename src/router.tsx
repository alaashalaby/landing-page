import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./components/Layout";
import CartPage from "./pages/CartPage";
import Homepage from "./pages/Homepage";
import ProductsPage from "./pages/ProductsPage";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="cart" element={<CartPage/>}/>
        </Route>
    )
)


export default router;