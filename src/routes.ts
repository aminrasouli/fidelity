export interface RouteType {
  path: `/${string}`
  component: () => Promise<any>
}

const routes: Record<string, RouteType> = {
  home: {
    path: '/',
    component: () => import('src/pages/Home'),
  },
  search: {
    path: '/search',
    component: () => import('src/pages/Search'),
  },
  favorites: {
    path: '/favorites',
    component: () => import('src/pages/Favorites'),
  },
  watchLater: {
    path: '/watch-later',
    component: () => import('src/pages/WatchLater'),
  },
}

export default routes
