import { Route, Routes } from 'react-router-dom'

import { RoutePaths } from './RoutePaths.jsx'
import { Home } from '../home/Home.jsx'
import { NotFound } from './NotFound.jsx'
import { Layout } from './Layout.jsx'

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
