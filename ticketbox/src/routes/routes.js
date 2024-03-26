import LoginPage from "../components/auth/LoginPage";
import BookingPage from "../components/booking/BookingPage";
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
 },{
  path : "booking/:eventId",
  component : BookingPage
 }
];

export { privateRoutes, publicRoutes };
