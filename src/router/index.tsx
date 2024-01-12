import { createBrowserRouter } from 'react-router-dom';
import HomeTemplate from '../templates/home/home-template';
import Home from '../pages/home/home';
import Roomlist from '../pages/roomlist/roomlist';
import Roomdetail from '../pages/roomdetail/roomdetail';
import Login from '../pages/login/login';
import Register from '../pages/register/register';
import RoomMng from '../pages/room-mng/room-mng';
import UserMng from '../pages/user-mng/user-mng';
// import Locations from '../components/Location/location';
// import ListLocations from '../components/Location/list-locations/list-locations';
import Locations from '../pages/locations/locations';

export const router = createBrowserRouter([
    {
        element: <HomeTemplate />,
        children: ([
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/room/:idRoom",
                element: <Roomlist />
            },
            {
                path: "/room-detail/:id",
                element: <Roomdetail />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/room-mng",
                element: <RoomMng />
            },
            {
                path: "/user-mgn",
                element: <UserMng />
            },
            {
                path: "/Locations",
                element: <Locations />
            }

        ])
    },

])