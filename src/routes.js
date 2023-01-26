import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

// Question
const AddQuestion = React.lazy(() => import('./views/question/addQuestion/addQuestion'))
const QuestionPage = React.lazy(() => import('./views/question/questionPage/questionPage'))

// Student
const AddStudent = React.lazy(() => import('./views/student/addStudent/addStudent'))
const StudentPage = React.lazy(() => import('./views/student/studentPage/studentPage'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/question', name: 'Question', element: QuestionPage, exact: true },
  { path: '/question/questionPage', name: 'Question Page', element: QuestionPage },
  { path: '/question/addQuestion', name: 'Add Question', element: AddQuestion },
  { path: '/student', name: 'Student', element: StudentPage, exact: true },
  { path: '/student/studentPage', name: 'Student Page', element: StudentPage },
  { path: '/student/addStudent', name: 'Add Student', element: AddStudent },
  { path: '/widgets', name: 'Widgets', element: Widgets },
]

export default routes
