import { RouteType } from '../views/components/RouteSwitcher';

const routes: Record<string, RouteType> = {
	home: {
		path: '/',
		component: () => import('../pages/Home'),
	},
	search: {
		path: '/search',
		component: () => import('../pages/Search'),
	},
	favorites: {
		path: '/favorites',
		component: () => import('../pages/Favorites'),
	},
	watchLater: {
		path: '/watch-later',
		component: () => import('../pages/WatchLater'),
	},
};

export default routes;
