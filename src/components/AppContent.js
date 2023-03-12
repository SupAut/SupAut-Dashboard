import React, { useState, useEffect, Suspense } from 'react'
import { collection, query, onSnapshot, setDoc, doc, getDocs } from 'firebase/firestore'
import db from '../firebase'
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

const student = {
  id: '1',
  class: '7',
  name: 'John Doe',
  contact: '0776792726',
  careGiverEmail: 'doe@gmail.com',
  careGiverContact: '0776792724',
  skill: { creativity: '3', logical: '4', time: '4', visual: '5' },
}

const AppContent = () => {
  // const [student, setStudent] = useState([
  //   {
  //     id: '1',
  //     class: '7',
  //     name: 'John Doe',
  //     contact: '0776792726',
  //     careGiverEmail: 'doe@gmail.com',
  //     careGiverContact: '0776792724',
  //     skill: { creativity: '3', logical: '4', time: '4', visual: '5' },
  //   },
  // ])
  // useEffect(
  //   () =>
  //     onSnapshot(query(collection(db, 'student')), (studentSnapshot) => {
  //       const studentInfoTable = []
  //       studentSnapshot.forEach((studentDoc) => {
  //         var studentInfo = studentDoc.data()
  //         studentInfoTable.push({
  //           id: studentDoc.id,
  //           class: studentInfo.class,
  //           name: studentInfo.name,
  //           contact: studentInfo.contact,
  //           careGiverEmail: studentInfo.careGiverEmail,
  //           careGiverContact: studentInfo.careGiverContact,
  //           // skill: {
  //           //   creativity: studentInfo.skill.creativity,
  //           //   logical: studentInfo.skill.logical,
  //           //   time: studentInfo.skill.time,
  //           //   visual: studentInfo.skill.visual,
  //           // },
  //         })
  //       })
  //       setStudent(studentInfoTable)
  //     }),
  //   [],
  // )
  // console.log(student)
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
