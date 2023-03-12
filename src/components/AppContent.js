import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'

// routes config
import routes from '../routes'
const StudentSinglePage = React.lazy(() => import('../views/student/studentPage/studentSinglePage'))
const StudentPage = React.lazy(() => import('../views/student/studentPage/studentPage'))

const NotFound = () => {
  return (
    <div>
      <h1>404 Not Found</h1>
      <p>The page you requested could not be found.</p>
    </div>
  )
}

const AppContent = () => {
  return (
    <CContainer lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Routes>
          {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                />
              )
            )
          })}
          <Route path="/" element={<Navigate to="dashboard" replace />} />
          {/* <Route path="/student/:id" element={<StudentSinglePage />} /> */}
          <Route path="/student">
            <Route index element={<StudentPage />} />
            <Route
              path=":id/:grade/:name/:contact/:careGiverEmail"
              element={<StudentSinglePage />}
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)
