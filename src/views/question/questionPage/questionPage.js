import { collection, query, onSnapshot, setDoc, doc, getDocs } from 'firebase/firestore'
import db from '../../../firebase'
import React, { useState, useEffect } from 'react'
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

const ViewQuestionsPage = () => {
  const [question, setQuestion] = useState([
    {
      topic: 'PS',
      count: 1,
      date: '27/02/2023',
    },
  ])
  useEffect(
    () =>
      onSnapshot(query(collection(db, 'question')), (questionSnapshot2) => {
        const questionInfoTable = []
        questionSnapshot2.forEach((questionDoc) => {
          var questionInfo = questionDoc.data()
          questionInfoTable.push({
            topic: questionInfo.topic,
            count: questionInfo.count,
            date: questionInfo.date,
          })
        })
        setQuestion(questionInfoTable)
      }),
    [],
  )
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>Questions List Group</CCardHeader>
          <CCardBody>
            <CTable>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">#</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Detail</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Question</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Answer</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Activity</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {question.map((ques, index) => (
                  <CTableRow v-for="ques in tableItems" key={index}>
                    <CTableHeaderCell scope="row">
                      <CAvatar color="secondary" textColor="white">
                        <div>{ques.count}</div>
                      </CAvatar>
                    </CTableHeaderCell>
                    <CTableDataCell>
                      <div>{ques.topic} </div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <CButton color="primary">Question Details</CButton>
                    </CTableDataCell>
                    <CTableDataCell>
                      <CButton color="primary">Answer Details</CButton>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{ques.date} </div>
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

export default ViewQuestionsPage
