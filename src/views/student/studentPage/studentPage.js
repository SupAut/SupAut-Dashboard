import React, { useState, useEffect, Children } from 'react'
import { useParams } from 'react-router-dom'
import { Routes, Navigate } from 'react-router'
import { BrowserRouter as Router, Route } from 'react-router-dom'

//import db from '../../../firebase'
import {
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
  CAvatar,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CBadge,
  CButton,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilHamburgerMenu, cilPeople } from '@coreui/icons'
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from '@coreui/react-chartjs'

import {
  CCard,
  CCardBody,
  CCardTitle,
  CCardSubtitle,
  CCardText,
  CCardLink,
  CCol,
  CRow,
} from '@coreui/react'
//import { collection, query, onSnapshot } from 'firebase/firestore
// useEffect(
//   () =>
//     onSnapshot(query(collection(db, 'order')), (orderSnapshot2) => {
//       const orderInfoTable = []
//       orderSnapshot2.forEach((orderDoc) => {
//         var orderInfo = orderDoc.data()
//         let itemArr = []
//         orderInfo.item.forEach((orderItem) => {
//           itemArr.push({ name: orderItem.name, quantity: orderItem.quantity })
//         })
//         orderInfoTable.push({
//           item: itemArr,
//           date: orderInfo.timepoint.date,
//           time: orderInfo.timepoint.time,
//           id: orderDoc.id,
//           customer: {
//             name: orderInfo.customer.name,
//             contact: orderInfo.customer.contact,
//           },
//           quantity: parseInt(orderInfo.item[0].quantity),
//         })
//       })
//       setOrder(orderInfoTable)
//     }),
//   [],
// )

// useEffect(
//   () =>
//     onSnapshot(query(collection(db, 'product')), (custSnapshot) => {
//       const productArr = []
//       custSnapshot.forEach((prodDoc) => {
//         var prodInfo = prodDoc.data()
//         //get sales history
//         let saleList = []
//         order.forEach((singleOrder) => {
//           singleOrder.item.forEach((orderItem) => {
//             if (orderItem.name === prodInfo.name) {
//               saleList.push({
//                 date: singleOrder.date,
//                 time: singleOrder.time,
//                 id: singleOrder.id,
//                 customer: {
//                   name: singleOrder.name,
//                   contact: singleOrder.contact,
//                 },
//                 quantity: singleOrder.quantity,
//               })
//             }
//           })
//         })
//         productArr.push({
//           item: {
//             id: prodDoc.id,
//             name: prodInfo.name,
//             measurement: prodInfo.measurement,
//             price: parseInt(prodInfo.price),
//           },
//           sales: saleList,
//           itemStatus: prodInfo.status,
//         })
//       })
//       setProduct(productArr)
//     }),
//   [order],
// )
const handleClick = () => {
  console.log('Download IEP Report')
}
const handleClickAgain = () => {
  console.log('Send IEP Report')
}
function StudentDetails(props) {
  const { id } = useParams()
  return (
    <div>
      <h1>Student Details</h1>
      <p>ID: {id}</p>
    </div>
  )
}

;<CRow xs={{ cols: 2 }} md={{ cols: 2 }}>
  <CCol xs={12}>
    <CCard className="mb-4">
      <CCardBody>
        <h2>
          <CIcon icon={cilPeople} height={36} style={{ marginRight: '20px' }} />
          Student Details
          <p>ID : {1}</p>
        </h2>
        <br />
        <div style={{ margin: '50px 0 30px 0' }}>
          <h5 style={{ width: '280px', display: 'inline-block' }}>Student Name</h5>
          <h5 style={{ display: 'inline-block' }}>: John Doe</h5>
        </div>
        <div style={{ margin: '30px 0' }}>
          <h5 style={{ width: '280px', display: 'inline-block' }}>Student Contact Number</h5>
          <h5 style={{ display: 'inline-block' }}>: 0789095692</h5>
        </div>
        <div style={{ margin: '30px 0' }}>
          <h5 style={{ width: '280px', display: 'inline-block' }}>Caregiver Name</h5>
          <h5 style={{ display: 'inline-block' }}>: Jane Doe</h5>
        </div>
        <div style={{ margin: '30px 0' }}>
          <h5 style={{ width: '280px', display: 'inline-block' }}>Caregiver Contact Number</h5>
          <h5 style={{ display: 'inline-block' }}>: 0789095697</h5>
        </div>
        <div style={{ margin: '30px 0' }}>
          <h5 style={{ width: '280px', display: 'inline-block' }}>Caregiver Email Address</h5>
          <h5 style={{ display: 'inline-block' }}>: janedoe@gmail.com</h5>
        </div>
        <CCol xs={12}>
          <br />
          <CButton
            color="primary"
            size="md"
            style={{ marginRight: '200px' }}
            button
            onClick={handleClick}
          >
            Download IEP Report
          </CButton>
          <CButton color="primary" size="md" button onClick={handleClickAgain('Send IEP Report')}>
            Send IEP Report
          </CButton>
        </CCol>
      </CCardBody>
    </CCard>
  </CCol>
  <CCol xs={12}>
    <CCard className="mb-4">
      <CCardBody>
        <h2 style={{ marginBottom: '50px' }}>Progress of Student Skills</h2>
        <CChartPie
          width={700}
          height={500}
          data={{
            labels: ['Creativity', 'Time management', 'Logical Skills', 'Visual Skills'],
            datasets: [
              {
                backgroundColor: ['#ffc107', '#6610f2', '#00D8FF', '#DD1B16'],
                data: [40, 20, 80, 10],
              },
            ],
          }}
        />
      </CCardBody>
    </CCard>
  </CCol>
</CRow>
// eslint-disable-next-line no-undef
export default ViewProductsPage
