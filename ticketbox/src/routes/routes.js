import LoginPage from "../components/auth/LoginPage";
import CategoryPage from "../components/category/CategoryPage";
import Event from "../components/event/Event";
import Home from "../components/home/Home";

const privateRoutes = [
 
];

const publicRoutes = [
 {
    path:'/login',
    component : LoginPage 
 },
 {
   path:'/' ,
   component : Home
 },
 {
   path:'/events',
   component : CategoryPage
 },
 {
   path:'event/:eventId',
   component : Event
 }
];

export { privateRoutes, publicRoutes };
