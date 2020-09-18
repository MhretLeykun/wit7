import Home from "./components/Home";
import Profile from "./pages/profile/Profile";
import Welcomeform from "./pages/Welcomeform";
import Welcome from "./Welcome";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import Create from "./pages/profile/Create";
export default [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/profile",
        name: "Profile",
        component: Profile
    },
    {
        path: "/Home",
        name: "Home",
        component: Home
    },
    {
        path: "/",
        name: "Welcome",
        component: Welcome
    },
    {
        path: "/Welcomeform",
        name: "Welcomeform",
        component: Welcomeform
    },
    {
        path: "/register",
        name: "register",
        component: Register
    },
    {
        path: "/login",
        name: "login",
        component: Login
    }
];
