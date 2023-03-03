import React from 'react'

export interface RouteType {
  path: `/${string}`
  component: () => Promise<any>
}

export interface RouteSwitcherProps extends React.HTMLAttributes<HTMLDivElement> {
  routes: Record<string, RouteType>
}
