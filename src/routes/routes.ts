import {RouteType} from "../views/components/RouteSwitch/RouteSwitcher";

const routes: Record<string, RouteType> = {
    home: {
        path: '/',
        component: () => import('../pages/Home/Home'),
    },
    // search: {
    //     path: '/search',
    //     component: () => import('views/pages/Home'),
    // },
    // favorites: {
    //     path: '/favorites',
    //     component: () => import('views/pages/Home'),
    // },
    // watchLater: {
    //     path: '/watch-later',
    //     component: () => import('views/pages/Home'),
    // }
}

export default routes
