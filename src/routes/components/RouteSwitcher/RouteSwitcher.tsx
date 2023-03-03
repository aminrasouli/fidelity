import React, { ComponentType, FC, lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { RouteSwitcherProps } from './RouteSwitcher.types'
import { Loading } from 'src/theme/components/Loading'

const RouteSwitcher: FC<RouteSwitcherProps> = ({ routes, children }) => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {Object.keys(routes).map((key) => {
          const { path, component } = routes[key]
          const Component: ComponentType = lazy(component)
          return <Route key={key} path={path} element={<Component />} />
        })}
        <Route
          path='*'
          element={children || <Navigate to={Object.values(routes)[0].path} replace />}
        />
      </Routes>
    </Suspense>
  )
}
export default RouteSwitcher
