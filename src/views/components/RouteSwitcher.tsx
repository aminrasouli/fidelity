import React, { ComponentType, FC, lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Backdrop } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

export interface RouteType {
	path: `/${string}`;
	component: () => Promise<any>;
}

export interface RouteSwitcherProps
	extends React.HTMLAttributes<HTMLDivElement> {
	routes: Record<string, RouteType>;
}

export const Loading = () => (
	<Backdrop
		sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
		open
	>
		<CircularProgress color="inherit" />
	</Backdrop>
);

const RouteSwitcher: FC<RouteSwitcherProps> = ({ routes, children }) => {
	return (
		<Suspense fallback={<Loading />}>
			<Routes>
				{Object.keys(routes).map((key) => {
					const { path, component } = routes[key];
					const Component: ComponentType = lazy(component);
					return <Route key={key} path={path} element={<Component />} />;
				})}
				<Route
					path="*"
					element={
						children || <Navigate to={Object.values(routes)[0].path} replace />
					}
				/>
			</Routes>
		</Suspense>
	);
};
export default RouteSwitcher;
