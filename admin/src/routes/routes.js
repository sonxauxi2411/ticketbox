import LoginPage from "../components/auth/LoginPage";
import CreateOrg from "../components/page/CreateOrg";
import Organizational from "../components/page/Organizational";


const privateRoutes = [
    {
        path:'/organization', component : Organizational 
    },
    {
        path: '/organization/create', component : CreateOrg
    },

]

const publicRoutes = [
    {
        path:'/login', component :LoginPage
    }
]

export {privateRoutes, publicRoutes}