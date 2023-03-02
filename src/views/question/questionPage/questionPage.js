import { collection, query, onSnapshot, setDoc, doc, getDocs } from 'firebase/firestore'
import db from '../../../firebase'
import React, { useState, useEffect } from 'react'
//import db from '../../../firebase'
import {
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
  CAvatar,
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CBadge,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilHamburgerMenu } from '@coreui/icons'

import { CCard, CCardHeader, CCardBody, CCol, CRow } from '@coreui/react'

const ViewQuestionsPage = () => {
  const [visible, setVisible] = useState(false)
  const [question, setQuestion] = useState([
    {
      class: '6',
      topic: 'PS',
      count: 1,
      date: '27/02/2023',
      description: 'This question is from the topic of chemistry and elements.',
      modelAnswer: 'Au',
      question: 'What is the chemical symbol for gold?',
      score: '10',
    },
  ])
  useEffect(
    () =>
      onSnapshot(query(collection(db, 'question')), (questionSnapshot2) => {
        const questionInfoTable = []
        questionSnapshot2.forEach((questionDoc) => {
          var questionInfo = questionDoc.data()
          questionInfoTable.push({
            class: questionInfo.class,
            topic: questionInfo.topic,
            count: questionInfo.count,
            date: questionInfo.date,
            decription: questionInfo.description,
            modelAnswer: questionInfo.modelAnswer,
            question: questionInfo.question,
            score: questionInfo.score,
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
                      {/* <CButton color="primary">Question Details</CButton> */}
                      <CButton onClick={() => setVisible(!visible)}>Question Details</CButton>
                      <CModal
                        alignment="center"
                        visible={visible}
                        onClose={() => setVisible(false)}
                      >
                        <CModalHeader>
                          <CModalTitle>Question Detail {ques.topic}</CModalTitle>
                        </CModalHeader>
                        <CModalBody>
                          <p>Class: {ques.class}</p>
                          <p>Question Number: {ques.count}</p>
                          <p>Class: {ques.class}</p>
                          <p>Question: {ques.question}</p>
                          <p>Description: {ques.description}</p>
                          <p>Model Answer: {ques.modelAnswer}</p>
                        </CModalBody>
                        <CModalFooter>
                          <CButton color="secondary" onClick={() => setVisible(false)}>
                            Close
                          </CButton>
                        </CModalFooter>
                      </CModal>
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
