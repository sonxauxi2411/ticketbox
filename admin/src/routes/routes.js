import LoginPage from "../components/auth/LoginPage";
import Location from "../components/page/location/Location";
import CreateOrg from "../components/page/organization/CreateOrg";
import Organizational from "../components/page/organization/Organizational";


const privateRoutes = [
    {
        path:'/organization', component : Organizational 
    },
    {
        path: '/organization/create', component : CreateOrg
    },
    {
        path: '/location' , component : Location
    }

]

const publicRoutes = [
    {
        path:'/login', component :LoginPage
    }
]

export {privateRoutes, publicRoutes}