import React, { useState, useEffect } from 'react'
import { collection, query, onSnapshot, setDoc, doc, getDocs } from 'firebase/firestore'
import db from '../../../firebase'
import {
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
  CAvatar,
  CButton,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CBadge,
  CCard,
  CCardHeader,
  CCardBody,
  CCol,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilHamburgerMenu } from '@coreui/icons'

const StudentPage = () => {
  const [student, setStudent] = useState([
    {
      id: '1',
      class: '7',
      name: 'John Doe',
      contact: '0776792726',
      careGiverEmail: 'doe@gmail.com',
      careGiverContact: '0776792724',
      skill: { creativity: '3', logical: '4', time: '4', visual: '5' },
    },
  ])
  useEffect(
    () =>
      onSnapshot(query(collection(db, 'student')), (studentSnapshot) => {
        const studentInfoTable = []
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
        setStudent(studentInfoTable)
      }),
    [],
  )
  console.log(student)
  return (
    // <CRow>
    //   <CCol xs={12}>
    //     <CCard className="mb-4">
    //       <CCardHeader>Student List Group</CCardHeader>
    //       <CCardBody>
    //         <CTable>
    //           <CTableHead>
    //             <CTableRow>
    //               <CTableHeaderCell scope="col">#</CTableHeaderCell>
    //               <CTableHeaderCell scope="col">Class</CTableHeaderCell>
    //               <CTableHeaderCell scope="col">Name</CTableHeaderCell>
    //               <CTableHeaderCell scope="col">Contatc</CTableHeaderCell>
    //               <CTableHeaderCell scope="col">Activity</CTableHeaderCell>
    //             </CTableRow>
    //           </CTableHead>
    //           <CTableBody>
    //             {student.map((student, index) => (
    //               <CTableRow v-for="ques in tableItems" key={index}>
    //                 <CTableHeaderCell scope="row">
    //                   <CAvatar color="secondary" textColor="white">
    //                     <div>{ques.count}</div>
    //                   </CAvatar>
    //                 </CTableHeaderCell>
    //                 <CTableDataCell>
    //                   <div>{ques.topic} </div>
    //                 </CTableDataCell>
    //                 <CTableDataCell>
    //                   <CButton color="primary">Question Details</CButton>
    //                 </CTableDataCell>
    //                 <CTableDataCell>
    //                   <CButton color="primary">Answer Details</CButton>
    //                 </CTableDataCell>
    //                 <CTableDataCell>
    //                   <div>{ques.date} </div>
    //                 </CTableDataCell>
    //               </CTableRow>
    //             ))}
    //           </CTableBody>
    //         </CTable>
    //       </CCardBody>
    //     </CCard>
    //   </CCol>
    // </CRow>
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
            <CTable align="middle" className="mb-0 border" responsive>
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell className="text-center">
                    <CIcon icon={cilHamburgerMenu} />
                  </CTableHeaderCell>
                  <CTableHeaderCell>Student Details</CTableHeaderCell>
                  <CTableHeaderCell className="text-center">Care Giver Contact</CTableHeaderCell>
                  <CTableHeaderCell>Care Giver Email</CTableHeaderCell>
                  <CTableHeaderCell>Care Giver Details</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {student.map((student, index) => (
                  <CTableRow v-for="cust in tableItems" key={index}>
                    {/* Avatar */}
                    <CTableDataCell className="text-center">
                      <CAvatar
                        size="md"
                        src={`https://ui-avatars.com/api/?background=random&rounded=true&bold=true&name=${student.id}`}
                      />
                    </CTableDataCell>
                    {/* Student Details */}
                    <CTableDataCell>
                      <div>{student.name}</div>
                      <div className="small text-medium-emphasis">
                        Grade : {student.class} | Contact : {student.contact}
                      </div>
                    </CTableDataCell>
                    {/* Care giver contact */}
                    <CTableDataCell className="text-center">
                      {student.careGiverContact}
                    </CTableDataCell>
                    {/* Care giver email*/}
                    <CTableDataCell className="text-center">
                      {student.careGiverEmail}
                    </CTableDataCell>
                    {/* caregiver details */}
                    <CTableDataCell>
                      {student.careGiverContact} | {student.careGiverEmail}
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default StudentPage
