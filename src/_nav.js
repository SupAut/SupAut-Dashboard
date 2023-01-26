import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilBell, cilCalculator, cilSpeedometer } from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavGroup,
    name: 'Questions',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Question Page',
        to: '/question/questionPage',
      },
      {
        component: CNavItem,
        name: 'Add Question',
        to: '/question/addQuestion',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Students',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Student Page',
        to: '/student/studentPage',
      },
      {
        component: CNavItem,
        name: 'Add Student',
        to: '/student/addStudent',
      },
    ],
  },
]

export default _nav
