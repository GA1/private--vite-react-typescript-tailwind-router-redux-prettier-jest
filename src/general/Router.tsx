import { Route, Routes } from 'react-router-dom'

import { RoutePaths } from './RoutePaths'
import { Home } from '../home/home.js'
import { NotFound } from './NotFound'
import { Layout } from './Layout'

export const Router = () => (
  <Routes>
    <Route
      path={RoutePaths.HOME}
      element={
        <Layout>
          <Home />
        </Layout>
      }
    />
    <Route
      path='/not-found'
      element={
        <Layout>
          <NotFound />
        </Layout>
      }
    />
  </Routes>
)
