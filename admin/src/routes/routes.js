import LoginPage from "../components/auth/LoginPage";
import Dashboard from "../components/page/dashboard/Dashboard";
import Event from "../components/page/event/Event";
import Location from "../components/page/location/Location";
import Organizational from "../components/page/organization/Organizational";
import Ticket from "../components/page/ticket/Ticket";

const privateRoutes = [
  {
    path: "/",
    component: Dashboard,
  },
  {
    path: "/organization",
    component: Organizational,
  },
  {
    path: "/location",
    component: Location,
  },
  {
    path : "/event",
    component: Event
  },
{
  path: '/ticket', 
  component: Ticket
}
];

const publicRoutes = [
  {
    path: "/login",
    component: LoginPage,
  },
];

export { privateRoutes, publicRoutes };
