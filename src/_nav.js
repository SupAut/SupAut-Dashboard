import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilSpeedometer,
  cilList,
  cilCursor,
  cilPencil,
  cilAddressBook,
  cilLibraryAdd,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'
import { collection, query, onSnapshot } from 'firebase/firestore'
import db from './firebase'

const studentInfoTable = []

async function getStudentList() {
  onSnapshot(query(collection(db, 'student')), (studentSnapshot) => {
    studentSnapshot.forEach((studentDoc) => {
      var studentInfo = studentDoc.data()
      studentInfoTable.push({
        id: studentDoc.id,
        class: studentInfo.class,
        name: studentInfo.name,
        contact: studentInfo.contact,
        careGiverEmail: studentInfo.careGiverEmail,
        careGiverContact: studentInfo.careGiverContact,
        skill: {
          creativity: studentInfo.skill.creativity,
          logical: studentInfo.skill.logical,
          time: studentInfo.skill.time,
          visual: studentInfo.skill.visual,
        },
      })
    })
  })
  return studentInfoTable
}

// let studentList = getStudentList()
// console.log('STUDENT LIST IS:')
// console.log(studentList)

var studentList = [
  {
    id: '1',
    grade: '7',
    name: 'John Doe',
    contact: '0776792726',
    careGiverEmail: 'doe@gmail.com',
    careGiverContact: '0776792724',
    skill: { creativity: '3', logical: '4', time: '4', visual: '5' },
  },
  {
    id: '2',
    grade: '7',
    name: 'Jelly Doe',
    contact: '0776792726',
    careGiverEmail: 'doe@gmail.com',
    careGiverContact: '0776792724',
    skill: { creativity: '3', logical: '4', time: '4', visual: '5' },
  },
  {
    id: '3',
    grade: '7',
    name: 'Jonee Doe',
    contact: '0776792726',
    careGiverEmail: 'doe@gmail.com',
    careGiverContact: '0776792724',
    skill: { creativity: '3', logical: '4', time: '4', visual: '5' },
  },
]

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
    component: CNavTitle,
    name: 'Question',
  },
  {
    component: CNavItem,
    name: 'Question Page',
    to: '/question/questionPage',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Add Question',
    to: '/question/addQuestion',
    icon: <CIcon icon={cilLibraryAdd} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Student',
  },
  {
    component: CNavItem,
    name: 'Add Student',
    to: '/student/addStudent',
    icon: <CIcon icon={cilAddressBook} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Student Page',
    to: '/student/studentPage',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Student List',
    icon: <CIcon icon={cilList} customClassName="nav-icon" />,
    items: [],
  },
]

const additionalItems = studentList.map((student) => ({
  component: CNavItem,
  name: `Student - ${student.id}`,
  to: `/student/${student.id}/${student.grade}/${student.name}/${student.contact}/${student.careGiverEmail}`,
}))

const updatedNav = [
  ..._nav.slice(0, 7),
  { ..._nav[7], items: [..._nav[7].items, ...additionalItems] },
  ..._nav.slice(8),
]

export default updatedNav
