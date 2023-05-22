import {createBrowserRouter, Outlet} from 'react-router-dom';
import Home from '../conatiner/Home';
import NotFound from '../common/NotFound/NotFound';
import Header from '../component/Header/Header';
import CategoryState from '../context/category/CategoryState';
import ProductState from '../context/product/ProductState';
import Products from '../conatiner/Products';
import FilterState from '../context/filter/FilterState';
import DisplayProductDetail from '../conatiner/DisplayProductDetail';
import Cart from '../conatiner/Cart';
import SingIn from '../conatiner/SingIn';
import AuthState from '../context/auth/AuthState';
import { ToastContainer } from "react-toastify";
import RequiresAuth from './RequiresAuth';
import Wishlist from '../conatiner/Wishlist';
import SignUp from '../conatiner/SignUp';
import AddressState from '../context/address/AddressState';
import Address from '../conatiner/Address';
import OrderSummary from '../conatiner/OrderSummary';

const Applayout = () => {
    return (
        <>
        <AuthState>
        <CategoryState>
        <ProductState>
        <FilterState>
        <AddressState>
        <Header />
        <main className='py-3'>
            <Outlet />
            <ToastContainer />
        </main>
        </AddressState>
        </FilterState>
        </ProductState>
        </CategoryState>
        </AuthState>
        </>
    )
}

const Routing =  createBrowserRouter([
    {
        path: '/',
        element: <Applayout/>,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/products',
                element: <Products />
            },
            {
                path: '/product/:id',
                element: <DisplayProductDetail />
            },
            {
                path: '/cart/:id?',
                element: <RequiresAuth><Cart /></RequiresAuth>
            },
            {
                path: '/wishlist',
                element: <RequiresAuth><Wishlist /></RequiresAuth>
            },
            {
                path: '/address',
                element: <RequiresAuth><Address /></RequiresAuth>
            },
            {
                path: '/order-summary',
                element: <RequiresAuth><OrderSummary /></RequiresAuth>
            },
            {
                path: '/signin',
                element: <SingIn />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
        ]
    }
])


export default Routing;