import DefaultView from './views/DefaultView'
import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

const MeasureTime = lazy(
  () => import(/* webpackPrefetch: true */ './views/MeasureTime'),
)

export const ROUTE_PATHS = {
  DEFAULT: '/',
  MEASURE_TIME: '/measure-time',
}

const routes = [
  {
    path: ROUTE_PATHS.DEFAULT,
    element: (
        <DefaultView />
    ),
  },
  {
    path: ROUTE_PATHS.MEASURE_TIME,
    element: (
        <MeasureTime />
    ),
  },
]

export default routes
