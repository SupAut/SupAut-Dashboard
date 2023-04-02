import { collection, query, onSnapshot } from 'firebase/firestore'
import db from '../../../firebase'
import React, { useState, useEffect } from 'react'
import {
  CAvatar,
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

import { CCard, CCardHeader, CCardBody, CCol, CRow } from '@coreui/react'

const ViewQuestionsPage = () => {
  const [question, setQuestion] = useState([
    {
      grade: '6',
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
        var questionInfoTable = []
        questionSnapshot2.forEach((questionDoc) => {
          var questionInfo = questionDoc.data()
          questionInfoTable.push({
            grade: questionInfo.grade,
            topic: questionInfo.topic,
            count: parseInt(questionInfo.count),
            date: questionInfo.date,
            decription: questionInfo.description,
            modelAnswer: questionInfo.modelAnswer,
            question: questionInfo.question,
            score: questionInfo.score,
          })
        })
        questionInfoTable = questionInfoTable.sort((a, b) => a.count - b.count) // sort by count
        setQuestion(questionInfoTable)
      }),
    [],
  )
  const [subcollectionData, setSubcollectionData] = useState([{ mews: 'a', sandy: 'b', zain: 'c' }])
  useEffect(
    () =>
      onSnapshot(query(collection(db, 'question', '1', 'answers')), (questionAnswerSnapshot2) => {
        const questionAnswerTable = []
        questionAnswerSnapshot2.forEach((questionAnswerDoc) => {
          var questionAnswerInfo = questionAnswerDoc.data()
          questionAnswerTable.push({
            zain: questionAnswerInfo.zain,
            sandy: questionAnswerInfo.sandy,
            mews: questionAnswerInfo.mews,
          })
        })
        setSubcollectionData(questionAnswerTable)
      }),
    [],
  )
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>Questions List Group</CCardHeader>
          <CCardBody>
            <CTable align="middle" className="mb-0 border" responsive>
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
                      <CAvatar
                        size="md"
                        src={`https://ui-avatars.com/api/?background=random&rounded=true&bold=true&name=${ques.count}`}
                      >
                        <div>{ques.count}</div>
                      </CAvatar>
                    </CTableHeaderCell>
                    <CTableDataCell>
                      <div>{ques.topic} </div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <CAccordion flush>
                        <CAccordionItem itemKey={1}>
                          <CAccordionHeader>Question Detail</CAccordionHeader>
                          <CAccordionBody>
                            <p>Question Detail ({ques.topic})</p>
                            <p>Class: {ques.class}</p>
                            <p>Question Number: {ques.count}</p>
                            <p>Grade: {ques.grade}</p>
                            <p>Question: {ques.question}</p>
                            <p>Description: {ques.description}</p>
                            <p>Model Answer: {ques.modelAnswer}</p>
                          </CAccordionBody>
                        </CAccordionItem>
                      </CAccordion>
                    </CTableDataCell>
                    <CTableDataCell>
                      <>
                        {subcollectionData.map((item, index) => (
                          <CAccordion flush key={index}>
                            <CAccordionItem>
                              <CAccordionHeader>Answer Detail</CAccordionHeader>
                              <CAccordionBody>
                                <p>Answers for Question {ques.count}:</p>
                                <p>- {item.sandy}</p>
                                <p>- {item.zain}</p>
                                <p>- {item.mews}</p>
                              </CAccordionBody>
                            </CAccordionItem>
                          </CAccordion>
                        ))}
                      </>
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
