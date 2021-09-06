import { CATALOG_PATH, LOGIN_PATH, REGISTER_PATH } from "./util/const";
import Login from './components/Login'
import Catalog from './components/Catalog'
import Register from "./components/Register";

export const pablish_route = [
    {
        path:REGISTER_PATH,
        Component: Register
    },
    {
        path:LOGIN_PATH,
        Component: Login
    }   
];
export const privat_route = [
    {
        path:CATALOG_PATH,
        Component: Catalog
    }
];